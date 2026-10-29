#!/usr/bin/env node
/** Minimal SMTP-over-TLS sender (163/QQ/Gmail style). No dependencies. */
import fs from "node:fs/promises";
import tls from "node:tls";
import path from "node:path";

const ROOT = process.cwd();
const cfg = JSON.parse(await fs.readFile(path.join(ROOT, "secrets/email.json"), "utf8"));

const subject = process.argv[2] ?? "VioraPlay daily";
const text = process.argv[3] ?? "No body";

const b64 = (s) => Buffer.from(s, "utf8").toString("base64");
const encSubject = `=?UTF-8?B?${b64(subject)}?=`;

function send() {
  return new Promise((resolve, reject) => {
    const socket = tls.connect({ host: cfg.host, port: cfg.port, servername: cfg.host }, () => {});
    let buf = "";
    let step = 0;
    const steps = [
      () => `EHLO vioraplay.com\r\n`,
      () => `AUTH LOGIN\r\n`,
      () => `${b64(cfg.user)}\r\n`,
      () => `${b64(cfg.pass)}\r\n`,
      () => `MAIL FROM:<${cfg.user}>\r\n`,
      () => `RCPT TO:<${cfg.to}>\r\n`,
      () => `DATA\r\n`,
      () => {
        const body = [
          `From: "${cfg.fromName}" <${cfg.user}>`,
          `To: <${cfg.to}>`,
          `Subject: ${encSubject}`,
          `Date: ${new Date().toUTCString()}`,
          "MIME-Version: 1.0",
          'Content-Type: text/plain; charset="UTF-8"',
          "Content-Transfer-Encoding: base64",
          "",
          b64(text).replace(/(.{76})/g, "$1\r\n"),
          ".",
        ].join("\r\n");
        return body + "\r\n";
      },
      () => `QUIT\r\n`,
    ];
    socket.setTimeout(20000);
    socket.on("data", (chunk) => {
      buf += chunk.toString("utf8");
      if (!buf.includes("\r\n")) return;
      const lines = buf.trimEnd().split("\r\n");
      const last = lines[lines.length - 1];
      const code = Number(last.slice(0, 3));
      buf = "";
      if (code >= 400) return reject(new Error(`SMTP ${code}: ${last}`));
      if (step >= steps.length) return resolve();
      const next = steps[step++];
      socket.write(next());
      if (step === steps.length) resolve();
    });
    socket.on("error", reject);
    socket.on("timeout", () => reject(new Error("SMTP timeout")));
    socket.on("end", () => resolve());
  });
}

try {
  await send();
  console.log(`sent to ${cfg.to}`);
} catch (err) {
  console.error(`send failed: ${err.message}`);
  process.exit(1);
}

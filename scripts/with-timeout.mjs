#!/usr/bin/env node
/** Kill a child process after N seconds: node scripts/with-timeout.mjs 120 node script.mjs */
import { spawn } from "node:child_process";
const [seconds, cmd, ...args] = process.argv.slice(2);
const child = spawn(cmd, args, { stdio: "inherit" });
const timer = setTimeout(() => {
  console.error(`[timeout] ${cmd} exceeded ${seconds}s`);
  child.kill("SIGKILL");
  process.exit(124);
}, Number(seconds) * 1000);
child.on("exit", (code) => {
  clearTimeout(timer);
  process.exit(code ?? 1);
});

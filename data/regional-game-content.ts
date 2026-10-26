export const REGIONAL_GAME_CONTENT: Record<string, Record<string, {
  title: string;
  intro: string;
  howToPlay?: string;
  controls?: string;
  /** Localized deep copy; overrides the English strategy when present. */
  strategy?: string;
  faq?: { q: string; a: string }[];
}>> = {
  "pt": {
    "arrow-exit-puzzle": {
      "title": "Puzzle de setas online — Arrow Exit Puzzle",
      "intro": "Jogue Arrow Exit Puzzle online: remova as setas escolhendo caminhos livres. Planeje a ordem dos movimentos antes de clicar.",
      "howToPlay": "Escolha uma seta para movê-la na direção indicada. Um obstáculo custa um ponto de vida. Remova as setas sem perder os três pontos de vida.",
      "controls": "Clique na seta no computador ou toque nela no celular."
    },
    "arrow-cube-3d": {
      "title": "Puzzle 3D de setas — Arrow Cube 3D",
      "intro": "Arrow Cube 3D é um puzzle de lógica espacial. Examine o cubo e remova as setas em uma ordem que mantenha os caminhos livres.",
      "howToPlay": "Gire o cubo e examine seus lados. Selecione uma seta sem obstáculos no caminho. Repita até remover todas as setas.",
      "controls": "Toque ou clique em uma seta com caminho livre."
    },
    "2048-knights": {
      "title": "Puzzle de números 2048 — 2048 Knights",
      "intro": "2048 Knights combina números em um puzzle com metas por fase. Deslize peças iguais e alcance a meta com menos movimentos.",
      "howToPlay": "Deslize as peças em uma direção. Números iguais se juntam e dobram de valor. Alcance a meta da fase e planeje os movimentos ao redor dos obstáculos.",
      "controls": "Deslize no celular ou use as setas, WASD ou o controle na tela."
    },
    "geometry-dash-infinity": {
      "title": "Geometry Dash: Infinity - Jogo de Ritmo Online",
      "intro": "Geometry Dash: Infinity e um runner de ritmo onde voce pula e voa por circuitos de obstaculos sincronizados com a musica.",
    },
    "supa-tic-tac-toe": {
      "title": "Jogue Tic Tac Toe Online - Supa Tic Tac Toe",
      "intro": "Supa Tic Tac Toe e o classico jogo da velha no navegador - alinhe tres para vencer.",
    },
    "block-blast-2048": {
      "title": "Block Blast 2048 - Puzzle de Blocos Online",
      "intro": "Block Blast 2048 mistura quebra-cabecas de blocos com fusao de numeros em um unico tabuleiro.",
    },
    "ludo-legend": {
      "title": "Jogue Ludo Online - Ludo Legend",
      "intro": "Ludo Legend e o classico jogo de tabuleiro onde voce corre com suas pecas ate a casa final.",
    },
    "mahjong-classic": {
      "title": "Jogue Mahjong Online - Mahjong Classic",
      "intro": "Mahjong Classic e o jogo de solitario de ladrilhos onde voce limpa o tabuleiro combinando pecas livres.",
    },
    "plants-vs-zombies-fusion-edition": {
      "title": "Plants vs Zombies Fusion - Jogo de Defesa Online",
      "intro": "Plants vs Zombies Fusion Edition e um jogo de tower defense onde voce planta defesas para parar zumbis.",
    },
    "moto-traffic-rider": {
      "title": "Moto Traffic Rider - Jogo de Moto Online",
      "intro": "Moto Traffic Rider e um jogo de moto onde voce zigzagueia entre o transito em alta velocidade.",
    },
    "basket-random": {
      "title": "Basket Random - Jogo de Basquete Online",
      "intro": "Basket Random e um jogo de basquete com fisica divertida e movimentos imprevisiveis.",
    },
    "click-click-clicker-playgama": {
      "title": "Click Click Clicker - Jogo Idle Online",
      "intro": "Click Click Clicker e um jogo idle onde cada toque constroi upgrades automaticos maiores.",
    },
    "idle-tower-defense-be01-1": {
      "title": "Idle Tower Defense - Jogo de Defesa Online",
      "intro": "Idle Tower Defense mistura defesa por ondas com progressao idle que continua mesmo ausente.",
    },
    "block-blast-e170-1": {
      "title": "Block Blast — puzzle de blocos online",
      "intro": "Block Blast é um puzzle de encaixe: arraste as formas para o tabuleiro 8x8 e complete linhas ou colunas para limpar antes que o espaço acabe.",
      "howToPlay": "Arraste cada forma oferecida para o tabuleiro. Linhas e colunas completas somem e pontuam. A partida termina quando nenhuma das três formas cabe.",
      "controls": "Arraste e solte com o mouse ou o dedo."
    },
    "brain-dots": {
      "title": "Brain Dots — puzzle de física online",
      "intro": "Brain Dots é um puzzle de física: desenhe linhas para fazer duas bolinhas se encontrarem. Cada fase dá um número limitado de traços, então o segredo é ângulo e impulso, não velocidade.",
      "howToPlay": "Desenhe uma linha com o mouse ou o dedo; ela vira um objeto sólido. Solte uma bolinha ou deixe a gravidade agir e use a linha como rampa ou parede para desviar até a outra bolinha.",
      "controls": "Desenhe com o mouse ou o dedo; desfazer remove o último traço.",
      "strategy": "Planeje o caminho inteiro antes de desenhar: o primeiro traço define o ângulo de tudo depois. Use as paredes como quique grátis e prefira uma rampa longa a três correções curtas.",
      "faq": [
        { "q": "Por que a bolinha para?", "a": "Atrito e linha reta. Dê inclinação e mantenha o traço curto para a bolinha não perder impulso." },
        { "q": "Dá para desfazer?", "a": "Na maioria das versões sim; desfaça antes de empilhar correções sobre um traço ruim." },
      ]
    },
    "pregnant-mom-simulator-family-life": {
      "title": "Pregnant Mom Simulator — simulação de família online",
      "intro": "Pregnant Mom Simulator Family Life acompanha a rotina de uma mãe e sua família: cuidar da casa, atender necessidades e administrar o tempo entre tarefas.",
      "howToPlay": "Escolha as ações pelo cenário e pelos ícones: alimentar, descansar, limpar e cuidar do bebê. Cada tarefa consome tempo, e deixar necessidades acumularem piora o dia.",
      "controls": "Clique ou toque nos objetos e ícones para interagir.",
      "strategy": "Resolva primeiro a necessidade que está mais baixa; tarefas longas podem esperar. Faça uma rodada de manutenção antes de começar qualquer atividade nova.",
      "faq": [
        { "q": "É um jogo de história?", "a": "É mais simulação de rotina do que narrativa; o objetivo é manter a família em ordem." },
        { "q": "Tem tempo limite?", "a": "Algumas versões têm um dia com relógio; outras são livres. Veja o painel antes de começar." },
      ]
    },
    "busy-bites-tycoon": {
      "title": "Busy Bites Tycoon — simulação de restaurante",
      "intro": "Busy Bites Tycoon é uma simulação de restaurante: acomode clientes, anote pedidos, sirva e reinvista o lucro antes que a fila vire reclamação.",
      "howToPlay": "Os clientes chegam e esperam mesa. Anote o pedido, prepare na estação certa, entregue e limpe a mesa. O dinheiro compra funcionários e melhorias de equipamento.",
      "controls": "Clique ou toque em cliente, estação ou item para interagir.",
      "strategy": "Atenda primeiro quem está mais perto de desistir e melhore a estação que é o gargalo real. Contratar antes de melhorar costuma desperdiçar dinheiro.",
      "faq": [
        { "q": "Por que os clientes vão embora?", "a": "A fila está longa. Adicione ou melhore uma estação antes de contratar mais garçons." },
        { "q": "O que melhorar primeiro?", "a": "A estação com a maior fila, não a mais cara." },
      ]
    },
    "pickaxe-crusher-idle": {
      "title": "Pickaxe Crusher Idle — clicker de mineração",
      "intro": "Pickaxe Crusher Idle é um clicker de mineração: cada golpe quebra pedra, e o minério compra picaretas melhores e brocas automáticas que continuam minerando enquanto você está fora.",
      "howToPlay": "Clique ou toque para golpear. O minério acumula e é gasto em melhorias de dano ou automação. Camadas mais fundas têm pedra mais dura e minério mais valioso.",
      "controls": "Clique ou toque para golpear; melhorias ficam no painel lateral.",
      "strategy": "Compre a melhoria que aumenta dano por segundo antes das de profundidade ou cosméticas. A automação se paga mais rápido pouco antes de você parar de clicar.",
      "faq": [
        { "q": "Continua minerando offline?", "a": "A maioria das versões idle continua, às vezes com taxa reduzida. Veja o painel offline antes de fechar." },
        { "q": "Quando devo reiniciar (prestígio)?", "a": "Quando a próxima camada levar mais tempo do que a run inteira anterior." },
      ]
    },
    "hidden-object-clues-and-mysteries": {
      "title": "Hidden Object: Clues and Mysteries — objetos escondidos",
      "intro": "Hidden Object: Clues and Mysteries esconde objetos em cenas cheias de detalhes e pede que você encontre os itens da lista antes que o tempo acabe.",
      "howToPlay": "Leia a lista e procure cada objeto na cena, clicando nele. Acertos removem o item da lista; cliques errados geralmente custam tempo. Dicas revelam um objeto quando você trava.",
      "controls": "Clique ou toque no objeto; use o botão de dica quando disponível.",
      "strategy": "Divida a cena em faixas e termine uma antes de passar para a próxima. Olhe bordas, reflexos e objetos dentro de outros objetos antes de gastar uma dica.",
      "faq": [
        { "q": "Por que perco tempo?", "a": "Costuma ser reescanear o mesmo canto. Marque a faixa como concluída e siga." },
        { "q": "Quando usar dica?", "a": "Nos últimos dois itens, quando restam menos esconderijos." },
      ]
    },
    "hidden-objects-home-sweet-home": {
      "title": "Hidden Objects: Home Sweet Home — objetos escondidos",
      "intro": "Hidden Objects: Home Sweet Home esconde itens do dia a dia em cenas domésticas cheias de coisas: cozinha, sala, jardim.",
      "howToPlay": "Encontre os objetos da lista clicando neles. Alguns só aparecem depois de abrir uma gaveta ou mover uma cortina.",
      "controls": "Clique ou toque para interagir; dicas revelam um item.",
      "strategy": "Vá de canto a canto em faixas, sem pular. Cenas de casa repetem móveis, então lembre onde itens parecidos se esconderam antes.",
      "faq": [
        { "q": "Não acho um item da lista. E agora?", "a": "Pode estar atrás de uma interação: gaveta, cortina, porta." },
        { "q": "As dicas são limitadas?", "a": "Geralmente sim; gaste nos últimos itens." },
      ]
    },
    "master-chess": {
      "title": "Master Chess — xadrez online grátis",
      "intro": "Master Chess é xadrez clássico no navegador: jogue contra o computador ou outro jogador, com regras completas e sem instalar nada.",
      "howToPlay": "Cada lado começa com 16 peças e move uma por vez. O objetivo é dar xeque-mate no rei adversário. Roque, en passant e promoção seguem as regras normais.",
      "controls": "Clique na peça e depois na casa de destino; arrastar também funciona.",
      "strategy": "Ocupe o centro, desenvolva cavalos e bispos antes de mover a mesma peça duas vezes e faça o roque cedo. No meio-jogo, procure peças indefesas antes de calcular linhas longas.",
      "faq": [
        { "q": "Dá para desfazer?", "a": "Na maioria dos modos sim; use enquanto aprende, mas evite esconder o erro que quer corrigir." },
        { "q": "Jogo contra quem?", "a": "Contra o computador ou em partidas online, dependendo do modo escolhido." },
      ]
    },
    "sudoku-online": {
      "title": "Sudoku Online — sudoku grátis no navegador",
      "intro": "Sudoku Online é o quebra-cabeça de lógica 9x9: preencha as casas vazias sem repetir números em linha, coluna ou bloco.",
      "howToPlay": "Cada linha, coluna e bloco 3x3 deve conter os números de 1 a 9 uma única vez. Clique numa casa e escolha o número; os candidatos podem ser anotados.",
      "controls": "Clique na casa e digite ou selecione o número; use as anotações para candidatos.",
      "strategy": "Faça passes: procure um número que só cabe em uma casa da linha, coluna ou bloco, preencha e repita. Só use anotações quando o passe não render nada.",
      "faq": [
        { "q": "Preciso adivinhar?", "a": "Um sudoku bem formado tem solução única e não exige chute. Revise as anotações antes de arriscar." },
        { "q": "O que é candidato único escondido?", "a": "É um número que só cabe em uma casa da região, mesmo que a casa aceite vários. É o jeito mais rápido de destravar." },
      ]
    },
    "moto-x3m": {
      "title": "Moto X3M — jogo de moto e obstáculos online",
      "intro": "Moto X3M é um jogo de moto em trilhas de obstáculos: acelere, freie e incline a moto para passar de cada rampa sem cair.",
      "howToPlay": "Pilote até o fim da fase passando por rampas, obstáculos e checkpoints. Cair faz você voltar ao último checkpoint; o tempo define as estrelas.",
      "controls": "Setas ou WASD para acelerar, frear e inclinar; R para reiniciar.",
      "strategy": "Trate cada fase como ritmo: acelere no plano, solte antes da rampa e incline para frente no ar para cair na descida. Uma run sem queda vale mais que uma rápida.",
      "faq": [
        { "q": "Como cair sem bater?", "a": "Alinhe o ângulo da moto com a descida e pouse as duas rodas juntas." },
        { "q": "Os checkpoints reiniciam o tempo?", "a": "Eles salvam a posição; a queda volta ao checkpoint, não ao início." },
      ]
    },
    "emerland-solitaire": {
      "title": "Emerland Solitaire — paciência clássica online",
      "intro": "Emerland Solitaire é uma versão de paciência (klondike) com tema de fantasia: organize o tableau, suba as cartas para as fundações e limpe o baralho.",
      "howToPlay": "Mova cartas entre colunas em ordem decrescente e cores alternadas. Leve ases às fundações e suba na sequência do mesmo naipe. O monte compra cartas quando não há jogada.",
      "controls": "Clique ou arraste as cartas; o monte é clicado para comprar.",
      "strategy": "Revele cartas viradas para baixo primeiro e mantenha uma coluna vazia para manobrar. Não suba uma carta às fundações se ela ainda segura uma sequência útil.",
      "faq": [
        { "q": "Toda partida tem solução?", "a": "Não. Algumas distribuições são impossíveis; a maioria é vencível com boa ordem de jogadas." },
        { "q": "Posso recomeçar?", "a": "Sim; se travar, mude a ordem dos primeiros movimentos antes de repetir." },
      ]
    },
  },
  "es": {
    "arrow-exit-puzzle": {
      "title": "Juego de flechas online — Arrow Exit Puzzle",
      "intro": "Juega Arrow Exit Puzzle online: despeja la cuadrícula eligiendo flechas con caminos libres. Planifica el orden antes de hacer tu movimiento.",
      "howToPlay": "Elige una flecha para moverla en su dirección. Un obstáculo cuesta un punto de vida. Retira las flechas sin perder los tres puntos de vida.",
      "controls": "Haz clic en una flecha o tócala en el móvil."
    },
    "arrow-cube-3d": {
      "title": "Puzzle de flechas 3D — Arrow Cube 3D",
      "intro": "Arrow Cube 3D es un puzzle de lógica espacial. Examina el cubo y retira las flechas en un orden que mantenga libres las salidas.",
      "howToPlay": "Gira el cubo para ver sus lados. Elige una flecha cuyo camino esté libre. Repite hasta retirar todas las flechas.",
      "controls": "Toca o haz clic en una flecha con camino libre."
    },
    "2048-knights": {
      "title": "Puzzle de números 2048 — 2048 Knights",
      "intro": "2048 Knights es un puzzle de fusión de números con objetivos por nivel. Desliza fichas iguales y alcanza la meta con menos movimientos.",
      "howToPlay": "Desliza todas las fichas en una dirección. Los números iguales se fusionan y duplican su valor. Alcanza la meta del nivel y planifica alrededor de los obstáculos.",
      "controls": "Desliza en el móvil o usa las flechas, WASD o el control en pantalla."
    }
  },
  "pl": {
    "arrow-exit-puzzle": {
      "title": "Łamigłówka ze strzałkami — Arrow Exit Puzzle",
      "intro": "Graj w Arrow Exit Puzzle online: opróżnij planszę, wybierając strzałki z wolną drogą. Zaplanuj kolejność przed wykonaniem ruchu.",
      "howToPlay": "Wybierz strzałkę, aby przesunąć ją we wskazanym kierunku. Przeszkoda kosztuje punkt życia. Usuń strzałki, nie tracąc wszystkich trzech punktów życia.",
      "controls": "Kliknij strzałkę na komputerze lub dotknij jej na telefonie."
    },
    "arrow-cube-3d": {
      "title": "Łamigłówka 3D — Arrow Cube 3D",
      "intro": "Arrow Cube 3D to łamigłówka przestrzenna. Obejrzyj kostkę i usuwaj strzałki w kolejności zapewniającej wolną drogę.",
      "howToPlay": "Obracaj kostkę, aby obejrzeć jej strony. Wybierz strzałkę z wolną drogą. Powtarzaj, aż usuniesz wszystkie strzałki.",
      "controls": "Dotknij lub kliknij strzałkę z wolną drogą."
    },
    "2048-knights": {
      "title": "Gra liczbowa 2048 — 2048 Knights",
      "intro": "2048 Knights to łamigłówka łącząca liczby z celami na każdym poziomie. Przesuwaj równe liczby i osiągnij cel w mniejszej liczbie ruchów.",
      "howToPlay": "Przesuń wszystkie płytki w jednym kierunku. Równe liczby łączą się, podwajając wartość. Osiągnij cel poziomu i planuj ruchy wokół przeszkód.",
      "controls": "Przesuwaj palcem lub użyj strzałek, WASD albo przycisków na ekranie."
    }
  },
  "ar": {
    "arrow-exit-puzzle": {
      "title": "لعبة ألغاز الأسهم — Arrow Exit Puzzle",
      "intro": "العب Arrow Exit Puzzle أونلاين: أفرغ الشبكة باختيار الأسهم ذات المسارات الخالية. خطط لترتيب الحركات قبل الاختيار.",
      "howToPlay": "اختر سهمًا ليتحرك في اتجاهه. العائق يكلفك نقطة حياة. أزل الأسهم دون خسارة نقاط الحياة الثلاث.",
      "controls": "انقر على السهم بالكمبيوتر أو المسه على الهاتف."
    },
    "arrow-cube-3d": {
      "title": "لغز أسهم ثلاثي الأبعاد — Arrow Cube 3D",
      "intro": "Arrow Cube 3D لغز منطق مكاني. افحص المكعب وأزل الأسهم بترتيب يحافظ على مسارات الخروج خالية.",
      "howToPlay": "أدر المكعب لفحص جوانبه. اختر سهمًا لا يعترض مساره عائق. كرر حتى تخرج جميع الأسهم.",
      "controls": "المس أو انقر على سهم ذي مسار خالٍ."
    },
    "2048-knights": {
      "title": "لعبة أرقام 2048 — 2048 Knights",
      "intro": "2048 Knights لغز لدمج الأرقام مع أهداف لكل مرحلة. حرّك القطع المتساوية وحقق الهدف بعدد أقل من الحركات.",
      "howToPlay": "حرّك جميع القطع في اتجاه واحد. تندمج الأرقام المتساوية وتتضاعف قيمتها. حقق هدف المرحلة وخطط لحركاتك حول العوائق.",
      "controls": "اسحب على الهاتف أو استخدم مفاتيح الأسهم أو WASD أو أزرار الشاشة."
    }
  },
  "vi": {
    "geometry-dash-infinity": {
      "title": "Geometry Dash: Infinity - Choi Game Nhịp Diệu Online",
      "intro": "Geometry Dash: Infinity la game chay nhịp điệu, ban nhay va bay qua cac chuong ngai vật theo nhac.",
    },
    "supa-tic-tac-toe": {
      "title": "Choi Tic Tac Toe Online - Supa Tic Tac Toe",
      "intro": "Supa Tic Tac Toe la tro co ca-ro co dien tren trinh duyet - xep ba o lien tiếp đe thắng.",
    },
    "block-blast-2048": {
      "title": "Block Blast 2048 - Game Xep Gach Online",
      "intro": "Block Blast 2048 kết hop xep gach va ghep so tren cung một bang.",
    },
    "ludo-legend": {
      "title": "Choi Ludo Online - Ludo Legend",
      "intro": "Ludo Legend la co ludo co dien, dua quan co từ đầu đen nha.",
    },
    "mahjong-classic": {
      "title": "Choi Mahjong Online - Mahjong Classic",
      "intro": "Mahjong Classic la tro ghep quan co solitaire, go bo bang bang cach ket đoi quan tu do.",
    },
    "plants-vs-zombies-fusion-edition": {
      "title": "Plants vs Zombies Fusion - Game Phong Thu Online",
      "intro": "Plants vs Zombies Fusion Edition la game tower defense, trong cay đe chan đoi quan zombie.",
    },
    "moto-traffic-rider": {
      "title": "Moto Traffic Rider - Game Mo To Online",
      "intro": "Moto Traffic Rider la game mo to, luon lac qua giao thong ở tốc đon cao.",
    },
    "basket-random": {
      "title": "Basket Random - Game Bong Ro Online",
      "intro": "Basket Random la game bong ro voi vật ly hau hước va di chuyen kho đoan.",
    },
    "click-click-clicker-playgama": {
      "title": "Click Click Clicker - Game Idle Online",
      "intro": "Click Click Clicker la game idle, moi cu click xay dựng nang cap tu đong lớn hon.",
    },
    "idle-tower-defense-be01-1": {
      "title": "Idle Tower Defense - Game Phong Thu Online",
      "intro": "Idle Tower Defense kết hop phong thu theo đot voi tiến trinh idle chay ca khi ban rời đi.",
    }
  },
  "id": {
    "geometry-dash-infinity": {
      "title": "Geometry Dash: Infinity - Main Game Ritme Online",
      "intro": "Geometry Dash: Infinity adalah game lari ritme, lompat dan terbang melewati rintangan mengikuti musik.",
    },
    "supa-tic-tac-toe": {
      "title": "Main Tic Tac Toe Online - Supa Tic Tac Toe",
      "intro": "Supa Tic Tac Toe adalah permainan tic tac toe klasik di browser - susun tiga berurutan untuk menang.",
    },
    "block-blast-2048": {
      "title": "Block Blast 2048 - Game Balok Online",
      "intro": "Block Blast 2048 menggabungkan puzzle balok dengan penyatuan angka dalam satu papan.",
    },
    "ludo-legend": {
      "title": "Main Ludo Online - Ludo Legend",
      "intro": "Ludo Legend adalah papan ludo klasik, balap bidak dari awal ke rumah.",
    },
    "mahjong-classic": {
      "title": "Main Mahjong Online - Mahjong Classic",
      "intro": "Mahjong Classic adalah solitaire ubin, bersihkan papan dengan memasangkan ubin bebas.",
    },
    "plants-vs-zombies-fusion-edition": {
      "title": "Plants vs Zombies Fusion - Game Pertahanan Online",
      "intro": "Plants vs Zombies Fusion Edition adalah tower defense, tanam pertahanan untuk hentikan zombie.",
    },
    "moto-traffic-rider": {
      "title": "Moto Traffic Rider - Game Motor Online",
      "intro": "Moto Traffic Rider adalah game motor, menyelip di antara lalu lintas dengan kecepatan tinggi.",
    },
    "basket-random": {
      "title": "Basket Random - Game Bola Basket Online",
      "intro": "Basket Random adalah game bola basket dengan fisika lucu dan gerakan tak terduga.",
    },
    "click-click-clicker-playgama": {
      "title": "Click Click Clicker - Game Idle Online",
      "intro": "Click Click Clicker adalah game idle, setiap klik membangun upgrade otomatis lebih besar.",
    },
    "idle-tower-defense-be01-1": {
      "title": "Idle Tower Defense - Game Pertahanan Online",
      "intro": "Idle Tower Defense memadukan pertahanan gelombang dengan progresi idle yang berjalan saat Anda pergi.",
    },
    "brain-dots": {
      "title": "Brain Dots — puzzle fisika online",
      "intro": "Brain Dots adalah puzzle fisika: gambar garis untuk membuat dua bola saling bertabrakan. Setiap level memberi jumlah goresan terbatas, jadi kuncinya adalah sudut dan momentum, bukan kecepatan.",
      "howToPlay": "Gambar garis dengan mouse atau jari; garis itu menjadi benda padat. Lepaskan bola atau biarkan gravitasi bekerja, lalu pakai garis sebagai tanjakan atau dinding untuk mengarahkan bola ke bola lainnya.",
      "controls": "Gambar dengan mouse atau jari; undo menghapus garis terakhir.",
      "strategy": "Rencanakan seluruh jalur sebelum menggambar: garis pertama menentukan sudut semua garis berikutnya. Manfaatkan dinding sebagai pantulan gratis dan pilih satu tanjakan panjang daripada tiga koreksi pendek.",
      "faq": [
        { "q": "Kenapa bola berhenti?", "a": "Gesekan dan garis datar. Beri kemiringan dan jaga garis tetap pendek agar bola tidak kehilangan momentum." },
        { "q": "Bisa undo?", "a": "Di sebagian besar versi bisa; undo sebelum menumpuk koreksi di garis yang buruk." },
      ]
    },
    "pregnant-mom-simulator-family-life": {
      "title": "Pregnant Mom Simulator — simulasi keluarga online",
      "intro": "Pregnant Mom Simulator Family Life mengikuti keseharian seorang ibu dan keluarganya: merawat rumah, memenuhi kebutuhan, dan mengatur waktu di antara tugas.",
      "howToPlay": "Pilih tindakan lewat lingkungan dan ikon: memberi makan, istirahat, bersih-bersih, dan merawat bayi. Setiap tugas memakan waktu, dan membiarkan kebutuhan menumpuk membuat hari makin sulit.",
      "controls": "Klik atau ketuk objek dan ikon untuk berinteraksi.",
      "strategy": "Selesaikan dulu kebutuhan yang paling rendah; tugas panjang bisa menunggu. Lakukan satu putaran perawatan sebelum memulai aktivitas baru.",
      "faq": [
        { "q": "Apakah ini game cerita?", "a": "Lebih ke simulasi rutinitas daripada narasi; tujuannya menjaga keluarga tetap teratur." },
        { "q": "Ada batas waktu?", "a": "Sebagian versi punya hari dengan jam; lainnya bebas. Lihat panel sebelum mulai." },
      ]
    },
    "busy-bites-tycoon": {
      "title": "Busy Bites Tycoon — simulasi restoran",
      "intro": "Busy Bites Tycoon adalah simulasi restoran: tempatkan pelanggan, catat pesanan, sajikan makanan, dan investasikan lagi keuntungannya sebelum antrean menjadi keluhan.",
      "howToPlay": "Pelanggan datang dan menunggu meja. Catat pesanan, siapkan di stasiun yang tepat, antar, lalu bersihkan meja. Uangnya untuk membeli staf dan meningkatkan peralatan.",
      "controls": "Klik atau ketuk pelanggan, stasiun, atau item untuk berinteraksi.",
      "strategy": "Layani pelanggan yang paling dekat dengan batas sabar dan tingkatkan stasiun yang benar-benar menjadi hambatan. Merekrut sebelum meningkatkan biasanya membuang uang.",
      "faq": [
        { "q": "Kenapa pelanggan pergi?", "a": "Antrean terlalu panjang. Tambah atau tingkatkan stasiun sebelum menambah pelayan." },
        { "q": "Apa yang harus ditingkatkan dulu?", "a": "Stasiun dengan antrean terpanjang, bukan yang paling mahal." },
      ]
    },
    "pickaxe-crusher-idle": {
      "title": "Pickaxe Crusher Idle — game klik pertambangan",
      "intro": "Pickaxe Crusher Idle adalah game klik pertambangan: setiap ayunan memecahkan batu, dan bijihnya membeli kapak lebih baik serta bor otomatis yang tetap menambang saat kamu pergi.",
      "howToPlay": "Klik atau ketuk untuk mengayun. Bijih terkumpul dan dipakai untuk peningkatan damage atau otomatisasi. Lapisan lebih dalam punya batu lebih keras dan bijih lebih berharga.",
      "controls": "Klik atau ketuk untuk mengayun; peningkatan ada di panel samping.",
      "strategy": "Beli peningkatan damage per detik sebelum peningkatan kedalaman atau kosmetik. Otomatisasi paling cepat balik modal tepat sebelum kamu berhenti mengklik.",
      "faq": [
        { "q": "Tetap menambang saat offline?", "a": "Sebagian besar versi idle tetap, kadang dengan laju lebih rendah. Cek panel offline sebelum menutup tab." },
        { "q": "Kapan harus prestige?", "a": "Saat lapisan berikutnya butuh waktu lebih lama daripada seluruh run sebelumnya." },
      ]
    },
    "hidden-object-clues-and-mysteries": {
      "title": "Hidden Object: Clues and Mysteries — cari benda tersembunyi",
      "intro": "Hidden Object: Clues and Mysteries menyembunyikan benda di scene penuh detail dan meminta kamu menemukan item daftar sebelum waktu habis.",
      "howToPlay": "Baca daftar dan cari setiap benda di scene dengan mengkliknya. Klik benar menghapus item dari daftar; klik salah biasanya mengurangi waktu. Petunjuk mengungkap satu benda saat kamu macet.",
      "controls": "Klik atau ketuk benda; gunakan tombol petunjuk bila tersedia.",
      "strategy": "Bagi scene menjadi beberapa lajur dan selesaikan satu lajur sebelum pindah. Periksa tepi, pantulan, dan benda di dalam benda lain sebelum memakai petunjuk.",
      "faq": [
        { "q": "Kenapa waktu cepat habis?", "a": "Biasanya karena memindai area yang sama berulang. Tandai lajur selesai lalu lanjut." },
        { "q": "Kapan pakai petunjuk?", "a": "Pada dua item terakhir, saat tempat sembunyi tinggal sedikit." },
      ]
    },
    "hidden-objects-home-sweet-home": {
      "title": "Hidden Objects: Home Sweet Home — benda tersembunyi",
      "intro": "Hidden Objects: Home Sweet Home menyembunyikan benda sehari-hari di scene rumah yang penuh barang: dapur, ruang tamu, taman.",
      "howToPlay": "Temukan benda di daftar dengan mengkliknya. Sebagian hanya muncul setelah membuka laci atau menggeser tirai.",
      "controls": "Klik atau ketuk untuk berinteraksi; petunjuk mengungkap satu item.",
      "strategy": "Pindai dari sudut ke sudut dalam lajur, jangan melompat. Scene rumah memakai perabot yang sama, jadi ingat di mana benda serupa pernah sembunyi.",
      "faq": [
        { "q": "Tidak menemukan item di daftar?", "a": "Mungkin ada di balik interaksi: laci, tirai, pintu." },
        { "q": "Petunjuk terbatas?", "a": "Biasanya ya; pakai untuk item terakhir." },
      ]
    },
    "master-chess": {
      "title": "Master Chess — catur online gratis",
      "intro": "Master Chess adalah catur klasik di browser: bermain melawan komputer atau pemain lain, dengan aturan lengkap dan tanpa instalasi.",
      "howToPlay": "Setiap sisi mulai dengan 16 bidak dan bergerak satu per giliran. Tujuannya skakmat raja lawan. Rokade, en passant, dan promosi mengikuti aturan standar.",
      "controls": "Klik bidak lalu kotak tujuan; menyeret juga bisa.",
      "strategy": "Kuasi tengah, kembangkan kuda dan uskup sebelum memindahkan bidak yang sama dua kali, dan lakukan rokade lebih awal. Di tengah permainan, cari bidak tak terjaga sebelum menghitung variasi panjang.",
      "faq": [
        { "q": "Bisa undo?", "a": "Di sebagian besar mode bisa; gunakan saat belajar, tapi jangan menutupi kesalahan yang ingin diperbaiki." },
        { "q": "Lawan siapa?", "a": "Melawan komputer atau pemain online, tergantung mode." },
      ]
    },
    "sudoku-online": {
      "title": "Sudoku Online — sudoku gratis di browser",
      "intro": "Sudoku Online adalah teka-teki logika 9x9: isi kotak kosong tanpa mengulang angka di baris, kolom, atau blok.",
      "howToPlay": "Setiap baris, kolom, dan blok 3x3 harus berisi angka 1 sampai 9 tepat sekali. Klik kotak lalu pilih angka; kandidat bisa dicatat.",
      "controls": "Klik kotak lalu ketik atau pilih angka; gunakan catatan untuk kandidat.",
      "strategy": "Lakukan putaran: cari angka yang hanya muat di satu kotak pada baris, kolom, atau blok, isi, lalu ulangi. Gunakan catatan hanya ketika putaran tidak menghasilkan apa-apa.",
      "faq": [
        { "q": "Harus menebak?", "a": "Sudoku yang baik punya solusi tunggal dan tidak perlu menebak. Periksa catatan sebelum menebak." },
        { "q": "Apa itu kandidat tunggal tersembunyi?", "a": "Angka yang hanya muat di satu kotak pada suatu area, meski kotaknya bisa memuat beberapa angka. Ini cara tercepat keluar dari kebuntuan." },
      ]
    },
    "moto-x3m": {
      "title": "Moto X3M — game motor dan rintangan online",
      "intro": "Moto X3M adalah game motor di lintasan rintangan: gas, rem, dan miringkan motor untuk melewati setiap tanjakan tanpa jatuh.",
      "howToPlay": "Kendarai sampai akhir level melewati tanjakan, rintangan, dan checkpoint. Jatuh membuat kamu kembali ke checkpoint terakhir; waktu menentukan bintang.",
      "controls": "Panah atau WASD untuk gas, rem, dan miring; R untuk mengulang.",
      "strategy": "Perlakukan setiap level sebagai irama: gas di jalan datar, lepas sebelum tanjakan, dan miringkan ke depan di udara agar mendarat di turunan. Run tanpa jatuh lebih berharga daripada cepat.",
      "faq": [
        { "q": "Bagaimana mendarat tanpa jatuh?", "a": "Samakan sudut motor dengan turunan dan mendaratkan kedua roda bersamaan." },
        { "q": "Checkpoint mengulang waktu?", "a": "Checkpoint menyimpan posisi; jatuh kembali ke checkpoint, bukan ke awal." },
      ]
    },
    "emerland-solitaire": {
      "title": "Emerland Solitaire — solitaire klasik online",
      "intro": "Emerland Solitaire adalah versi solitaire (klondike) bertema fantasi: atur tableau, naikkan kartu ke foundation, dan habiskan dek.",
      "howToPlay": "Pindahkan kartu antar kolom dengan urutan turun dan warna bergantian. Bawa As ke foundation dan naikkan sesuai suit. Tumpukan dek dibuka saat tidak ada langkah.",
      "controls": "Klik atau seret kartu; klik dek untuk mengambil kartu.",
      "strategy": "Buka kartu tertutup lebih dulu dan sisakan satu kolom kosong untuk bermanuver. Jangan naikkan kartu ke foundation jika masih menahan urutan yang berguna.",
      "faq": [
        { "q": "Semua permainan bisa menang?", "a": "Tidak. Sebagian susunan mustahil; sebagian besar bisa menang dengan urutan langkah yang baik." },
        { "q": "Bisa mulai ulang?", "a": "Bisa; jika macet, ubah urutan sepuluh langkah pertama sebelum mengulang." },
      ]
    },
  },
  "tr": {
    "geometry-dash-infinity": {
      "title": "Geometry Dash: Infinity - Ritm Oyunu Online",
      "intro": "Geometry Dash: Infinity, engelleri muze uyumlu sekilde zıplayarak astıgın ritim tabanlı bir kosu oyunudur.",
    },
    "supa-tic-tac-toe": {
      "title": "Tic Tac Toe Online Oyna - Supa Tic Tac Toe",
      "intro": "Supa Tic Tac Toe, tarayıcıdaki klasik tic tac toe oyunudur - kazanmak için üçünü hizala.",
    },
    "block-blast-2048": {
      "title": "Block Blast 2048 - Blok Puzzle Online",
      "intro": "Block Blast 2048, blok yerlestirmeyi tek bir tahtada sayı birlestirme ile harmanlar.",
    },
    "ludo-legend": {
      "title": "Ludo Online Oyna - Ludo Legend",
      "intro": "Ludo Legend, pulları bastan sona yarıştırdıgın klasik ludo tahta oyunudur.",
    },
    "mahjong-classic": {
      "title": "Mahjong Online Oyna - Mahjong Classic",
      "intro": "Mahjong Classic, serbest tasları esleştirerek tahtayı temizledigin tas solitairesidir.",
    },
    "plants-vs-zombies-fusion-edition": {
      "title": "Plants vs Zombies Fusion - Savunma Oyunu Online",
      "intro": "Plants vs Zombies Fusion Edition, zombileri durdurmak için bitki diktigin bir tower defense oyunudur.",
    },
    "moto-traffic-rider": {
      "title": "Moto Traffic Rider - Moto Oyunu Online",
      "intro": "Moto Traffic Rider, yuksek hızla trafik arasında kıvrıldıgın bir motosiklet oyunudur.",
    },
    "basket-random": {
      "title": "Basket Random - Basketbol Oyunu Online",
      "intro": "Basket Random, komik fizik ve ongorulemez hareketlerle oynanan bir basketbol oyunudur.",
    },
    "click-click-clicker-playgama": {
      "title": "Click Click Clicker - Boşta Idle Oyunu Online",
      "intro": "Click Click Clicker, her tıklamanın daha buyuk otomatik yukseltmeler insa ettigi bir idle oyunudur.",
    },
    "idle-tower-defense-be01-1": {
      "title": "Idle Tower Defense - Savunma Oyunu Online",
      "intro": "Idle Tower Defense, dalga savunmasını sen yokken de ilerleyen idle ilerlemeyle birlestirir.",
    }
  }
};

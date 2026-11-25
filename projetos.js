/* ------------------------------------------------------------------
   PROJETOS do portefólio. Para acrescentar um, copia uma entrada e edita.

   Cada categoria: id, nome, desc, en {nome, desc} e itens[] ou subs[]
   (sub-abas, cada uma com id, nome, desc, en e itens[]).

   Cada projeto:
     nome, tag, resumo, detalhes, funcionalidades[]   (em português)
     en { nome?, tag, resumo, detalhes, funcionalidades[] }   (inglês)
     tech[]        ícones no fundo do cartão (ver ICONOS no index.html)
     links[{t, u}] "Testa aqui" / "Ver site" viram botão; "Código",
                   "CurseForge", "GitHub" são links normais
     estado        "publicado", "dev" (em desenvolvimento) ou omitido
     privado       true: mostra "Privado" em vez de "Pedir código"
     downloads     downloads no CurseForge (à mão, ver a data em baixo)
     modrinth      nome do projeto no Modrinth: soma os downloads de lá
     destaque      true: aparece na aba Destaques
     imagem        captura em img/capas/, aparece no topo do cartão

   Downloads do CurseForge atualizados a 23/11/2026.
------------------------------------------------------------------- */
window.PROJETOS = [
  {
    "id": "apps",
    "en": {
      "nome": "Apps",
      "desc": "Android, desktop and web apps, plus browser extensions."
    },
    "nome": "Apps",
    "desc": "Aplicações Android, desktop, web e extensões de browser.",
    "subs": [
      {
        "id": "android",
        "nome": "Android",
        "desc": "Apps para Android, várias ligadas ao PC.",
        "en": {
          "nome": "Android",
          "desc": "Android apps, several of them talking to the PC."
        },
        "itens": [
          {
            "nome": "DeskStats",
            "imagem": "img/capas/deskstats.webp",
            "en": {
              "tag": "Android app + PC",
              "resumo": "Your PC in a phone widget: CPU, GPU, RAM and temperatures.",
              "detalhes": "Android widget that shows your PC's status, refreshed every 2 seconds. A small agent runs on the PC (C# on Windows, Python on Linux) and serves the values on the local network.",
              "funcionalidades": [
                "CPU, GPU, RAM and temperatures on the home screen",
                "Refreshes every 2 seconds",
                "Agent for Windows (C#) and Linux (Python)",
                "One-line installer on Linux, starts with the PC"
              ]
            },
            "tag": "App Android + PC",
            "resumo": "O teu PC num widget do telemóvel: CPU, GPU, RAM e temperaturas.",
            "detalhes": "Widget Android que mostra o estado do PC, atualizado a cada 2 segundos. No PC corre um pequeno agente (C# no Windows, Python no Linux) que serve os valores na rede local.",
            "funcionalidades": [
              "CPU, GPU, RAM e temperaturas no ecrã inicial",
              "Atualiza a cada 2 segundos",
              "Agente para Windows (C#) e Linux (Python)",
              "Instalador de uma linha no Linux, arranca sozinho com o PC"
            ],
            "tech": [
              "Kotlin",
              "Android",
              "C#"
            ],
            "destaque": true,
            "links": [
              {
                "t": "Ver site",
                "u": "https://ribeiro-md.github.io/Deskstats/"
              }
            ]
          },
          {
            "nome": "DMR Remote",
            "en": {
              "tag": "Android app + Linux",
              "resumo": "Control your Arch Linux PC from your phone, with a terminal and system buttons.",
              "detalhes": "Android app that connects to the PC (local network or Tailscale) to control it remotely: a real terminal and buttons for system actions. The PC side only shares while its app is open, protected by a token.",
              "funcionalidades": [
                "Real terminal on the phone",
                "System buttons",
                "Local network or Tailscale, with a token",
                "Only shares while the PC app is open"
              ]
            },
            "tag": "App Android + Linux",
            "resumo": "Controla o Arch Linux pelo telemóvel, com terminal e botões de sistema.",
            "detalhes": "App Android que se liga ao PC (rede local ou Tailscale) para o controlar à distância: um terminal real e botões para as ações do sistema. No PC corre uma app que só partilha enquanto estiver aberta, protegida por token.",
            "funcionalidades": [
              "Terminal real no telemóvel",
              "Botões de sistema",
              "Ligação por rede local ou Tailscale, com token",
              "Só partilha enquanto a app do PC está aberta"
            ],
            "tech": [
              "Kotlin",
              "Android",
              "Python"
            ],
            "estado": "dev"
          },
          {
            "nome": "StreamDeck Mobile",
            "en": {
              "tag": "Android app + PC",
              "resumo": "Use your phone as a Stream Deck: shortcuts, music, text, programs and commands.",
              "detalhes": "A full-screen grid of buttons on your phone. Each tap presses a shortcut, controls music, types text, opens a program or runs a command on the PC.",
              "funcionalidades": [
                "Full-screen button grid",
                "Keyboard shortcuts, music, text, programs and commands",
                "Agent for Windows (tray, starts with the system) and Linux",
                "Works alongside DeskStats"
              ]
            },
            "tag": "App Android + PC",
            "resumo": "Usa o telemóvel como Stream Deck: atalhos, música, texto, programas e comandos.",
            "detalhes": "Uma grelha de botões em ecrã inteiro no telemóvel. Cada toque carrega num atalho, controla a música, escreve texto, abre um programa ou corre um comando no PC.",
            "funcionalidades": [
              "Grelha de botões em ecrã inteiro",
              "Atalhos de teclado, música, texto, programas e comandos",
              "Agente para Windows (bandeja, arranca com o sistema) e Linux",
              "Funciona ao mesmo tempo que o DeskStats"
            ],
            "tech": [
              "Kotlin",
              "Android",
              "C#"
            ]
          },
          {
            "nome": "PocketMic",
            "en": {
              "tag": "Android app + PC",
              "resumo": "Use your phone's microphone on your PC, with low latency.",
              "detalhes": "The app streams the phone's microphone to the PC, where it shows up as a virtual microphone any program can use.",
              "funcionalidades": [
                "USB (lower latency) or Wi-Fi connection",
                "Virtual mic on Windows (VB-Cable) and Linux (PipeWire)",
                "Python server on the PC"
              ]
            },
            "tag": "App Android + PC",
            "resumo": "Usa o microfone do telemóvel no PC, com pouca latência.",
            "detalhes": "A app manda o som do microfone do telemóvel para o PC, onde aparece como um microfone virtual que qualquer programa pode usar.",
            "funcionalidades": [
              "Ligação por USB (menos latência) ou Wi-Fi",
              "Microfone virtual no Windows (VB-Cable) e no Linux (PipeWire)",
              "Servidor em Python no PC"
            ],
            "tech": [
              "Kotlin",
              "Android"
            ]
          }
        ]
      },
      {
        "id": "desktop",
        "nome": "Desktop",
        "desc": "Programas para Linux e Windows.",
        "en": {
          "nome": "Desktop",
          "desc": "Programs for Linux and Windows."
        },
        "itens": [
          {
            "nome": "MAIA",
            "imagem": "img/capas/maia.webp",
            "en": {
              "tag": "Personal assistant · Linux",
              "resumo": "AI personal assistant for Linux: talks, searches, runs commands and remembers you.",
              "detalhes": "MAIA (My Assistant IA) lives in its own window on KDE and in the tray. It uses several AIs with key rotation, listens and answers out loud, searches the web, runs commands on the PC (asking first) and keeps its memory and reminders in Obsidian.",
              "funcionalidades": [
                "Gemini, Grok, Groq, OpenRouter and Cerebras, with key rotation",
                "Voice in and out, with a local voice (Piper) as backup",
                "Runs commands on the PC, asking first for risky ones",
                "Memory and reminders (with a calendar) in Obsidian",
                "Sees images, PDFs and the screen"
              ]
            },
            "tag": "Assistente pessoal · Linux",
            "resumo": "Assistente pessoal com IA para o Linux: fala, pesquisa, corre comandos e lembra-se de ti.",
            "detalhes": "A MAIA (My Assistant IA) vive numa janela própria no KDE e na bandeja. Usa várias IAs com rotação de chaves, ouve e responde em voz alta, pesquisa na web, corre comandos no PC (pedindo confirmação) e guarda a memória e os lembretes no Obsidian.",
            "funcionalidades": [
              "Gemini, Grok, Groq, OpenRouter e Cerebras, com rotação de chaves",
              "Voz: fala e ouve, com voz local (Piper) de reserva",
              "Comandos no PC, com confirmação para os perigosos",
              "Memória e lembretes (com calendário) no Obsidian",
              "Vê imagens, PDFs e o ecrã"
            ],
            "tech": [
              "Rust",
              "JavaScript"
            ],
            "destaque": true,
            "estado": "dev",
            "links": [
              {
                "t": "Ver site",
                "u": "https://ribeiro-md.github.io/SiteMaia/"
              }
            ]
          },
          {
            "nome": "Ribeiro Launcher",
            "en": {
              "tag": "Desktop · Linux",
              "resumo": "Minecraft launcher for Linux, with accounts and CurseForge modpacks.",
              "detalhes": "Minecraft launcher made with Java and Swing, with no external libraries.",
              "funcionalidades": [
                "Account management",
                "Installs CurseForge modpacks",
                "Java 17+ and Swing, no external libraries"
              ]
            },
            "tag": "Desktop · Linux",
            "resumo": "Launcher de Minecraft para Linux, com contas e modpacks do CurseForge.",
            "detalhes": "Launcher de Minecraft feito em Java e Swing, sem bibliotecas externas.",
            "funcionalidades": [
              "Gestão de contas",
              "Instala modpacks do CurseForge",
              "Java 17+ e Swing, sem bibliotecas externas"
            ],
            "tech": [
              "Java"
            ]
          },
          {
            "nome": "Dimensionamento Fotovoltaico",
            "en": {
              "nome": "PV System Sizing",
              "tag": "Desktop app",
              "resumo": "Windows Forms app for sizing solar panel installations.",
              "detalhes": "Desktop tool that helps size a photovoltaic installation from the data the user enters.",
              "funcionalidades": [
                "Windows Forms interface",
                "Panel sizing calculation"
              ]
            },
            "tag": "Aplicação desktop",
            "resumo": "Aplicação Windows Forms para dimensionar instalações de painéis solares.",
            "detalhes": "Ferramenta desktop que ajuda a calcular o dimensionamento de uma instalação fotovoltaica a partir dos dados introduzidos pelo utilizador.",
            "funcionalidades": [
              "Interface Windows Forms",
              "Cálculo de dimensionamento de painéis"
            ],
            "tech": [
              "C#",
              "WinForms"
            ]
          }
        ]
      },
      {
        "id": "web",
        "nome": "Web",
        "desc": "Páginas e ferramentas que correm no browser.",
        "en": {
          "nome": "Web",
          "desc": "Pages and tools that run in the browser."
        },
        "itens": [
          {
            "nome": "ASCII Art by RibeiroMD",
            "imagem": "img/capas/ascii.webp",
            "en": {
              "tag": "Webapp",
              "resumo": "Turns any image into art made of characters, right in the browser.",
              "detalhes": "Open an image from your device and the page turns it into ASCII art, with control over width, contrast and brightness. It all runs in the browser, without sending the image anywhere.",
              "funcionalidades": [
                "Opens any image from your device",
                "Adjustable width, contrast and brightness",
                "Several character sets",
                "Colour or mono mode, with invert and black background options",
                "Copy the result with one tap"
              ]
            },
            "tag": "Webapp",
            "resumo": "Transforma qualquer imagem em arte feita de caracteres, direto no browser.",
            "detalhes": "Abres uma imagem do teu dispositivo e a página converte-a em ASCII art, com controlo da largura, do contraste e do brilho. Corre toda no browser, sem enviar a imagem para lado nenhum.",
            "funcionalidades": [
              "Abre qualquer imagem do dispositivo",
              "Largura, contraste e brilho ajustáveis",
              "Vários conjuntos de caracteres",
              "Modo a cores ou monocor, com opção de inverter e fundo preto",
              "Copia o resultado com um toque"
            ],
            "links": [
              {
                "t": "Testa aqui",
                "u": "https://ribeiro-md.github.io/ASCIIartDMR/"
              },
              {
                "t": "Código",
                "u": "https://github.com/Ribeiro-MD/ASCIIartDMR"
              }
            ],
            "tech": [
              "HTML",
              "CSS",
              "JavaScript"
            ],
            "destaque": true
          },
          {
            "nome": "DMRCFStats",
            "en": {
              "tag": "Webapp",
              "resumo": "Stats for my CurseForge mods: downloads, growth and versions.",
              "detalhes": "Page that tracks my CurseForge mods, with download history over time.",
              "funcionalidades": [
                "Downloads per mod",
                "Growth over time",
                "Versions"
              ]
            },
            "tag": "Webapp",
            "resumo": "Estatísticas dos meus mods no CurseForge: downloads, evolução e versões.",
            "detalhes": "Página que acompanha os meus mods no CurseForge, com o histórico dos downloads ao longo do tempo.",
            "funcionalidades": [
              "Downloads de cada mod",
              "Evolução ao longo do tempo",
              "Versões"
            ],
            "tech": [
              "HTML",
              "CSS",
              "JavaScript"
            ],
            "links": [
              {
                "t": "Ver site",
                "u": "https://ribeiro-md.github.io/DMRCFStatus/"
              }
            ]
          }
        ]
      },
      {
        "id": "extensoes",
        "nome": "Extensões",
        "desc": "Extensões de browser.",
        "en": {
          "nome": "Extensions",
          "desc": "Browser extensions."
        },
        "itens": [
          {
            "nome": "Anti IA-Slop",
            "en": {
              "tag": "Browser extension",
              "resumo": "Warns you when you're on a site suspected of scams or phishing.",
              "detalhes": "Browser extension that checks the page you're on and shows a warning when there are signs of a scam or phishing, before you enter any data.",
              "funcionalidades": [
                "Checks against a public phishing list",
                "Local checks on the page itself",
                "Optional AI analysis",
                "Toolbar icon that changes with the risk level"
              ]
            },
            "tag": "Extensão de browser",
            "resumo": "Avisa o utilizador quando está num site suspeito de burla ou phishing.",
            "detalhes": "Extensão de browser que analisa a página em que estás e mostra um aviso quando há sinais de burla ou phishing, antes de introduzires dados.",
            "funcionalidades": [
              "Verificação contra uma lista pública de phishing",
              "Testes locais à própria página",
              "Análise opcional com IA",
              "Ícone na barra que muda consoante o risco"
            ],
            "tech": [
              "JavaScript",
              "WebExtensions"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "automacoes",
    "en": {
      "nome": "Automations",
      "desc": "Tools that automate repetitive tasks."
    },
    "nome": "Automações",
    "desc": "Ferramentas que automatizam tarefas repetitivas.",
    "itens": [
      {
        "nome": "DMR Chat",
        "en": {
          "tag": "Automation · Fabric",
          "resumo": "Automates a server's chat minigames, with configurable delays.",
          "detalhes": "Client mod that automatically answers a server's chat minigames. Each game type has its own delays, configurable through a JSON file.",
          "funcionalidades": [
            "Scrambled words, questions, maths, reversals and exact retypes",
            "Configurable delays per entry (JSON)",
            "Uses only vanilla game widgets",
            "/cgs command to test in singleplayer"
          ]
        },
        "tag": "Automação · Fabric",
        "resumo": "Automatiza minijogos de chat de um servidor, com atrasos configuráveis.",
        "detalhes": "Mod de cliente que responde automaticamente a minijogos de chat de um servidor. Cada tipo de jogo tem atrasos próprios, configuráveis através de um ficheiro JSON.",
        "funcionalidades": [
          "Palavras baralhadas, perguntas, contas, inversões e reescritas exatas",
          "Atrasos configuráveis por entrada (JSON)",
          "Usa apenas widgets do jogo base",
          "Comando /cgs para testar em modo um jogador"
        ],
        "tech": [
          "Java",
          "Fabric"
        ]
      },
      {
        "nome": "DMR Porter",
        "en": {
          "tag": "Automation · Fabric",
          "resumo": "Makes porting Fabric mods from 1.21.11 to 26.x easier — it speeds up the process, it doesn't replace it.",
          "detalhes": "Helps port Fabric mods from 1.21.11 to 26.x. It handles most of the repetitive changes (mappings, imports, renamed APIs), but it doesn't do everything on its own: some parts still need to be reviewed and fixed by hand.",
          "funcionalidades": [
            "Drag the mod in and it comes out converted to the current mappings",
            "One version for source code (folders) and one for compiled jars",
            "Handles the repetitive changes: mappings, imports and renamed APIs",
            "Whatever it can't convert is left for you to review by hand"
          ]
        },
        "tag": "Automação · Fabric",
        "resumo": "Facilita a conversão de mods Fabric de 1.21.11 para 26.x — acelera o processo, não o substitui.",
        "detalhes": "Ajuda a portar mods Fabric de 1.21.11 para 26.x. Trata da maior parte das mudanças repetitivas (mappings, imports, APIs renomeadas), mas não faz tudo sozinho: algumas partes ainda têm de ser revistas e ajustadas à mão.",
        "funcionalidades": [
          "Arrastas o mod e sai convertido para os mappings atuais",
          "Versão para código fonte (pastas) e versão para jars compilados",
          "Trata das mudanças repetitivas: mappings, imports e APIs renomeadas",
          "O que não consegue converter fica para rever à mão"
        ],
        "tech": [
          "Fabric"
        ]
      },
      {
        "nome": "WA Scripts",
        "en": {
          "tag": "Automation · Social media",
          "resumo": "WhatsApp automations.",
          "detalhes": "WhatsApp automations you run in the WhatsApp Web console. For example, in a group where you're an admin, it deletes messages for everyone, from newest to oldest, scrolling up the chat to load more.",
          "funcionalidades": [
            "Deletes messages \"for everyone\", from newest to oldest",
            "Configurable pause between messages",
            "Retries up to 3 times when a step fails and skips the ones already deleted",
            "Works with WhatsApp in Portuguese and English",
            "Stop at any time with pararWA = true and get a summary at the end"
          ]
        },
        "tag": "Automação · Redes sociais",
        "resumo": "Automações de WhatsApp.",
        "detalhes": "Automações de WhatsApp que corres na consola do WhatsApp Web. Por exemplo, num grupo onde és administrador, apaga as mensagens para todos, das mais recentes para as mais antigas, e vai subindo na conversa para carregar mais.",
        "funcionalidades": [
          "Apaga as mensagens \"para todos\", da mais recente para a mais antiga",
          "Pausa configurável entre mensagens",
          "Repete até 3 vezes quando um passo falha e salta as já apagadas",
          "Funciona com o WhatsApp em português e em inglês",
          "Para a qualquer momento com pararWA = true e mostra um resumo no fim"
        ],
        "tech": [
          "JavaScript"
        ]
      },
      {
        "nome": "TwitterTweaks",
        "en": {
          "tag": "Automation · Social media",
          "resumo": "Console scripts to clean up your X (Twitter) account.",
          "detalhes": "A set of small scripts you run in the browser console, on the right X page, to bulk clean your account. Each script has a configurable limit per run.",
          "funcionalidades": [
            "RemoveBookmarks: removes your bookmarks",
            "UndoAllReposts: undoes your reposts (quotes are left alone)",
            "UnfollowAll: unfollows the accounts you follow",
            "Configurable limit (LIMIT) per run"
          ]
        },
        "tag": "Automação · Redes sociais",
        "resumo": "Scripts de consola para limpar a tua conta do X (Twitter).",
        "detalhes": "Conjunto de pequenos scripts que corres na consola do browser, na página certa do X, para fazer limpezas em massa na conta. Cada script tem um limite configurável por execução.",
        "funcionalidades": [
          "RemoveBookmarks: remove os itens guardados",
          "UndoAllReposts: desfaz os reposts (as citações ficam de fora)",
          "UnfollowAll: deixa de seguir as contas que segues",
          "Limite (LIMIT) configurável por execução"
        ],
        "tech": [
          "JavaScript"
        ],
        "links": [
          {
            "t": "Ver site",
            "u": "https://ribeiro-md.github.io/TwitterTweaks/"
          }
        ]
      },
      {
        "nome": "DMR | KBMacro",
        "imagem": "img/capas/kbmacro.webp",
        "en": {
          "tag": "Automation · Linux",
          "resumo": "Turns one key into another key, a combo or a timed macro, on Linux.",
          "detalhes": "Desktop app that changes what a physical key (or mouse button) does. Press R and the PC gets Q, Ctrl + C, or a macro with your own waits between steps. It works at kernel level, so it runs in any program or game, on X11, Wayland and the console.",
          "funcionalidades": [
            "Keys at the same time (held while you hold yours)",
            "Step-by-step macros with a wait in ms before each step",
            "Works with mouse buttons (e.g. BTN_LEFT, BTN_RIGHT)",
            "Capture keys by pressing them, or pick from the full Linux key list",
            "Runs in the background and reloads by itself when the config changes"
          ]
        },
        "tag": "Automação · Linux",
        "resumo": "Troca uma tecla por outra, por várias ao mesmo tempo ou por uma macro com tempos, no Linux.",
        "detalhes": "App de computador que muda o que uma tecla física (ou botão do rato) faz. Carregas em R e o PC recebe Q, Ctrl + C, ou uma macro com as esperas que quiseres entre passos. Trabalha ao nível do kernel, por isso funciona em qualquer programa ou jogo, em X11, Wayland e na consola.",
        "funcionalidades": [
          "Teclas ao mesmo tempo (premidas enquanto seguras a tua)",
          "Macros passo a passo com espera em ms antes de cada passo",
          "Funciona com botões do rato (ex.: BTN_LEFT, BTN_RIGHT)",
          "Captura as teclas carregando nelas, ou escolhe da lista completa de teclas do Linux",
          "Corre em segundo plano e recarrega sozinho quando a configuração muda"
        ],
        "tech": [
          "Python",
          "evdev",
          "Tkinter"
        ],
        "links": [
          {
            "t": "Ver site",
            "u": "https://ribeiro-md.github.io/KBMacroWebPage/"
          }
        ],
        "destaque": true
      }
    ]
  },
  {
    "id": "minecraft",
    "en": {
      "nome": "Minecraft",
      "desc": "Mods and plugins I've built for Minecraft."
    },
    "nome": "Minecraft",
    "desc": "Mods e plugins que desenvolvi para Minecraft.",
    "subs": [
      {
        "id": "mods",
        "en": {
          "nome": "Mods",
          "desc": "Client-side Minecraft mods built with Fabric."
        },
        "nome": "Mods",
        "desc": "Mods de cliente para Minecraft com Fabric.",
        "itens": [
          {
            "nome": "Fish Notifier",
            "en": {
              "tag": "Mod · Fabric",
              "resumo": "Alerts when a fish bites and when you catch a crab.",
              "detalhes": "Client mod that alerts you at the right moment while fishing, so you don't have to stare at the screen the whole time. Published on CurseForge.",
              "funcionalidades": [
                "Rings a bell when you catch a fish",
                "Its own sound when you catch a crab",
                "Compatible with PyroFishing",
                "Minecraft 1.21.10 · version 1.5.2"
              ]
            },
            "tag": "Mod · Fabric",
            "downloads": 168,
            "modrinth": "",
            "resumo": "Alertas quando o peixe morde a isca e quando se apanha um caranguejo.",
            "detalhes": "Mod de cliente que te avisa no momento certo durante a pesca, para não teres de olhar para o ecrã o tempo todo. Publicado no CurseForge.",
            "funcionalidades": [
              "Toca um sino quando apanhas um peixe",
              "Som próprio quando apanhas um caranguejo",
              "Compatível com o PyroFishing",
              "Minecraft 1.21.10 · versão 1.5.2"
            ],
            "tech": [
              "Fabric"
            ],
            "links": [
              {
                "t": "CurseForge",
                "u": "https://www.curseforge.com/minecraft/mc-mods/fish-notifier"
              }
            ],
            "estado": "publicado"
          },
          {
            "nome": "Immersive Ride",
            "en": {
              "tag": "Mod · Fabric - Neoforge",
              "resumo": "Makes horse riding more immersive: leaning into turns, gallop sway and landing impact.",
              "detalhes": "Client mod that brings the camera to life while you ride. You and the horse lean into turns like on a motorbike, the camera follows the rhythm of the gallop and takes a hit when you land a jump. Published on CurseForge.",
              "funcionalidades": [
                "Leaning into turns, on the camera and on the horse and player models",
                "Vertical and horizontal gallop sway",
                "Landing impact and a slightly wider FOV at speed",
                "Settings screen with H, plus a key to turn it on/off",
                "Available for Fabric and NeoForge",
                "In English and Portuguese",
                "Minecraft 1.21.11 and 26.1 to 26.3 · version 1.0.2"
              ]
            },
            "tag": "Mod · Fabric - Neoforge",
            "downloads": 249,
            "resumo": "Torna andar a cavalo mais imersivo: inclinação nas curvas, balanço do galope e impacto ao aterrar.",
            "detalhes": "Mod de cliente que dá vida à câmara quando andas a cavalo. Tu e o cavalo inclinam nas curvas como numa mota, a câmara acompanha o ritmo do galope e sente o impacto quando aterras de um salto. Publicado no CurseForge.",
            "funcionalidades": [
              "Inclinação nas curvas, na câmara e nos modelos do cavalo e do jogador",
              "Balanço do galope na vertical e na horizontal",
              "Impacto ao aterrar e FOV um pouco mais aberto em velocidade",
              "Ecrã de definições com H e tecla para ligar/desligar",
              "Disponível para Fabric e NeoForge",
              "Em português e em inglês",
              "Minecraft 1.21.11 e 26.1 a 26.3 · versão 1.0.2"
            ],
            "tech": [
              "Fabric",
              "NeoForge"
            ],
            "links": [
              {
                "t": "CurseForge",
                "u": "https://www.curseforge.com/minecraft/mc-mods/immersive-ride"
              }
            ],
            "estado": "publicado"
          },
          {
            "nome": "FavServer",
            "en": {
              "tag": "Mod · Fabric - Neoforge - Quilt - Forge",
              "resumo": "Swaps the Realms button on the title screen for a button to your favourite server.",
              "detalhes": "Client mod that puts your favourite server on the title screen, in place of the Realms button, with the server's icon. You join in one click, without going through the server list. Published on CurseForge.",
              "funcionalidades": [
                "Favourite server button in place of Realms",
                "Shows the server icon",
                "Shows whether the server is online and how many players it has",
                "Button to edit the name and address (IP)",
                "Available for Fabric, Quilt, NeoForge and Forge",
                "In English and Portuguese",
                "Minecraft 1.21.11 and 26.1 to 26.3 · version 1.0.0"
              ]
            },
            "tag": "Mod · Neoforge - Quilt - Forge",
            "downloads": 151,
            "resumo": "Troca o botão do Realms no menu inicial por um botão para o teu servidor favorito.",
            "detalhes": "Mod de cliente que põe o teu servidor favorito no menu inicial, no lugar do botão do Realms, com o ícone do servidor. Entras com um clique, sem passar pela lista de servidores. Publicado no CurseForge.",
            "funcionalidades": [
              "Botão para o servidor favorito no lugar do Realms",
              "Mostra o ícone do servidor",
              "Mostra se o servidor está online e quantos jogadores tem",
              "Botão para editar o nome e o endereço (IP)",
              "Disponível para Fabric, Quilt, NeoForge e Forge",
              "Em português e em inglês",
              "Minecraft 1.21.11 e 26.1 a 26.3 · versão 1.0.0"
            ],
            "tech": [
              "Fabric",
              "Quilt",
              "NeoForge",
              "Forge"
            ],
            "links": [
              {
                "t": "CurseForge",
                "u": "https://www.curseforge.com/minecraft/mc-mods/favserver"
              }
            ],
            "estado": "publicado"
          },
          {
            "nome": "Item Seeker",
            "en": {
              "tag": "Mod · Fabric",
              "resumo": "Finds and selects an item by name in any open inventory.",
              "detalhes": "Type the exact item name and the mod finds it and selects it right away in whatever inventory you have open. Published on CurseForge.",
              "funcionalidades": [
                "Highlights the item with an RGB outline in the colour you choose",
                "Automatic selection with configurable delay and random variation",
                "Optional sound alert and chat message",
                "Configurable hotkey (K by default) and Mod Menu integration"
              ]
            },
            "tag": "Mod · Fabric",
            "downloads": 69,
            "resumo": "Encontra e seleciona um item pelo nome em qualquer inventário aberto.",
            "detalhes": "Escreves o nome exato do item e o mod encontra-o e seleciona-o logo no inventário que tiveres aberto. Publicado no CurseForge.",
            "funcionalidades": [
              "Destaque do item com contorno de cor RGB à tua escolha",
              "Seleção automática com atraso e variação aleatória configuráveis",
              "Aviso sonoro opcional e mensagem no chat",
              "Atalho configurável (por padrão K) e integração com Mod Menu"
            ],
            "tech": [
              "Fabric"
            ],
            "links": [
              {
                "t": "CurseForge",
                "u": "https://www.curseforge.com/minecraft/mc-mods/item-seeker"
              },
              {
                "t": "GitHub",
                "u": "https://github.com/Ribeiro-MD"
              }
            ],
            "estado": "publicado"
          },
          {
            "nome": "Kick Notifier",
            "en": {
              "tag": "Mod · Fabric",
              "resumo": "Sends you a Discord message when you get disconnected from a server.",
              "detalhes": "Client mod that warns you on Discord, through a webhook, when you get kicked, the server goes down or your connection drops. The message says the account, the server, how long you were online and the reason. Perfect for AFK sessions.",
              "funcionalidades": [
                "Discord alert with the account, server, time online and reason",
                "Optional mention, so the notification reaches your phone",
                "Ignores when you leave on purpose (can be turned on)",
                "Config with F7 or Mod Menu, with a test button",
                "In English and Portuguese",
                "Minecraft 1.21.11 and 26.1 to 26.3 · version 1.0.0"
              ]
            },
            "tag": "Mod · Fabric",
            "downloads": 62,
            "resumo": "Avisa-te no Discord quando és desconectado de um servidor.",
            "detalhes": "Mod de cliente que te avisa no Discord, por webhook, quando és kickado, o servidor vai abaixo ou perdes a ligação. A mensagem diz a conta, o servidor, o tempo online e o motivo. Ideal para quem deixa o jogo AFK.",
            "funcionalidades": [
              "Aviso no Discord com a conta, o servidor, o tempo online e o motivo",
              "Menção opcional, para a notificação chegar ao telemóvel",
              "Ignora quando sais de propósito (dá para ligar)",
              "Config com F7 ou pelo Mod Menu, com botão de teste",
              "Em português e em inglês",
              "Minecraft 1.21.11 e 26.1 a 26.3 · versão 1.0.0"
            ],
            "tech": [
              "Fabric"
            ],
            "links": [
              {
                "t": "Ver site",
                "u": "https://ribeiro-md.github.io/Kick-Notifier-Web/"
              },
              {
                "t": "CurseForge",
                "u": "https://www.curseforge.com/minecraft/mc-mods/kick-notifier/"
              }
            ],
            "estado": "publicado",
            "destaque": true
          },
          {
            "nome": "AFK Optimizer",
            "en": {
              "tag": "Mod · Fabric",
              "resumo": "Keeps your PC light during long idle periods.",
              "detalhes": "When you stand still on a server, the mod lowers what weighs most on your computer and restores everything when you come back.",
              "funcionalidades": [
                "Render, entity and simulation distances cut to the minimum",
                "Visual effects turned off",
                "Lower CPU and GPU usage while you're AFK"
              ]
            },
            "tag": "Mod · Fabric",
            "resumo": "Deixa o PC leve durante longos períodos de inatividade.",
            "detalhes": "Quando ficas parado num servidor, o mod baixa o que pesa mais no computador e repõe tudo quando voltas.",
            "funcionalidades": [
              "Distâncias de renderização, entidades e simulação reduzidas ao mínimo",
              "Efeitos visuais desligados",
              "Menor uso de CPU e GPU enquanto estás AFK"
            ],
            "tech": [
              "Fabric"
            ]
          },
          {
            "nome": "Chat Tracker",
            "en": {
              "tag": "Mod · Fabric",
              "resumo": "Plays a sound when the chat matches your patterns.",
              "detalhes": "Create rules with regular expressions and link a sound to each one, so you never miss important messages.",
              "funcionalidades": [
                "Rules with regular expressions",
                "Custom sound per rule"
              ]
            },
            "tag": "Mod · Fabric",
            "resumo": "Toca um som quando o chat corresponde às tuas expressões.",
            "detalhes": "Cria regras com expressões regulares e associa um som a cada uma, para não perderes mensagens importantes.",
            "funcionalidades": [
              "Regras com expressões regulares",
              "Som personalizado por regra"
            ],
            "tech": [
              "Fabric"
            ]
          },
          {
            "nome": "Random Chest",
            "en": {
              "tag": "Mod · Fabric",
              "resumo": "Generates chests full of random items.",
              "detalhes": "Creates chests already filled with random items, handy for testing and minigames.",
              "funcionalidades": [
                "Generates filled chests",
                "Randomly chosen items"
              ]
            },
            "tag": "Mod · Fabric",
            "resumo": "Gera baús cheios de itens aleatórios.",
            "detalhes": "Cria baús já preenchidos com itens aleatórios, útil para testes e minijogos.",
            "funcionalidades": [
              "Geração de baús preenchidos",
              "Itens escolhidos ao acaso"
            ],
            "tech": [
              "Fabric"
            ]
          },
          {
            "nome": "DMR Valley",
            "en": {
              "tag": "Mod · Fabric",
              "resumo": "Stardew Valley in Minecraft: crops, HUD and world map.",
              "detalhes": "Mod that brings Stardew Valley's farm life to Minecraft.",
              "funcionalidades": [
                "Crops",
                "Custom HUD",
                "World map"
              ]
            },
            "tag": "Mod · Fabric",
            "resumo": "Stardew Valley no Minecraft: culturas, HUD e mapa do mundo.",
            "detalhes": "Mod que traz a vida de quinta do Stardew Valley para o Minecraft.",
            "funcionalidades": [
              "Culturas",
              "HUD próprio",
              "Mapa do mundo"
            ],
            "tech": [
              "Fabric"
            ],
            "estado": "dev"
          },
          {
            "nome": "RibeiroBot",
            "en": {
              "tag": "Mod · Fabric",
              "resumo": "AI bot (Gemini) that answers in Minecraft chat with !bot.",
              "detalhes": "Type a question in chat starting with !bot and the bot answers using Gemini.",
              "funcionalidades": [
                "Answers in chat with the !bot prefix",
                "Powered by Gemini"
              ]
            },
            "tag": "Mod · Fabric",
            "resumo": "Bot de IA (Gemini) que responde no chat do Minecraft com !bot.",
            "detalhes": "Escreves uma pergunta no chat começada por !bot e o bot responde com o Gemini.",
            "funcionalidades": [
              "Responde no chat com o prefixo !bot",
              "Usa o Gemini"
            ],
            "tech": [
              "Fabric"
            ]
          },
          {
            "nome": "DMR AutoLogin",
            "en": {
              "tag": "Mod · Fabric",
              "resumo": "Reconnects, logs in and runs macros when you join a server.",
              "detalhes": "Client mod for long sessions on a server: if you drop, it joins again, logs in and replays your recorded actions.",
              "funcionalidades": [
                "Auto-reconnect",
                "Automatic login",
                "Recorded macros on join"
              ]
            },
            "tag": "Mod · Fabric",
            "resumo": "Volta a ligar sozinho, faz login e corre macros ao entrar num servidor.",
            "detalhes": "Mod de cliente para quem fica muito tempo num servidor: se cair, volta a entrar, faz o login e repete as ações gravadas.",
            "funcionalidades": [
              "Auto-reconnect",
              "Login automático",
              "Macros gravados ao entrar num servidor"
            ],
            "tech": [
              "Fabric"
            ]
          }
        ]
      },
      {
        "id": "plugins",
        "en": {
          "nome": "Plugins",
          "desc": "Paper/Bukkit server plugins, with their own commands, menus and config."
        },
        "nome": "Plugins",
        "desc": "Plugins Paper/Bukkit para servidores, com comandos, menus e configuração própria.",
        "itens": [
          {
            "nome": "DMRpunishTime",
            "en": {
              "tag": "Moderation",
              "resumo": "Punishments with /ban, /mute, /warn and /kick and custom messages.",
              "detalhes": "Punishment system for staff, with messages that show up in the server chat when someone is punished.",
              "funcionalidades": [
                "/ban, /mute, /warn and /kick commands",
                "Custom message in the server chat"
              ]
            },
            "tag": "Moderação",
            "resumo": "Punições com /ban, /mute, /warn e /kick e mensagens personalizadas.",
            "detalhes": "Sistema de punições para staff, com mensagens que aparecem no chat do servidor quando alguém é punido.",
            "funcionalidades": [
              "Comandos /ban, /mute, /warn e /kick",
              "Mensagem personalizada no chat do servidor"
            ],
            "tech": [
              "Java",
              "Paper"
            ]
          },
          {
            "nome": "DMRxpBottle",
            "en": {
              "tag": "Economy",
              "resumo": "Turns a player's experience into XP bottles.",
              "detalhes": "Lets players take their XP out and store it in bottles, to use later or trade with other players.",
              "funcionalidades": [
                "/garrafinhas <amount>: several experience bottles",
                "/garrafona <amount> <levels|points>: a single bottle with the exact XP"
              ]
            },
            "tag": "Economia",
            "resumo": "Converte a experiência do jogador em frascos de XP.",
            "detalhes": "Permite tirar XP do jogador e guardá-lo em garrafas, para usar mais tarde ou trocar com outros jogadores.",
            "funcionalidades": [
              "/garrafinhas <quantidade>: vários frascos de experiência",
              "/garrafona <quantidade> <níveis|pontos>: uma única garrafa com o XP exato"
            ],
            "tech": [
              "Java",
              "Bukkit"
            ]
          },
          {
            "nome": "ZonaAfk",
            "en": {
              "tag": "Land",
              "resumo": "Private plot-style AFK zones, with upgrades and resources.",
              "detalhes": "Each player gets their own AFK zone, where they can idle while the server generates resources for them.",
              "funcionalidades": [
                "/zonaafk ir, sair and menu",
                "Reinforced deepslate box and night vision",
                "Upgrades with /zonaafkupgrade",
                "Spawners that generate resources"
              ]
            },
            "tag": "Terrenos",
            "resumo": "Zonas AFK privadas ao estilo plots, com melhorias e recursos.",
            "detalhes": "Cada jogador tem a sua zona AFK, onde pode ficar parado enquanto o servidor lhe gera recursos.",
            "funcionalidades": [
              "/zonaafk ir, sair e menu",
              "Caixote reforçado de deepslate e visão noturna",
              "Melhorias com /zonaafkupgrade",
              "Spawners que geram recursos"
            ],
            "tech": [
              "Java",
              "Paper"
            ]
          },
          {
            "nome": "DMRUtilitys",
            "en": {
              "tag": "Utilities",
              "resumo": "Utility pack with custom enchantments and special items.",
              "detalhes": "A set of server tools, with admin commands, special items and new enchantments.",
              "funcionalidades": [
                "/dmrgive <item> [level] [player] to give special items",
                "/encantamentos with the enchantments menu",
                "Several custom enchantments",
                "Items like the Pokéball",
                "Version 1.6 · Paper 1.21"
              ]
            },
            "tag": "Utilitários",
            "resumo": "Pacote de utilitários com encantamentos personalizados e itens especiais.",
            "detalhes": "Conjunto de ferramentas para servidor, com comandos de administração, itens especiais e encantamentos novos.",
            "funcionalidades": [
              "/dmrgive <item> [nível] [jogador] para dar itens especiais",
              "/encantamentos com o menu de encantamentos",
              "Vários encantamentos personalizados",
              "Itens como a Pokébola",
              "Versão 1.6 · Paper 1.21"
            ],
            "tech": [
              "Java",
              "Paper"
            ]
          },
          {
            "nome": "PombaRankup",
            "en": {
              "tag": "Progression",
              "resumo": "Rank progression system for a live server.",
              "detalhes": "Rank plugin built for the Pombacraft server, where players keep levelling up.",
              "funcionalidades": [
                "Rank progression",
                "Built for a production server"
              ]
            },
            "tag": "Progressão",
            "resumo": "Sistema de progressão por ranks para um servidor real.",
            "detalhes": "Plugin de ranks desenvolvido para o servidor Pombacraft, onde os jogadores vão subindo de nível.",
            "funcionalidades": [
              "Progressão por ranks",
              "Feito para um servidor em produção"
            ],
            "tech": [
              "Java",
              "Bukkit"
            ],
            "privado": true
          },
          {
            "nome": "DMR Enchanted Books",
            "en": {
              "tag": "Enchantments",
              "resumo": "Magnet enchanted book: drops go straight to your inventory.",
              "detalhes": "New enchantment that sends the drops of what you break straight to your inventory.",
              "funcionalidades": [
                "Magnet enchanted book",
                "Drops straight to your inventory"
              ]
            },
            "tag": "Encantamentos",
            "resumo": "Livro de encantamento Íman: os drops vão direto para o inventário.",
            "detalhes": "Encantamento novo que manda os drops do que partes direto para o inventário.",
            "funcionalidades": [
              "Livro de encantamento Íman",
              "Drops direto para o inventário"
            ],
            "tech": [
              "Java",
              "Paper"
            ]
          }
        ]
      }
    ]
  }
];

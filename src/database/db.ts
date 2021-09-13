export const db = {
    "agents": [
        {
            "id": "15",
            "displayName": "astra",
            "function": "controlador",
            "imageUri": require("../assets/agents/astra/astra.png"),
            "description": "Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/astra/ability_1.png"),
                    "displayName": "q - pulso nova",
                    "description": "Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para detonar um Pulso Nova. O Pulso Nova carrega brevemente e depois estoura, causando concussão a todos os jogadores na área."
                },

                {
                    "abilityImageUri":  require("../assets/agents/astra/ability_2.png"),
                    "displayName": "e - nebulosa",
                    "description": "Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para transformá-la em uma Nebulosa (fumaça). Utilize (F) em uma Estrela para dissipá-la, retornando a estrela para ser posicionada em um novo local após um período de tempo. Dissipar forma brevemente uma Nebulosa falsa na localização da Estrela antes de retornar."
                },

                {
                    "abilityImageUri":  require("../assets/agents/astra/ability_3.png"),
                    "displayName": "c - poço gravitacional",
                    "description": "Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para formar um Poço Gravitacional. Jogadores na área são puxados em direção ao centro antes de ele explodir, deixando frágeis todos que ainda estão presos no centro."
                },

                {
                    "abilityImageUri":  require("../assets/agents/astra/ability_4.png"),
                    "displayName": "x - forma astral / divisa cósmica",
                    "description": "ATIVE (X) para entrar na Forma Astral, em que você pode posicionar Estrelas com DISPARO PRIMÁRIO. As Estrelas podem ser reativadas depois para serem transformadas em Pulso Nova, Nebulosa ou Poço Gravitacional. Quando Divisa Cósmica estiver carregada, utilize o DISPARO SECUNDÁRIO na Forma Astral para começar a mirar e, depois, o DISPARO PRIMÁRIO para escolher dois locais. Após isso, uma Divisa Cósmica infinita surge e conecta os pontos selecionados. A Divisa Cósmica bloqueia disparos e abafa muito o som."
                }
            ]

        },
        {
            "id": "03",
            "displayName": "breach",
            "function": "iniciador",
            "imageUri": require("../assets/agents/breach/breach.png"),
            "description": "Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/breach/ability_1.png"),
                    "displayName": "q - estompi",
                    "description": "EQUIPE uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela."
                },

                {
                    "abilityImageUri":  require("../assets/agents/breach/ability_2.png"),
                    "displayName": "e - falha tectônica",
                    "description": "EQUIPE um impacto sísmico. SEGURE O DISPARO para aumentar a distância. SOLTE para iniciar o terremoto, estonteando todos os jogadores na zona e numa linha reta até a zona."
                },

                {
                    "abilityImageUri":  require("../assets/agents/breach/ability_3.png"),
                    "displayName": "c - pós-choque",
                    "description": "EQUIPE uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede. O jato causa muito dano a todos que estiverem na área de efeito."
                },

                {
                    "abilityImageUri":  require("../assets/agents/breach/ability_4.png"),
                    "displayName": "x - onda trovejante",
                    "description": "EQUIPE uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone. O terremoto estonteia e derruba todos que estiverem na área de efeito."
                }
            ]

        },
        {
            "id": "05",
            "displayName": "brimstone",
            "function": "controlador",
            "imageUri": require("../assets/agents/brimstone/brimstone.png"),
            "description": "Vindo diretamente dos EUA, o arsenal orbital de Brimstone garante que o esquadrão dele esteja sempre em vantagem. Sua capacidade de oferecer utilidade com precisão a distância faz dele um comandante inigualável na linha de frente.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/brimstone/ability_1.png"),
                    "displayName": "q - incendiário",
                    "description": "EQUIPE um lançador de granadas incendiárias. DISPARE para lançar uma granada que detona no chão, gerando uma zona de fogo que causa dano aos jogadores dentro dela."
                },

                {
                    "abilityImageUri":  require("../assets/agents/brimstone/ability_2.png"),
                    "displayName": "e - fumaça celeste",
                    "description": "EQUIPE um mapa tático. DISPARE para marcar locais onde as nuvens de fumaça de Brimstone pousarão. Use o DISPARO SECUNDÁRIO para confirmar, lançando nuvens de fumaça de longa duração que bloqueiam a visão na área selecionada."
                },

                {
                    "abilityImageUri":  require("../assets/agents/brimstone/ability_3.png"),
                    "displayName": "c - sinalizador estimulante",
                    "description": "EQUIPE um sinalizador estimulante. DISPARE para jogar o sinalizador diante de Brimstone. Ao pousar, o sinalizador criará um campo que concede Tiro Rápido aos jogadores."
                },

                {
                    "abilityImageUri":  require("../assets/agents/brimstone/ability_4.png"),
                    "displayName": "x - ataque orbital",
                    "description": "EQUIPE um mapa tático. DISPARE para lançar um ataque prolongado de laser orbital no local selecionado, causando muito dano ao longo do tempo aos jogadores na área selecionada."
                }
            ]

        },
        {
            "id": "10",
            "displayName": "cypher",
            "function": "sentinela",
            "imageUri": require("../assets/agents/cypher/cypher.png"),
            "description": "Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/cypher/ability_1.png"),
                    "displayName": "q - jaula cibernética",
                    "description": "INSTANTANEAMENTE joga a jaula cibernética diante de Cypher. Ative para criar uma zona que bloqueia a visão e reduz a velocidade de inimigos que passarem por ela."
                },

                {
                    "abilityImageUri":  require("../assets/agents/cypher/ability_2.png"),
                    "displayName": "e - câmera de vigilância",
                    "description": "EQUIPE uma câmera de vigilância. DISPARE para colocar a câmera no local-alvo. REPITA a habilidade para controlar a visão da câmera. Enquanto controla a câmera, DISPARE para lançar um dardo marcador. O dardo revelará a localização de qualquer jogador atingido."
                },

                {
                    "abilityImageUri":  require("../assets/agents/cypher/ability_3.png"),
                    "displayName": "c - fio-armadilha",
                    "description": "EQUIPE um fio-armadilha. DISPARE para instalar um fio acionador oculto e destrutível no local-alvo, criando uma linha entre o local e a parede oposta. Jogadores inimigos que passarem por um fio e não destruírem o dispositivo a tempo ficarão imobilizados, revelados e estonteados depois de um breve intervalo. A habilidade pode ser recolhida para ser REPOSICIONADA."
                },

                {
                    "abilityImageUri":  require("../assets/agents/cypher/ability_4.png"),
                    "displayName": "x - assalto neural",
                    "description": "Use INSTANTANEAMENTE num jogador inimigo morto na sua mira para revelar a localização de todos os jogadores inimigos ainda vivos."
                }
            ]

        },
        {
            "id": "01",
            "displayName": "jett",
            "function": "duelista",
            "imageUri": require("../assets/agents/jett/jett.png"),
            "description": "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/jett/ability_1.png"),
                    "displayName": "q - corrente ascendente",
                    "description": "INSTANTANEAMENTE impele Jett bem alto no ar."
                },

                {
                    "abilityImageUri":  require("../assets/agents/jett/ability_2.png"),
                    "displayName": "e - brisa de impulso",
                    "description": "INSTANTANEAMENTE impele Jett na direção atual de movimento dela. Se estiver parada, Jett será impelida para a frente."
                },

                {
                    "abilityImageUri":  require("../assets/agents/jett/ability_3.png"),
                    "displayName": "c - erupção das brumas",
                    "description": "Lança INSTANTANEAMENTE um projétil que se expande numa breve nuvem que obscurece a visão ao bater numa superfície. SEGURE o botão da habilidade para curvar a fumaça na direção da sua mira."
                },

                {
                    "abilityImageUri":  require("../assets/agents/jett/ability_4.png"),
                    "displayName": "x - tormenta de aço",
                    "description": "EQUIPE um conjunto de facas altamente precisas que são recarregadas ao matar um oponente. DISPARE para lançar uma única faca contra o alvo. Use o DISPARO SECUNDÁRIO para jogar todas as facas restantes contra o alvo."
                }
            ]

        },
        {
            "id": "16",
            "displayName": "kayo",
            "function": "iniciador",
            "imageUri": require("../assets/agents/kayo/kayo.png"),
            "description": "KAY/O é uma máquina de guerra construída com um único propósito: neutralizar Radiantes. Ele é capaz de suprimir habilidades inimigas, comprometendo a capacidade de contra-ataque dos adversários e dando a si próprio e a seus aliados uma vantagem essencial em combate.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/kayo/ability_1.png"),
                    "displayName": "q - granada/clarão",
                    "description": "EQUIPE uma granada de clarão. DISPARE para jogá-la. A granada de clarão explode após um curto período, cegando qualquer um que estiver na linha de visão."
                },

                {
                    "abilityImageUri":  require("../assets/agents/kayo/ability_2.png"),
                    "displayName": "e - ponto/zero",
                    "description": "EQUIPE uma lâmina de supressão. DISPARE para atirá-la. A lâmina se fixa à primeira superfície que atingir e explode, suprimindo qualquer um que estiver dentro do raio da explosão."
                },

                {
                    "abilityImageUri":  require("../assets/agents/kayo/ability_3.png"),
                    "displayName": "c - frag/mento",
                    "description": "EQUIPE um fragmento explosivo. DISPARE para lançá-lo. O fragmento se fixa ao chão e explode várias vezes, causando dano quase letal no centro de cada explosão."
                },

                {
                    "abilityImageUri":  require("../assets/agents/kayo/ability_4.png"),
                    "displayName": "x - anular/cmd",
                    "description": "INSTANTANEAMENTE sobrecarrega com energia de Radianita polarizada que fortalece KAY/O e emite grandes pulsos energéticos a partir de onde ele estiver. Inimigos atingidos pelos pulsos são suprimidos por um curto período."
                }
            ]

        },
        {
            "id": "12",
            "displayName": "killjoy",
            "function": "sentinela",
            "imageUri": require("../assets/agents/killjoy/killjoy.png"),
            "description": "Killjoy, uma alemã genial, defende o campo de batalha facilmente usando seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs dão conta do recado.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/killjoy/ability_1.png"),
                    "displayName": "q - robô de alarme",
                    "description": "EQUIPE um Robô de Alarme oculto. DISPARE para ativar um robô que persegue os inimigos que entram no alcance. Ao se aproximar do alvo, o robô explode, causando dano e aplicando Vulnerável. SEGURE EQUIPAR para retirar um robô ativado."
                },

                {
                    "abilityImageUri":  require("../assets/agents/killjoy/ability_2.png"),
                    "displayName": "e - torreta",
                    "description": "EQUIPE uma Torreta. DISPARE para ativar uma torreta que atira em inimigos em um cone de 180°. SEGURE EQUIPAR para retirar a torreta ativada."
                },

                {
                    "abilityImageUri":  require("../assets/agents/killjoy/ability_3.png"),
                    "displayName": "c - nanoenxame",
                    "description": "EQUIPE uma granada Nanoenxame. DISPARE para lançar a granada. Ao atingir uma superfície, a Nanoenxame fica oculta. ATIVE a Nanoenxame para acionar um enxame de nanorrobôs que causam dano."
                },

                {
                    "abilityImageUri":  require("../assets/agents/killjoy/ability_4.png"),
                    "displayName": "x - confinamento",
                    "description": "EQUIPE o dispositivo de Confinamento. DISPARE para ativá-lo. Após um longo processo de ativação, o dispositivo detém todos os inimigos no raio de alcance. O dispositivo pode ser destruído pelos inimigos."
                }
            ]

        },
        {
            "id": "04",
            "displayName": "omen",
            "function": "controlador",
            "imageUri": require("../assets/agents/omen/omen.png"),
            "description": "Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/omen/ability_1.png"),
                    "displayName": "q - paranoia",
                    "description": "INSTANTANEAMENTE emite um projétil sombrio adiante, reduzindo brevemente o alcance de visão dos jogadores tocados. O projétil atravessa paredes."
                },

                {
                    "abilityImageUri":  require("../assets/agents/omen/ability_2.png"),
                    "displayName": "e - manto sombrio",
                    "description": "EQUIPE um orbe sombrio e veja o indicador de alcance. DISPARE para lançar o orbe no local marcado, criando uma esfera de sombra duradoura que bloqueia a visão. SEGURE O DISPARO SECUNDÁRIO enquanto mira para afastar o marcador. SEGURE a tecla de habilidade enquanto mira para aproximar o marcador."
                },

                {
                    "abilityImageUri":  require("../assets/agents/omen/ability_3.png"),
                    "displayName": "c - passos tenebrosos",
                    "description": "EQUIPE uma habilidade de passos sombrios e olhe o indicador de alcance. DISPARE para começar uma breve canalização e, então, teleporte-se para o local marcado."
                },

                {
                    "abilityImageUri":  require("../assets/agents/omen/ability_4.png"),
                    "displayName": "x - salto das sombras",
                    "description": "EQUIPE um mapa tático. DISPARE para começar a se teleportar ao local selecionado. Enquanto se teleporta, Omen aparecerá como um Vulto que pode ser destruído por qualquer inimigo para cancelar o teleporte."
                }
            ]

        },
        {
            "id": "06",
            "displayName": "phoenix",
            "function": "duelista",
            "imageUri": require("../assets/agents/phoenix/phoenix.png"),
            "description": "Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/phoenix/ability_1.png"),
                    "displayName": "q - bola curva",
                    "description": "EQUIPE um orbe de chamas que avança em curva e detona pouco após o lançamento. DISPARE para curvá-lo para a esquerda, detonando e cegando qualquer jogador que vir o orbe. Use o DISPARO SECUNDÁRIO para curvá-lo para a direita."
                },

                {
                    "abilityImageUri":  require("../assets/agents/phoenix/ability_2.png"),
                    "displayName": "e - mãos quentes",
                    "description": "EQUIPE uma bola de fogo. DISPARE para jogar a bola de fogo, que explode após um intervalo ou ao atingir o chão, criando uma zona duradoura de fogo que causa dano aos inimigos."
                },

                {
                    "abilityImageUri":  require("../assets/agents/phoenix/ability_3.png"),
                    "displayName": "c - labareda",
                    "description": "EQUIPE uma parede de fogo. DISPARE para criar uma linha de chamas que avança, gerando uma parede de fogo que bloqueia a visão e causa dano a jogadores que passarem por ela. SEGURE O DISPARO para curvá-la na direção da mira."
                },

                {
                    "abilityImageUri":  require("../assets/agents/phoenix/ability_4.png"),
                    "displayName": "x - renascimento",
                    "description": "INSTANTANEAMENTE coloca um marcador na localização de Phoenix. Com a habilidade ativa, morrer ou deixar o tempo acabar encerrarão a habilidade e trarão Phoenix de volta ao local marcado com Vida completa."
                }
            ]

        },
        {
            "id": "02",
            "displayName": "raze",
            "function": "duelista",
            "imageUri": require("../assets/agents/raze/raze.png"),
            "description": "Raze chega do Brasil em uma explosão de carisma e armas letais. Com seu estilo de jogo \"porradeiro\", ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/raze/ability_1.png"),
                    "displayName": "q - carga de explosivos",
                    "description": "INSTANTANEAMENTE joga uma Carga de Explosivos que gruda em superfícies. REUSE a habilidade depois de instalar para detonar, causando dano e movendo tudo que for atingido. Raze não sofre dano ao ser atingida pelo efeito desta habilidade, mas ainda pode sofrer dano de queda se for arremessada para longe."
                },

                {
                    "abilityImageUri":  require("../assets/agents/raze/ability_2.png"),
                    "displayName": "e - cartuchos de tinta",
                    "description": "EQUIPE uma granada múltipla. DISPARE para jogar a granada, que causa dano e cria submunições, cada uma causando dano a qualquer um que estiver no alcance."
                },

                {
                    "abilityImageUri":  require("../assets/agents/raze/ability_3.png"),
                    "displayName": "c - bumba",
                    "description": "EQUIPE um Bumba. DISPARE para lançar o robô, que avança em linha reta no chão, ricocheteando nas paredes. O Bumba trava ao detectar inimigos no cone frontal e os persegue, explodindo e causando muito dano se alcançá-los."
                },

                {
                    "abilityImageUri":  require("../assets/agents/raze/ability_4.png"),
                    "displayName": "x - estraga-prazeres",
                    "description": "EQUIPE um lança-mísseis. DISPARE um foguete que causa dano devastador em área ao fazer contato com qualquer coisa."
                }
            ]

        },
        {
            "id": "11",
            "displayName": "reyna",
            "function": "duelista",
            "imageUri": require("../assets/agents/reyna/reyna.png"),
            "description": "Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/reyna/ability_1.png"),
                    "displayName": "q - devorar",
                    "description": "Inimigos abatidos por Reyna deixam Orbes de Alma que duram 3s. INSTANTANEAMENTE consome um Orbe de Alma próximo, curando-se de forma rápida por um curto período. A quantidade de Vida concedida por esta habilidade que ultrapassar 100 decairá ao longo do tempo. Se a habilidade IMPERATRIZ estiver ativa, esta habilidade será conjurada automaticamente e não consumirá o orbe."
                },

                {
                    "abilityImageUri":  require("../assets/agents/reyna/ability_2.png"),
                    "displayName": "e - dispensar",
                    "description": "INSTANTANEAMENTE consome um Orbe de Alma próximo, ficando inatingível por um curto período. Também se torna invisível se a habilidade IMPERATRIZ estiver ativa."
                },

                {
                    "abilityImageUri":  require("../assets/agents/reyna/ability_3.png"),
                    "displayName": "c - olhar voraz",
                    "description": "EQUIPE um olho etéreo e destrutível. ATIVE para lançá-lo adiante a uma curta distância. O olho deixará com visão turva todos os inimigos que olharem para ele."
                },

                {
                    "abilityImageUri":  require("../assets/agents/reyna/ability_4.png"),
                    "displayName": "x - imperatriz",
                    "description": "INSTANTANEAMENTE entra em estado de frenesi, aumentando de forma drástica as velocidades de disparo, equipamento e recarga de munição. Renova a duração ao fazer um abate."
                }
            ]

        },
        {
            "id": "07",
            "displayName": "sage",
            "function": "sentinela",
            "imageUri": require("../assets/agents/sage/sage.png"),
            "description": "Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/sage/ability_1.png"),
                    "displayName": "q - orbe de lentidão",
                    "description": "EQUIPE um orbe de lentidão. DISPARE para lançá-lo. O orbe detona ao pousar, criando um campo duradouro que desacelera os jogadores dentro dele."
                },

                {
                    "abilityImageUri":  require("../assets/agents/sage/ability_2.png"),
                    "displayName": "e - orbe curativo",
                    "description": "EQUIPE um orbe curativo. DISPARE com a mira sobre um aliado ferido para ativar uma cura ao longo do tempo. Use o DISPARO SECUNDÁRIO enquanto Sage estiver ferida para ativar uma autocura ao longo do tempo."
                },

                {
                    "abilityImageUri":  require("../assets/agents/sage/ability_3.png"),
                    "displayName": "c - orbe de barreira",
                    "description": "EQUIPE um orbe de barreira. DISPARE para posicionar uma parede sólida. MODO SEC. gira o marcador de alvo."
                },

                {
                    "abilityImageUri":  require("../assets/agents/sage/ability_4.png"),
                    "displayName": "x - ressurreição",
                    "description": "EQUIPE uma habilidade de ressurreição. DISPARE com a mira sobre um aliado morto para começar a revivê-lo. Depois de uma breve canalização, o aliado voltará com a Vida completa."
                }
            ]

        },
        {
            "id": "13",
            "displayName": "skye",
            "function": "iniciador",
            "imageUri": require("../assets/agents/skye/skye.png"),
            "description": "Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/skye/ability_1.png"),
                    "displayName": "q - predador explosivo",
                    "description": "EQUIPE um amuleto de lobo-da-tasmânia. DISPARE para enviar e controlar esse predador. Enquanto estiver no controle, DISPARE para saltar para a frente. O lobo gera uma explosão e causa dano aos inimigos diretamente atingidos."
                },

                {
                    "abilityImageUri":  require("../assets/agents/skye/ability_2.png"),
                    "displayName": "e - luz desbravadora",
                    "description": "EQUIPE um amuleto de falcão. DISPARE para enviá-lo. SEGURE O DISPARO para guiar o falcão na direção da sua mira. REPITA a habilidade enquanto ele estiver voando para transformá-lo em um feixe de luz que gera uma confirmação de hit caso um inimigo esteja dentro do alcance ou na linha de visão."
                },

                {
                    "abilityImageUri":  require("../assets/agents/skye/ability_3.png"),
                    "displayName": "c - reflorescer",
                    "description": "EQUIPE um amuleto de cura. SEGURE O DISPARO para canalizar, curando aliados dentro do alcance e na sua linha de visão. Esta habilidade pode ser repetida até a reserva de cura ser esgotada. Skye não pode curar a si mesma."
                },

                {
                    "abilityImageUri":  require("../assets/agents/skye/ability_4.png"),
                    "displayName": "x - rastreadores",
                    "description": "EQUIPE um amuleto de rastreador. DISPARE para enviar três rastreadores que localizarão os três inimigos mais próximos. Se um rastreador alcançar um alvo, ele causará visão turva a esse inimigo."
                }
            ]

        },
        {
            "id": "08",
            "displayName": "sova",
            "function": "iniciador",
            "imageUri": require("../assets/agents/sova/sova.png"),
            "description": "Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/sova/ability_1.png"),
                    "displayName": "q - flecha de choque",
                    "description": "EQUIPE um arco com uma flecha de choque. DISPARE para lançar a flecha que explode ao impacto, causando dano aos jogadores próximos. SEGURE O DISPARO para estender o alcance do projétil. Use o DISPARO SECUNDÁRIO para adicionar até dois ricochetes à flecha."
                },

                {
                    "abilityImageUri":  require("../assets/agents/sova/ability_2.png"),
                    "displayName": "e - flecha rastreadora",
                    "description": "EQUIPE um arco com uma flecha de reconhecimento. DISPARE para lançar a flecha, que é ativada mediante impacto e revela a localização de quaisquer inimigos próximos da sua linha de visão. SEGURE O DISPARO para ampliar o alcance do projétil. Use o DISPARO SECUNDÁRIO para adicionar até dois ricochetes à flecha."
                },

                {
                    "abilityImageUri":  require("../assets/agents/sova/ability_3.png"),
                    "displayName": "c - drone coruja",
                    "description": "EQUIPE um drone coruja. DISPARE para acionar e pilotar o drone. Enquanto pilota o drone, DISPARE para atirar um dardo marcador. Dardos revelam a localização de quaisquer jogadores atingidos."
                },

                {
                    "abilityImageUri":  require("../assets/agents/sova/ability_4.png"),
                    "displayName": "x - fúria do caçador",
                    "description": "EQUIPE um arco com três disparos de longo alcance que perfuram paredes. DISPARE para atirar um raio de energia diante de Sova, causando dano e revelando a localização dos inimigos que estiverem na linha. A habilidade pode ser REPETIDA mais duas vezes enquanto o cronômetro de habilidade estiver ativo."
                }
            ]

        },
        {
            "id": "09",
            "displayName": "viper",
            "function": "controlador",
            "imageUri": require("../assets/agents/viper/viper.png"),
            "description": "Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/viper/ability_1.png"),
                    "displayName": "q - nuvem venenosa",
                    "description": "EQUIPE um emissor de gás. DISPARE para jogar o emissor, que persiste até o fim da rodada. REPITA para criar uma nuvem de gás tóxico que drena combustível. A habilidade pode ser REPETIDA mais de uma vez e pode ser recolhida para ser REPOSICIONADA."
                },

                {
                    "abilityImageUri":  require("../assets/agents/viper/ability_2.png"),
                    "displayName": "e - cortina tóxica",
                    "description": "EQUIPE um lançador de emissores de gás. DISPARE para lançar uma longa linha de emissores de gás. REPITA a habilidade para criar uma parede alta de gás tóxico que drena combustível. A habilidade pode ser REPETIDA mais de uma vez."
                },

                {
                    "abilityImageUri":  require("../assets/agents/viper/ability_3.png"),
                    "displayName": "c - veneno de cobra",
                    "description": "EQUIPE um lançador químico. DISPARE para lançar um cilindro que se rompe ao atingir o chão, gerando uma zona química duradoura que causa dano e reduz a velocidade dos inimigos."
                },

                {
                    "abilityImageUri":  require("../assets/agents/viper/ability_4.png"),
                    "displayName": "x - poço peçonhento",
                    "description": "EQUIPE um borrifador químico. DISPARE para borrifar uma nuvem química em todas as direções ao redor de Viper, criando uma grande nuvem que reduz o alcance de visão e a Vida máxima dos jogadores dentro dela."
                }
            ]

        },
        {
            "id": "14",
            "displayName": "yoru",
            "function": "duelista",
            "imageUri": require("../assets/agents/yoru/yoru.png"),
            "description": "Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.",
            "abilities": [
                {
                    "abilityImageUri":  require("../assets/agents/yoru/ability_1.png"),
                    "displayName": "q - ponto cego",
                    "description": "EQUIPE para arrancar da realidade um fragmento dimensional instável. DISPARE para lançar o fragmento, ativando um clarão que se dissipa ao atingir uma superfície sólida."
                },

                {
                    "abilityImageUri":  require("../assets/agents/yoru/ability_2.png"),
                    "displayName": "e - passagem dimensional",
                    "description": "EQUIPE para preparar um fluxo dimensional. DISPARE para lançar uma extremidade. Use o MODO SEC. para posicionar a outra. ATIVE para se teleportar até a extremidade lançada."
                },

                {
                    "abilityImageUri":  require("../assets/agents/yoru/ability_3.png"),
                    "displayName": "c - falcatrua",
                    "description": "EQUIPE uma granada de eco que imita passos quando ativada. DISPARE para ativá-la e propagar seu efeito. Use o MODO SEC. para posicioná-la. USE a granada inativa para propagar o som de outra."
                },

                {
                    "abilityImageUri":  require("../assets/agents/yoru/ability_4.png"),
                    "displayName": "x - espionagem dimensional",
                    "description": "EQUIPE uma máscara para olhar por entre as dimensões. DISPARE para entrar na dimensão do Yoru, onde você não poderá ser afetado nem visto pelos inimigos lá fora."
                }
            ]

        }

    ],

    "weapons": [
        {   
            "id": "1",
            "uuid": "29a0cfab-485b-f5d5-779a-b59f85e204a8",
            "displayName": "classic",
            "type": "armas leves",
            "price": "0",
            "imageUri": require("../assets/weapons/classic.png"),
            "weaponStats": {
                "altFire": "Número de projéteis: 3;Cadência de tiro: 2,22 rajadas/s",
                "freatures": "",
                "fireRate": 6.75,
                "magazineSize": 12,
                "runSpeedMultiplier": 0.85,
                "equipTimeSeconds": 0.75,
                "reloadTimeSeconds": 1.75,
                "firstBulletAccuracy": 0.4,
                "shotgunPelletCount": 1,
                "wallPenetration": "Baixa",
                "feature": null,
                "fireMode": "SemiAuto",
                "altFireType": "EWeaponAltFireDisplayType::Shotgun",
                "adsStats": null,
                "altShotgunStats": {
                  "shotgunPelletCount": 3,
                  "burstRate": 2.22
                },
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 30,
                    "headDamage": 78,
                    "bodyDamage": 26,
                    "legDamage": 22.1
                  },
                  {
                    "rangeStartMeters": 30,
                    "rangeEndMeters": 50,
                    "headDamage": 66,
                    "bodyDamage": 22,
                    "legDamage": 18.7
                  }
                ]
              },
        },
        {   
            "id": "2",
            "uuid": "42da8ccc-40d5-affc-beec-15aa47b42eda",
            "displayName": "shorty",
            "type": "armas leves",
            "price": "150",
            "imageUri": require("../assets/weapons/shorty.png"),
            "weaponStats": {
                "altFire": "",
                "freatures": "",
                "fireRate": 3.33,
                "magazineSize": 2,
                "runSpeedMultiplier": 0.8,
                "equipTimeSeconds": 0.75,
                "reloadTimeSeconds": 1.75,
                "firstBulletAccuracy": 4,
                "shotgunPelletCount": 15,
                "wallPenetration": "Baixa",
                "feature": null,
                "fireMode": "SemiAuto",
                "altFireType": null,
                "adsStats": null,
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 7,
                    "headDamage": 24,
                    "bodyDamage": 12,
                    "legDamage": 10.200001
                  },
                  {
                    "rangeStartMeters": 7,
                    "rangeEndMeters": 15,
                    "headDamage": 16,
                    "bodyDamage": 8,
                    "legDamage": 6.8
                  },
                  {
                    "rangeStartMeters": 15,
                    "rangeEndMeters": 50,
                    "headDamage": 6,
                    "bodyDamage": 3,
                    "legDamage": 2.5500002
                  }
                ]
            },
        },
        {   
            "id": "3",
            "uuid": "44d4e95c-4157-0037-81b2-17841bf2e8e3",
            "displayName": "frenzy",
            "type": "armas leves",
            "price": "450",
            "imageUri": require("../assets/weapons/frenzy.png"),
            "weaponStats": {
              "altFire": "",
              "freatures": "",
              "fireRate": 10,
              "magazineSize": 13,
              "runSpeedMultiplier": 0.85,
              "equipTimeSeconds": 1,
              "reloadTimeSeconds": 1.5,
              "firstBulletAccuracy": 0.45,
              "shotgunPelletCount": 1,
              "wallPenetration": "Baixa",
              "feature": null,
              "fireMode": null,
              "altFireType": null,
              "adsStats": null,
              "altShotgunStats": null,
              "airBurstStats": null,
              "damageRanges": [
                {
                  "rangeStartMeters": 0,
                  "rangeEndMeters": 20,
                  "headDamage": 78,
                  "bodyDamage": 26,
                  "legDamage": 22.1
                },
                {
                  "rangeStartMeters": 20,
                  "rangeEndMeters": 50,
                  "headDamage": 63,
                  "bodyDamage": 21,
                  "legDamage": 17.85
                }
              ]
            },
        },
        {   
            "id": "4",
            "uuid": "1baa85b4-4c70-1284-64bb-6481dfc3bb4e",
            "displayName": "ghost",
            "type": "armas leves",
            "price": "500",
            "imageUri": require("../assets/weapons/ghost.png"),
            "weaponStats": {
                "altFire": "",
                "freatures": "Trajetória de tiro invisível para inimigos.;Disparo não é ouvido a distâncias superiores a 40m, exceto na direção do tiro.",
                "fireRate": 6.75,
                "magazineSize": 15,
                "runSpeedMultiplier": 0.85,
                "equipTimeSeconds": 0.75,
                "reloadTimeSeconds": 1.5,
                "firstBulletAccuracy": 0.3,
                "shotgunPelletCount": 1,
                "wallPenetration": "Média",
                "feature": "EWeaponStatsFeature::Silenced",
                "fireMode": "EWeaponFireModeDisplayType::SemiAutomatic",
                "altFireType": null,
                "adsStats": null,
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 30,
                    "headDamage": 105,
                    "bodyDamage": 30,
                    "legDamage": 25.5
                  },
                  {
                    "rangeStartMeters": 30,
                    "rangeEndMeters": 50,
                    "headDamage": 87.5,
                    "bodyDamage": 25,
                    "legDamage": 21.25
                  }
                ]
            },
        },
        {   
            "id": "5",
            "uuid": "e336c6b8-418d-9340-d77f-7a9e4cfe0702",
            "displayName": "sheriff",
            "type": "armas leves",
            "price": "800",
            "imageUri": require("../assets/weapons/sheriff.png"),
            "weaponStats": {
                "altFire": "",
                "freatures": "",
                "fireRate": 4,
                "magazineSize": 6,
                "runSpeedMultiplier": 0.8,
                "equipTimeSeconds": 1,
                "reloadTimeSeconds": 2.25,
                "firstBulletAccuracy": 0.25,
                "shotgunPelletCount": 1,
                "wallPenetration": "Alta",
                "feature": null,
                "fireMode": "EWeaponFireModeDisplayType::SemiAutomatic",
                "altFireType": null,
                "adsStats": null,
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 30,
                    "headDamage": 159.5,
                    "bodyDamage": 55,
                    "legDamage": 46.75
                  },
                  {
                    "rangeStartMeters": 30,
                    "rangeEndMeters": 50,
                    "headDamage": 145,
                    "bodyDamage": 50,
                    "legDamage": 42.5
                  }
                ]
              },
        },
        {   
            "id": "6",
            "uuid": "f7e1b454-4ad4-1063-ec0a-159e56b58941",
            "displayName": "stinger",
            "type": "submetralhadoras",
            "price": "950",
            "imageUri": require("../assets/weapons/stinger.png"),
            "weaponStats": {
                "altFire": "Zoom: 1,15x;Cadência de tiro: 52% (8,471 tiros/s);Velocidade de Movimento: 76% (4,361 m/s);Leve redução de dispersão de recuo.;A retícula segue o recuo.;Rajada: 4 projéteis.",
                "freatures": "",
                "fireRate": 16,
                "magazineSize": 20,
                "runSpeedMultiplier": 0.85,
                "equipTimeSeconds": 0.75,
                "reloadTimeSeconds": 2.25,
                "firstBulletAccuracy": 0.65,
                "shotgunPelletCount": 1,
                "wallPenetration": "Baixa",
                "feature": null,
                "fireMode": null,
                "altFireType": "EWeaponAltFireDisplayType::ADS",
                "adsStats": {
                  "zoomMultiplier": 1.15,
                  "fireRate": 8.470589,
                  "runSpeedMultiplier": 0.76,
                  "burstCount": 4,
                  "firstBulletAccuracy": 0.5
                },
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 20,
                    "headDamage": 67.5,
                    "bodyDamage": 27,
                    "legDamage": 22.95
                  },
                  {
                    "rangeStartMeters": 20,
                    "rangeEndMeters": 50,
                    "headDamage": 62.5,
                    "bodyDamage": 25,
                    "legDamage": 21.25
                  }
                ]
              },
        },
        {   
            "id": "7",
            "uuid": "462080d1-4035-2937-7c09-27aa2a5c27a7",
            "displayName": "spectre",
            "type": "submetralhadoras",
            "price": "1600",
            "imageUri": require("../assets/weapons/spectre.png"),
            "weaponStats": {
                "altFire": "Zoom: 1,15x;Cadência de tiro: 90% (12 tiros/s);Velocidade de Movimento: 76% (4,361 m/s);Leve redução de dispersão de recuo.;A retícula segue o recuo.",
                "freatures": "Trajetória de tiro invisível para inimigos.;Disparo não é ouvido a distâncias superiores a 40m, exceto na direção do tiro.",
                "fireRate": 13.333,
                "magazineSize": 30,
                "runSpeedMultiplier": 0.85,
                "equipTimeSeconds": 0.75,
                "reloadTimeSeconds": 2.25,
                "firstBulletAccuracy": 0.4,
                "shotgunPelletCount": 1,
                "wallPenetration": "Baixa",
                "feature": "EWeaponStatsFeature::Silenced",
                "fireMode": null,
                "altFireType": "EWeaponAltFireDisplayType::ADS",
                "adsStats": {
                  "zoomMultiplier": 1.15,
                  "fireRate": 11.9997,
                  "runSpeedMultiplier": 0.76,
                  "burstCount": 1,
                  "firstBulletAccuracy": 0.25
                },
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 20,
                    "headDamage": 78,
                    "bodyDamage": 26,
                    "legDamage": 22.1
                  },
                  {
                    "rangeStartMeters": 20,
                    "rangeEndMeters": 50,
                    "headDamage": 66,
                    "bodyDamage": 22,
                    "legDamage": 18.7
                  }
                ]
              },
        },
        {   
            "id": "8",
            "uuid": "910be174-449b-c412-ab22-d0873436b21b",
            "displayName": "bucky",
            "type": "escopetas",
            "price": "950",
            "imageUri": require("../assets/weapons/bucky.png"),
            "weaponStats": {
                "altFire": "Lança um cilindro que detona após uma curta distância, liberando projéteis.;O cilindro não causa dano até ser detonado;Distância de detonação: 7,5m;Número de projéteis: 5",
                "freatures": "",
                "fireRate": 1.1,
                "magazineSize": 5,
                "runSpeedMultiplier": 0.75,
                "equipTimeSeconds": 1,
                "reloadTimeSeconds": 2.5,
                "firstBulletAccuracy": 2.6,
                "shotgunPelletCount": 15,
                "wallPenetration": "Baixa",
                "feature": null,
                "fireMode": "EWeaponFireModeDisplayType::SemiAutomatic",
                "altFireType": "EWeaponAltFireDisplayType::AirBurst",
                "adsStats": null,
                "altShotgunStats": null,
                "airBurstStats": {
                  "shotgunPelletCount": 5,
                  "burstDistance": 7.5
                },
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 8,
                    "headDamage": 40,
                    "bodyDamage": 20,
                    "legDamage": 17
                  },
                  {
                    "rangeStartMeters": 8,
                    "rangeEndMeters": 12,
                    "headDamage": 26,
                    "bodyDamage": 13,
                    "legDamage": 11.05
                  },
                  {
                    "rangeStartMeters": 12,
                    "rangeEndMeters": 50,
                    "headDamage": 18,
                    "bodyDamage": 9,
                    "legDamage": 7.65
                  }
                ]
              },
        },
        {   
            "id": "9",
            "uuid": "ec845bf4-4f79-ddda-a3da-0db3774b2794",
            "displayName": "judge",
            "type": "escopetas",
            "price": "1850",
            "imageUri": require("../assets/weapons/judge.png"),
            "weaponStats": {
                "altFire": "",
                "freatures": "",
                "fireRate": 3.5,
                "magazineSize": 7,
                "runSpeedMultiplier": 0.75,
                "equipTimeSeconds": 1,
                "reloadTimeSeconds": 2.2,
                "firstBulletAccuracy": 2.25,
                "shotgunPelletCount": 12,
                "wallPenetration": "Baixa",
                "feature": null,
                "fireMode": null,
                "altFireType": null,
                "adsStats": null,
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 10,
                    "headDamage": 34,
                    "bodyDamage": 17,
                    "legDamage": 14.450001
                  },
                  {
                    "rangeStartMeters": 10,
                    "rangeEndMeters": 15,
                    "headDamage": 20,
                    "bodyDamage": 10,
                    "legDamage": 8.5
                  },
                  {
                    "rangeStartMeters": 15,
                    "rangeEndMeters": 50,
                    "headDamage": 14,
                    "bodyDamage": 7,
                    "legDamage": 5.9500003
                  }
                ]
              },
        },
        {   
            "id": "10",
            "uuid": "ae3de142-4d85-2547-dd26-4e90bed35cf7",
            "displayName": "bulldog",
            "type": "fuzis",
            "price": "2050",
            "imageUri": require("../assets/weapons/bulldog.png"),
            "weaponStats": {
                "altFire": "Zoom: 1,25x;Cadência de tiro: 66% (6,316 tiros/s);Velocidade de Movimento: 76% (4,104 m/s);Leve redução de dispersão de recuo.;A retícula segue o recuo.;Rajada: 3 projéteis.",
                "freatures": "",
                "fireRate": 9.5,
                "magazineSize": 24,
                "runSpeedMultiplier": 0.8,
                "equipTimeSeconds": 1,
                "reloadTimeSeconds": 2.5,
                "firstBulletAccuracy": 0.3,
                "shotgunPelletCount": 1,
                "wallPenetration": "Média",
                "feature": null,
                "fireMode": null,
                "altFireType": "EWeaponAltFireDisplayType::ADS",
                "adsStats": {
                  "zoomMultiplier": 1.25,
                  "fireRate": 6.315715,
                  "runSpeedMultiplier": 0.76,
                  "burstCount": 3,
                  "firstBulletAccuracy": 0.3
                },
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 50,
                    "headDamage": 115.5,
                    "bodyDamage": 35,
                    "legDamage": 29.75
                  }
                ]
              },
        },
        {   
            "id": "11",
            "uuid": "4ade7faa-4cf1-8376-95ef-39884480959b",
            "displayName": "guardian",
            "type": "fuzis",
            "price": "2250",
            "imageUri": require("../assets/weapons/guardian.png"),
            "weaponStats": {
                "altFire": "Zoom: 1,5x;Cadência de tiro: 81% (4,275 tiros/s);Velocidade de Movimento: 76% (4,104 m/s);Leve redução de dispersão de recuo.;A retícula segue o recuo.",
                "freatures": "Tracers not visible to enemies;Firing sound can’t be heard at distances of 40m+ except in direction of fire",
                "fireRate": 5.25,
                "magazineSize": 12,
                "runSpeedMultiplier": 0.8,
                "equipTimeSeconds": 1,
                "reloadTimeSeconds": 2.5,
                "firstBulletAccuracy": 0.1,
                "shotgunPelletCount": 1,
                "wallPenetration": "Alta",
                "feature": null,
                "fireMode": "EWeaponFireModeDisplayType::SemiAutomatic",
                "altFireType": "EWeaponAltFireDisplayType::ADS",
                "adsStats": {
                  "zoomMultiplier": 1.5,
                  "fireRate": 4.275,
                  "runSpeedMultiplier": 0.76,
                  "burstCount": 1,
                  "firstBulletAccuracy": 0
                },
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 50,
                    "headDamage": 195,
                    "bodyDamage": 65,
                    "legDamage": 48.75
                  }
                ]
              },
        },
        {   
            "id": "12",
            "uuid": "ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a",
            "displayName": "phantom",
            "type": "fuzis",
            "price": "2900",
            "imageUri": require("../assets/weapons/phantom.png"),
            "weaponStats": {
                "altFire": "Zoom: 1.25x;Cadência de tiro: 90% (9.9 tiros/s);Velocidade de movimento: 76% (4.104 m/seg);Leve redução de dispersão de recuo.;A retícula segue o recuo.",
                "freatures": "Trajetória de tiro invisível para inimigos.;Disparo não é ouvido a distâncias superiores a 40m, exceto na direção do tiro.",
                "fireRate": 11,
                "magazineSize": 30,
                "runSpeedMultiplier": 0.8,
                "equipTimeSeconds": 1,
                "reloadTimeSeconds": 2.5,
                "firstBulletAccuracy": 0.2,
                "shotgunPelletCount": 1,
                "wallPenetration": "Média",
                "feature": "EWeaponStatsFeature::Silenced",
                "fireMode": null,
                "altFireType": "EWeaponAltFireDisplayType::ADS",
                "adsStats": {
                  "zoomMultiplier": 1.25,
                  "fireRate": 9.9,
                  "runSpeedMultiplier": 0.76,
                  "burstCount": 1,
                  "firstBulletAccuracy": 0.11000001
                },
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 15,
                    "headDamage": 156,
                    "bodyDamage": 39,
                    "legDamage": 33.15
                  },
                  {
                    "rangeStartMeters": 15,
                    "rangeEndMeters": 30,
                    "headDamage": 140,
                    "bodyDamage": 35,
                    "legDamage": 29.75
                  },
                  {
                    "rangeStartMeters": 30,
                    "rangeEndMeters": 50,
                    "headDamage": 124,
                    "bodyDamage": 31,
                    "legDamage": 26.35
                  }
                ]
              },
        },
        {   
            "id": "13",
            "uuid": "9c82e19d-4575-0200-1a81-3eacf00cf872",
            "displayName": "vandal",
            "type": "fuzis",
            "price": "2900",
            "imageUri": require("../assets/weapons/vandal.png"),
            "weaponStats": {
                "altFire": "Zoom: 1.25x;Cadência de tiro: 90% (8,775 tiros/s);Velocidade de movimento: 76% (4.104 m/seg);Leve redução de dispersão de recuo.;A retícula segue o recuo.",
                "freatures": "",
                "fireRate": 9.75,
                "magazineSize": 25,
                "runSpeedMultiplier": 0.8,
                "equipTimeSeconds": 1,
                "reloadTimeSeconds": 2.5,
                "firstBulletAccuracy": 0.25,
                "shotgunPelletCount": 1,
                "wallPenetration": "Média",
                "feature": null,
                "fireMode": null,
                "altFireType": "EWeaponAltFireDisplayType::ADS",
                "adsStats": {
                  "zoomMultiplier": 1.25,
                  "fireRate": 8.775,
                  "runSpeedMultiplier": 0.76,
                  "burstCount": 1,
                  "firstBulletAccuracy": 0.157
                },
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 50,
                    "headDamage": 160,
                    "bodyDamage": 40,
                    "legDamage": 34
                  }
                ]
              },
        },
        {   
            "id": "14",
            "uuid": "c4883e50-4494-202c-3ec3-6b8a9284f00b",
            "displayName": "marshal",
            "type": "fuzis de precisão",
            "price": "950",
            "imageUri": require("../assets/weapons/marshal.png"),
            "weaponStats": {
                "altFire": "Zoom: 3,5x;Cadência de tiro: 90% (9.9 tiros/s);Velocidade de movimento: 90% (4.86 m/seg);Leve redução de dispersão de recuo.;A retícula segue o recuo.",
                "freatures": "",
                "fireRate": 1.5,
                "magazineSize": 5,
                "runSpeedMultiplier": 0.8,
                "equipTimeSeconds": 1.25,
                "reloadTimeSeconds": 2.5,
                "firstBulletAccuracy": 1,
                "shotgunPelletCount": 1,
                "wallPenetration": "Média",
                "feature": null,
                "fireMode": "EWeaponFireModeDisplayType::SemiAutomatic",
                "altFireType": "EWeaponAltFireDisplayType::ADS",
                "adsStats": {
                  "zoomMultiplier": 3.5,
                  "fireRate": 1.2,
                  "runSpeedMultiplier": 0.9,
                  "burstCount": 1,
                  "firstBulletAccuracy": 0
                },
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 50,
                    "headDamage": 202,
                    "bodyDamage": 101,
                    "legDamage": 85.850006
                  }
                ]
            },
        },
        {   
            "id": "15",
            "uuid": "a03b24d3-4319-996d-0f8c-94bbfba1dfc7",
            "displayName": "operator",
            "type": "fuzis de precisão",
            "imageUri": require("../assets/weapons/operator.png"),
            "weaponStats": {
                "altFire": "Zoom: 2,5x;Cadência de tiro: 125% (0,75 tiros/s);Velocidade de movimento: 76% (3,899 m/seg);Leve redução de dispersão de recuo.;A retícula segue o recuo.",
                "freatures": "Alterne entre 2,5x e 5,0x de zoom",
                "fireRate": 0.6,
                "magazineSize": 5,
                "runSpeedMultiplier": 0.76,
                "equipTimeSeconds": 1.5,
                "reloadTimeSeconds": 3.7,
                "firstBulletAccuracy": 5,
                "shotgunPelletCount": 1,
                "wallPenetration": "Alta",
                "feature": "EWeaponStatsFeature::DualZoom",
                "fireMode": "EWeaponFireModeDisplayType::SemiAutomatic",
                "altFireType": "EWeaponAltFireDisplayType::ADS",
                "adsStats": {
                  "zoomMultiplier": 2.5,
                  "fireRate": 0.75,
                  "runSpeedMultiplier": 0.76,
                  "burstCount": 1,
                  "firstBulletAccuracy": 0
                },
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 50,
                    "headDamage": 255,
                    "bodyDamage": 150,
                    "legDamage": 120
                  }
                ]
              },
        },
        {   
            "id": "16",
            "uuid": "55d8a0f4-4274-ca67-fe2c-06ab45efdf58",
            "displayName": "ares",
            "type": "metralhadoras",
            "price": "1600",
            "imageUri": require("../assets/weapons/ares.png"),
            "weaponStats": {
                "altFire": "Zoom: 1.15x;Cadência de tiro: 100% (10 tiros/s);Velocidade de movimento: 76% (3,899 m/seg);Leve redução de dispersão de recuo.;A retícula segue o recuo.",
                "freatures": "A cadência de tiro aumenta ao longo do tempo.",
                "fireRate": 10,
                "magazineSize": 50,
                "runSpeedMultiplier": 0.76,
                "equipTimeSeconds": 1.25,
                "reloadTimeSeconds": 3.25,
                "firstBulletAccuracy": 0.8,
                "shotgunPelletCount": 1,
                "wallPenetration": "Alta",
                "feature": "EWeaponStatsFeature::ROFIncrease",
                "fireMode": null,
                "altFireType": "EWeaponAltFireDisplayType::ADS",
                "adsStats": {
                  "zoomMultiplier": 1.15,
                  "fireRate": 10,
                  "runSpeedMultiplier": 0.76,
                  "burstCount": 1,
                  "firstBulletAccuracy": 0.67
                },
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 30,
                    "headDamage": 72,
                    "bodyDamage": 30,
                    "legDamage": 25.5
                  },
                  {
                    "rangeStartMeters": 30,
                    "rangeEndMeters": 50,
                    "headDamage": 67.200005,
                    "bodyDamage": 28,
                    "legDamage": 23.800001
                  }
                ]
              },
        },
        {   
            "id": "17",
            "uuid": "63e6c2b6-4a8e-869c-3d4c-e38355226584",
            "displayName": "odin",
            "type": "metralhadoras",
            "price": "3200",
            "imageUri": require("../assets/weapons/odin.png"),
            "weaponStats": {
                "altFire": "Zoom: 1.15x;Cadência de tiro: 130% (15,6 tiros/s);Velocidade de movimento: 76% (3,899 m/seg);Leve redução de dispersão de recuo.;A retícula segue o recuo.",
                "freatures": "A cadência de tiro aumenta ao longo do tempo.",
                "fireRate": 12,
                "magazineSize": 100,
                "runSpeedMultiplier": 0.76,
                "equipTimeSeconds": 1.25,
                "reloadTimeSeconds": 5,
                "firstBulletAccuracy": 0.8,
                "shotgunPelletCount": 1,
                "wallPenetration": "Alta",
                "feature": "EWeaponStatsFeature::ROFIncrease",
                "fireMode": null,
                "altFireType": "EWeaponAltFireDisplayType::ADS",
                "adsStats": {
                  "zoomMultiplier": 1.15,
                  "fireRate": 15.6,
                  "runSpeedMultiplier": 0.76,
                  "burstCount": 1,
                  "firstBulletAccuracy": 0.79
                },
                "altShotgunStats": null,
                "airBurstStats": null,
                "damageRanges": [
                  {
                    "rangeStartMeters": 0,
                    "rangeEndMeters": 30,
                    "headDamage": 95,
                    "bodyDamage": 38,
                    "legDamage": 32.3
                  },
                  {
                    "rangeStartMeters": 30,
                    "rangeEndMeters": 50,
                    "headDamage": 77.5,
                    "bodyDamage": 31,
                    "legDamage": 26.35
                  }
                ]
              },
        },
        {   
            "id": "1",
            "uuid": "2f59173c-4bed-b6c3-2191-dea9b58be9c7",
            "displayName": "faca tática",
            "type": "confronto",
            "price": "0",
            "imageUri": require("../assets/weapons/knife.png"),
            "weaponStats": null
        }
    ],

    "maps": [
      {
        "id": "07",
        "displayName": "Fracture",
        "imageUri": require("../assets/maps/fracture/fracture.png"),
        "imageMapUri": require("../assets/maps/fracture/fractureMap.png"),
        "description": "Um local de pesquisas altamente confidencial partido ao meio por um experimento com Radianita malsucedido. Com opções tão divididas quanto o próprio mapa para os defensores, a escolha é sua: encare os atacantes na própria base deles ou prepare o terreno para um ataque iminente.",
        "gallery": [
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1a720126e3713bba/6131bf518e16ab655b34901a/Fracture_Screenshot-8.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt371ab49354f8002f/6131bedf07866d6a2d823d2c/Fracture_Screenshot-1.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt077539ab4901aaf7/6131bf103ff46b267bdfaf8a/Fracture_Screenshot-2.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt82553061d7056a29/6131bf1c85514a6ee3fac85b/Fracture_Screenshot-3.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd8125668a17bf789/6131bf268e16ab655b349016/Fracture_Screenshot-4.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt559b3f202346778e/6131bf326768907ea9769a83/Fracture_Screenshot-5.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6632690fbfaae9a1/6131bf3a504fe365615e53c9/Fracture_Screenshot-6.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f78695e7d88d648/6131bf4507866d6a2d823d30/Fracture_Screenshot-7.jpg?auto=webp&width=915"
        ]
      },
      {
        "id": "06",
        "displayName": "Breeze",
        "imageUri": require("../assets/maps/breeze/breeze.png"),
        "imageMapUri": require("../assets/maps/breeze/breezeMap.png"),
        "description": "Conheça as ruínas históricas ou visite as grutas deste paraíso tropical. Mas é bom se cobrir, pois temos espaços muito abertos e embates de longa distância. Cuide dos seus flancos e você poderá curtir a brisa do Breeze.",
        "gallery": [
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltba64f41bce11904b/607f9e3bc661f15b3da77f85/breeze_1.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltde7c2fc29aa0d3a0/607f9e3ce650b13fbe2129d2/breeze_2.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt174b8512c8e4d6a5/607f9e3c03ce953dac7563e4/breeze_3.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt706ed4624cc5353d/607f9e3db35a7a3c69a373b8/breeze_5.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc1e8e8a2228fef3a/607f9e3e92f0063e5c0711cb/breeze_6.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt87534a4d10140c71/607f9e3f03ce953dac7563e8/breeze_8.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd323a27f0a9daa93/607f9e4012dc9d3c68356aca/breeze_10.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0463cfd3f61287d/607f9e4f1cac355a10f6bf96/breeze_12.jpg?auto=webp&width=915"

        ]
      },
      {
        "id": "05",
        "displayName": "Icebox",
        "imageUri": require("../assets/maps/icebox/icebox.png"),
        "imageMapUri": require("../assets/maps/icebox/iceboxMap.png"),
        "description": "Seu próximo campo de batalha será uma área de escavação secreta da Kingdom retomada pela força do Ártico. Você precisará ter cuidado com os terrenos horizontais dos dois pontos principais, que são protegidos por neve e metal. Aproveite para usar as tirolesas, e seus inimigos nunca verão seu ataque iminente.",
        "gallery": [
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9ef7b41910a14118/5f80debff6c586323f8b17a3/icebox_1.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6c01692b82ba6ace/5f80debe9245d74a2063d3c5/icebox_2.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta5558199bebb5107/5f80debfa50ed742e7fca4b9/icebox_3.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6c9b4fb24870f16d/5f80dec0f9d3bf27fac3a05f/icebox_4.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5e97ee30cae1b6b6/5f80dec04671ee30c689ca24/icebox_5.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd665c580a4b876c2/5f80debf271ecf4a1a642fe2/icebox_6.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3073fafdd0e84ca8/5f80dec03f52332642075f9b/icebox_7.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9e6c8e8f66a5fcad/5f80debface59e4b82915f48/icebox8.jpg?auto=webp&width=915",

        ]
      },
      {
        "id": "04",
        "displayName": "Bind",
        "imageUri": require("../assets/maps/bind/bind.png"),
        "imageMapUri": require("../assets/maps/bind/bindMap.png"),
        "description": "Dois pontos. Nenhuma área no meio. Você precisa escolher: direita ou esquerda? E aí, qual vai ser? Ambos os lados oferecem caminhos diretos para os atacantes, e dois teleportadores de sentido único facilitam o flanqueamento.",
        "gallery": [
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc54ad3a88d94a4d6/5eabe92eaf7e315106b4799b/bind1.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4d395d5eb0c5aeec/5eabe92d97c0a55d71b7fce5/bind2.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt275a73b80ff9eb5a/5eabe92db8a6356e4ddc0c92/bind3.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt81c2ff999b2e5887/5eabe92d08d37e6d82ef715a/bind4.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta6be60823002f711/5eabe92d4398082ffe23fdb5/bind5.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta7ba841d52448022/5eabe92e2b79652f27c326c4/bind6.jpg?auto=webp&width=915",

        ]
      },
      {
        "id": "03",
        "displayName": "Haven",
        "imageUri": require("../assets/maps/haven/haven.png"),
        "imageMapUri": require("../assets/maps/haven/havenMap.png"),
        "description": "Sob um mosteiro abandonado, é possível ouvir agentes se enfrentando pelo controle de três pontos distintos. Neste mapa, há mais áreas para controlar. Em compensação, os defensores também conseguem aproveitar o território extra para coordenar investidas mais agressivas.",
        "gallery": [
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7df0b99a582cc5aa/5eabe987b8a6356e4ddc0ca4/haven1.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt65a4029cdfaf77b4/5eabe9861b51e36d7c1b67ab/haven2.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2bd976c100216469/5eabe98608d37e6d82ef7160/haven3.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt768f194cd2c52f84/5eabe9862b79652f27c326ca/haven4.jpg?auto=webp&width=915",

        ]
      },
      {
        "id": "02",
        "displayName": "Split",
        "imageUri": require("../assets/maps/split/split.png"),
        "imageMapUri": require("../assets/maps/split/splitMap.png"),
        "description": "Se quiser avançar, é preciso subir. Separados por uma área central elevada, dois pontos fornecem movimentação rápida com duas cordas ascendentes. Cada ponto tem uma torre imponente que é vital para o controle da área. E não se esqueça: mantenha os olhos abertos e focados nas áreas elevadas antes que tudo vá pelos ares.",
        "gallery": [
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt643d33e2defb855c/5eabe9fe248a28605479c547/split1.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8114d8ae57703cf8/5ed81946bf4ae52c761ec8e8/split2-2.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltdfd43bd79d9b3410/5eabe9fea20afe612d82f833/split3.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf7a4f75409f2dbc1/5ed81936047b8c2b9c25fe74/split4-2.jpg?auto=webp&width=915",

        ]
      },
      {
        "id": "01",
        "displayName": "Ascent",
        "imageUri": require("../assets/maps/ascent/ascent.png"),
        "imageMapUri": require("../assets/maps/ascent/ascentMap.png"),
        "description": "Com várias opções de posicionamento e conflito, um território aberto divide duas áreas em Ascent. Cada uma pode ser fortificada por portas explosivas irreversíveis que, quando derrubadas, forçam as equipes a destruí-las ou a acharem outra maneira de prosseguir. Não deixe que o inimigo tome o seu território.",
        "gallery": [
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt930666d9ab927326/5eabe9c45751b2150e57a42c/ascent1.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9e24fe356d0faf81/5eabe9c497c0a55d71b7fceb/ascent2.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt77e465b8079103af/5eabe9c4af7e315106b479a1/ascent3.jpg?auto=webp&width=915",
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta7375f4e704347dc/5eabe9c4b8a6356e4ddc0caa/ascent4.jpg?auto=webp&width=915",

        ]
      }
    ]
}
// Base de dados do Oddly Niche
// Todas as referências foram escolhidas para darem bons resultados no Google Imagens e no Pinterest.
// Podes juntar novas ideias em qualquer lista seguindo o mesmo formato.

const DADOS_DESIGN = {
  formatos: [
    // Print e Gráfico
    { nome: "Poster A3", disciplina: "print", etiqueta: "Print" },
    { nome: "Capa de vinil com alinhamento", disciplina: "print", etiqueta: "Print" },
    { nome: "Zine dobrada de 8 páginas", disciplina: "print", etiqueta: "Print" },
    { nome: "Bilhete de comboio colecionável", disciplina: "print", etiqueta: "Print" },
    { nome: "Menu de restaurante de estrada", disciplina: "print", etiqueta: "Print" },
    { nome: "Cartão de sócio de clube secreto", disciplina: "print", etiqueta: "Print" },
    { nome: "Capa de livro de bolso", disciplina: "print", etiqueta: "Print" },
    { nome: "Manual de instruções desdobrável", disciplina: "print", etiqueta: "Print" },
    { nome: "Cartão de embarque espacial", disciplina: "print", etiqueta: "Print" },
    { nome: "Conjunto de 6 autocolantes", disciplina: "print", etiqueta: "Print" },
    { nome: "Sinalética de espaço cultural", disciplina: "print", etiqueta: "Print" },
    { nome: "Folha de selos postais", disciplina: "print", etiqueta: "Print" },
    { nome: "Postal ilustrado frente e verso", disciplina: "print", etiqueta: "Print" },
    { nome: "Programa desdobrável de festival", disciplina: "print", etiqueta: "Print" },
    { nome: "Jornal tabloide de 4 páginas", disciplina: "print", etiqueta: "Print" },
    { nome: "Calendário de parede experimental", disciplina: "print", etiqueta: "Print" },
    { nome: "Marcador de livro colecionável", disciplina: "print", etiqueta: "Print" },
    { nome: "Capa de revista independente", disciplina: "print", etiqueta: "Print" },
    { nome: "Cartão de visita frente e verso", disciplina: "print", etiqueta: "Print" },
    { nome: "Mapa dobrável de bairro", disciplina: "print", etiqueta: "Print" },
    { nome: "Ingresso de cinema antigo", disciplina: "print", etiqueta: "Print" },
    { nome: "Folheto de exposição de arte", disciplina: "print", etiqueta: "Print" },
    { nome: "Cartaz tipográfico de concerto", disciplina: "print", etiqueta: "Print" },
    { nome: "Capa de caderno de apontamentos", disciplina: "print", etiqueta: "Print" },
    { nome: "Certificado ou diploma retro", disciplina: "print", etiqueta: "Print" },
    { nome: "Baralho de cartas ilustrado", disciplina: "print", etiqueta: "Print" },

    // Motion e Vídeo
    { nome: "Loop de animação de 5 segundos", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Genérico inicial de filme", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Poster animado em formato vertical", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Vídeo de tipografia cinética", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Separador curto de canal de TV", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Animação de entrada de logótipo", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Visualizador de música em loop", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Transição experimental de vídeo", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Créditos finais animados", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Ecrã animado de espera de concerto", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Micro animação de ícone ou mascote", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Teaser curto para redes sociais", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Capa de álbum animada", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Vinheta de abertura de podcast", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Animação de contagem decrescente", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Lower third para documentário", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Loop de padrão geométrico", disciplina: "motion", etiqueta: "Motion" },
    { nome: "Ecrã de descanso animado", disciplina: "motion", etiqueta: "Motion" },

    // Digital e Interfaces
    { nome: "Ecrã de carregamento criativo", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Interface de sintetizador virtual", disciplina: "digital", etiqueta: "Digital" },
    { nome: "App de meteorologia experimental", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Menu principal de videojogo indie", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Secção inicial de website", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Newsletter editorial interativa", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Página de erro 404 memorável", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Leitor de música minimalista", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Relógio digital de secretária", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Calculadora retro interativa", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Ecrã de máquina de venda automática", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Sistema de ícones de computador", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Widget de calendário para telemóvel", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Ecrã de login fora do comum", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Painel de controlo de nave espacial", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Interface de rádio online", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Página de produto experimental", disciplina: "digital", etiqueta: "Digital" },
    { nome: "Guia de estilo digital interativo", disciplina: "digital", etiqueta: "Digital" },

    // Embalagem e Objeto
    { nome: "Capa de cassete áudio", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Rótulo de garrafa artesanal", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Caixa de chá ou infusão", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Embalagem de sabonete sólido", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Lata de conserva gourmet", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Caixa de fósforos colecionável", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Saco de café em grão", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Caixinha de rolo fotográfico", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Embalagem de incenso botânico", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Caixa de pastilhas metálica", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Embalagem de gelado artesanal", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Capa de disquete de arquivo", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Embalagem de chocolate artesanal", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Rótulo de vela aromática", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Lata de refrigerante experimental", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Caixa de cereais retro", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Saco de pano estampado", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Embalagem de azeite de edição limitada", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Tubo de creme de mãos", disciplina: "packaging", etiqueta: "Objeto" },
    { nome: "Caixa de puzzles de 500 peças", disciplina: "packaging", etiqueta: "Objeto" }
  ],

  temas: [
    "Festival de eletrónica num bunker",
    "Água engarrafada vinda de Marte",
    "Documentário sobre pombos urbanos",
    "Museu de tecnologia obsoleta",
    "Clube de leitura de terror dos anos 80",
    "Lavandaria aberta 24 horas em Tóquio",
    "Agência barata de viagens no tempo",
    "Padaria brutalista de fermentação lenta",
    "Oficina de reparação de sintetizadores",
    "Loja de plantas carnívoras raras",
    "Rádio pirata subaquática",
    "Hotel cápsula perdido no deserto",
    "Café descafeinado para notívagos",
    "Cinema ao ar livre abandonado",
    "Cooperativa de apicultura urbana",
    "Clube de xadrez subterrâneo",
    "Farmácia botânica futurista",
    "Entregas por drone em aldeias remotas",
    "Bicicletas dobráveis de titânio",
    "Arquivo nacional de sonhos",
    "Mercearia noturna de comida picante",
    "Observatório astronómico amador",
    "Festival de filmes gravados em VHS",
    "Guarda chuvas à prova de furacão",
    "Restaurante só de sopas de madrugada",
    "Serviço postal por pombo correio",
    "Bar de discos de vinil numa garagem",
    "Guia turístico de cidades imaginárias",
    "Meias térmicas para o Ártico",
    "Exposição sobre erros de impressão",
    "Ginásio retro sem espelhos",
    "Fábrica de gelo cristalino artesanal",
    "Podcast sobre arquitetura brutalista",
    "Loja de cassetes gravadas à mão",
    "Estação de serviço na lua",
    "Escola de condução de submarinos",
    "Restaurante vegetariano num farol",
    "Clube de colecionadores de pedras",
    "Marca de manteiga com algas marinhas",
    "Biblioteca ambulante num elétrico",
    "Festival de música ambiente em grutas",
    "Marca de cadernos à prova de água",
    "Oficina de restauro de letreiros néon",
    "Pastelaria especializada em pão de ló",
    "Clube de natação de inverno no Atlântico",
    "Editora independente de mapas falsos",
    "Loja de guarda fatos de ficção científica",
    "Marca de azeite colhido à noite",
    "Simpósio internacional de nuvens",
    "Oficina de bicicletas elétricas de carga",
    "Feira anual de máquinas de escrever",
    "Hotel de montanha sem acesso à internet",
    "Marca de refrigerantes de ervas silvestres",
    "Arquivo sonoro de comboios antigos",
    "Piscina termal construída numa antiga fábrica",
    "Loja de guarda sóis para cidades chuvosas",
    "Museu de embalagens dos anos 70",
    "Clube de fotografia analógica noturna",
    "Café servido apenas em copos de cerâmica",
    "Festival de animação em stop motion",
    "Oficina de construção de papagaios de papel",
    "Marca de molho picante fermentado",
    "Escola de cerâmica experimental",
    "Cinema especializado em ficção científica",
    "Loja de discos só de bandas sonoras",
    "Serviço de aluguer de câmaras antigas",
    "Exposição de robôs domésticos antigos",
    "Marca de sabonetes feitos com café",
    "Clube de caminhada ao amanhecer",
    "Restaurante de ramen dentro de um contentor",
    "Estúdio de gravação alimentado a energia solar",
    "Marca de mochilas feitas com velas de barco",
    "Feira de livros de arquitetura esquecidos",
    "Pista de bowling retro aberta toda a noite",
    "Marca de chá colhido em ilhas vulcânicas",
    "Oficina de impressão tipográfica manual",
    "Laboratório de perfumes inspirados na chuva",
    "Clube de observação de aves marinhas",
    "Marca de chocolates com sal marinho",
    "Festival de jazz num jardim botânico"
  ],

  estilos: [
    { nome: "Cassette Futurism", descricao: "Ficção científica dos anos 70 e 80 com ecrãs antigos, plásticos bege, botões táteis e letras técnicas." },
    { nome: "Frutiger Aero", descricao: "Otimismo visual dos anos 2000 com vidro translúcido, gotas de água, brilhos suaves e natureza vibrante." },
    { nome: "Acid Graphics", descricao: "Tipografia torcida, metais líquidos, grelhas quebradas e contrastes fortes com energia psicadélica." },
    { nome: "Swiss Style", descricao: "Grelhas muito certinhas, tipografia sem serifa limpa, assimetria equilibrada e foco total na clareza." },
    { nome: "Risograph", descricao: "Aspeto de impressão a tinta vegetal, retículas bem visíveis, sobreposição de cores e pequenos desvios." },
    { nome: "Cyber Sigilism", descricao: "Linhas muito finas, orgânicas e afiadas, com um ar futurista metálico ou quase etéreo." },
    { nome: "Teletext", descricao: "Blocos de baixa resolução, letras pixeladas presas a uma grelha fixa como nas televisões antigas." },
    { nome: "Deconstructivism", descricao: "Letras fragmentadas dos anos 90, camadas sobrepostas e quebra intencional das regras de leitura." },
    { nome: "Ukiyo e", descricao: "Contornos expressivos, perspetiva plana e composições inspiradas na gravura japonesa clássica." },
    { nome: "Gorpcore", descricao: "Estética técnica de montanha, etiquetas de especificações, curvas topográficas e aspeto utilitário." },
    { nome: "Maximalism", descricao: "Mistura rica de texturas, padrões, recortes e camadas onde o excesso visual é a estrela." },
    { nome: "Bauhaus", descricao: "Formas geométricas primárias rigorosas, equilíbrio funcional e cores puras bem estruturadas." },
    { nome: "Japanese Packaging", descricao: "Embalagens ricas em informação útil, ícones precisos, caixas arrumadas e charme prático." },
    { nome: "Azulejaria Portuguesa", descricao: "Padrões repetitivos, molduras clássicas, cerâmica vidrada e forte tradição ornamental." },
    { nome: "Anti Design", descricao: "Aspeto propositadamente cru, fontes básicas de sistema, linhas diretas e zero polimento corporativo." },
    { nome: "Vaporwave", descricao: "Nostalgia surreal dos anos 90, estátuas clássicas, grelhas em perspetiva e ironia digital." },
    { nome: "Y2K Aesthetic", descricao: "Superfícies metálicas espelhadas, formas aerodinâmicas, estrelas de quatro pontas e energia 2000." },
    { nome: "Constructivism", descricao: "Composições diagonais cheias de força, fotomontagem dramática e blocos geométricos marcantes." },
    { nome: "Memphis Design", descricao: "Padrões geométricos irreverentes dos anos 80, formas divertidas e composições cheias de energia." },
    { nome: "Pixel Art", descricao: "Desenho construído pixel a pixel, tramas de pontos clássicas e grande rigor visual." },
    { nome: "Punk Zine", descricao: "Alto contraste de fotocópia, grão pesado, colagens feitas à mão, fita cola e letras recortadas." },
    { nome: "Art Deco", descricao: "Simetria monumental, linhas verticais metálicas e geometria elegante de inspiração arquitetónica." },
    { nome: "Op Art", descricao: "Padrões repetitivos que enganam o olhar e criam sensação de movimento, vibração e profundidade." },
    { nome: "Blueprint", descricao: "Aspeto de planta de engenharia com cotas, linhas tracejadas, diagramas explodidos e anotações." },
    { nome: "Dada Collage", descricao: "Mistura absurda de fotografias antigas, gravuras de enciclopédia e tipografia desalinhada." },
    { nome: "Wabi Sabi", descricao: "Beleza na imperfeição, bastante espaço livre, texturas naturais de papel e calma na composição." },
    { nome: "Art Nouveau", descricao: "Letras fluidas, linhas orgânicas sinuosas, motivos florais estilizados e molduras ornamentadas." },
    { nome: "Scandinavian Minimalism", descricao: "Espaço em branco generoso, precisão tipográfica silenciosa e um ar arquitetónico muito limpo." },
    { nome: "Mid Century Modern", descricao: "Ilustração vetorial simplificada, formas orgânicas retro e o charme gráfico dos anos 50 e 60." },
    { nome: "Glitch Art", descricao: "Erros digitais assumidos, canais de cor deslocados e aspeto de ficheiro corrompido." },
    { nome: "Vintage Cartography", descricao: "Linhas finas de gravação, rosas dos ventos, legendas clássicas e tipografia com serifa elegante." },
    { nome: "Aviation Safety Card", descricao: "Diagramas de segurança simples, setas diretas, códigos numéricos e leitura imediata." },
    { nome: "Linocut", descricao: "Traços talhados com imperfeição manual, manchas sólidas de tinta e forte textura artesanal." },
    { nome: "Solarpunk", descricao: "Fusão entre natureza exuberante, energia limpa, curvas orgânicas e tecnologia otimista." },
    { nome: "1972 Munich Olympics", descricao: "Pictogramas geométricos ultra limpos, faixas paralelas e sistemas modulares impecáveis." },
    { nome: "Thermal Receipt", descricao: "Tipografia monoespaçada estreita, listas alinhadas, códigos de barras e aspeto de talão." },
    { nome: "Film Noir", descricao: "Sombras duras, dramaticidade, grão de película fotográfica e tipografia cheia de mistério." },
    { nome: "Nordic Folk Art", descricao: "Motivos naturais estilizados, simetria de tapeçaria e formas simples com muito calor humano." },
    { nome: "Pop Art", descricao: "Cores saturadas, tramas de banda desenhada, contornos grossos e objetos do quotidiano em destaque." },
    { nome: "Psychedelic 60s", descricao: "Tipografia derretida que ocupa todo o cartaz, contrastes vibrantes e curvas hipnóticas." },
    { nome: "Ligne Claire", descricao: "Traço de contorno uniforme sem sombras pesadas, cores planas e enorme clareza narrativa." },
    { nome: "Botanical Illustration", descricao: "Desenho detalhado de plantas, legendas em latim e composição digna de enciclopédia natural." },
    { nome: "Cyanotype", descricao: "Impressão fotográfica artesanal em azul da Prússia com silhuetas delicadas e contraste branco." },
    { nome: "Letterpress", descricao: "Tipografia marcada em baixo relevo sobre papel espesso, com tinta texturada e muito caráter." },
    { nome: "Screenprint", descricao: "Camadas sólidas de tinta serigráfica, poucas cores bem planeadas e acabamento gráfico direto." },
    { nome: "Brutalism", descricao: "Blocos pesados, tipografia crua, bordas visíveis e ausência total de decoração desnecessária." },
    { nome: "Neubrutalism", descricao: "Sombras duras sem esbatimento, contornos pretos grossos e cores vibrantes sobre fundos claros." },
    { nome: "Skeuomorphism", descricao: "Texturas que imitam materiais reais como couro, metal escovado, vidro e botões físicos." },
    { nome: "Glassmorphism", descricao: "Painéis translúcidos com desfoque suave, bordas finas luminosas e camadas flutuantes." },
    { nome: "Isometric Design", descricao: "Perspetiva técnica sem ponto de fuga que transforma cenas complexas em miniaturas geométricas." },
    { nome: "ASCII Art", descricao: "Imagens e padrões construídos apenas com caracteres de texto, símbolos e tipografia monoespaçada." },
    { nome: "Low Poly", descricao: "Superfícies facetadas feitas de triângulos geométricos que criam volume com simplicidade." },
    { nome: "Showa Retro", descricao: "Gráfica japonesa nostálgica do século passado com letreiros desenhados à mão e charme vintage." },
    { nome: "Heisei Retro", descricao: "Estética pop japonesa dos anos 90 e 2000 com cores doces, autocolantes e interfaces divertidas." },
    { nome: "Frutiger Metro", descricao: "Vetores dinâmicos dos anos 2000 com formas fluidas, silhuetas, setas e explosões de cor." },
    { nome: "Googie Architecture", descricao: "Otimismo espacial dos anos 50 com bumerangues, estrelas atómicas e letreiros inclinados." },
    { nome: "Streamline Moderne", descricao: "Linhas aerodinâmicas horizontais, cantos arredondados e velocidade inspirada nos anos 30." },
    { nome: "Grunge 90s", descricao: "Texturas gastas, papel amarrotado, tipografia suja e energia rebelde de revista alternativa." },
    { nome: "Stained Glass", descricao: "Formas divididas por linhas escuras grossas e blocos de cor luminosa como num vitral." },
    { nome: "Kinetic Typography", descricao: "Palavras com ritmo, repetição e distorção que transmitem movimento mesmo em imagem fixa." },
    { nome: "Supergraphics", descricao: "Formas geométricas e letras gigantescas que atravessam todo o formato sem medo de cortar." },
    { nome: "Dithering 1 bit", descricao: "Tramas de pontos em alto contraste inspiradas nos primeiros ecrãs monocromáticos." },
    { nome: "Halftone Print", descricao: "Pontos de retícula ampliados que dão textura de jornal antigo e impressão mecânica." },
    { nome: "Dark Academia", descricao: "Estética clássica de biblioteca antiga, serifas literárias, papel envelhecido e tom sóbrio." },
    { nome: "Liminal Space", descricao: "Ambientes vazios, luz fluorescente estranha, silêncio visual e nostalgia inquietante." }
  ],

  objetosCor: [
    {
      nome: "Glass Gem Corn",
      pesquisa: "Glass Gem Corn",
      ambiente: "Tons translúcidos e brilhantes que parecem pequenas pedras preciosas.",
      cores: ["#D9A441", "#C45B4D", "#6C8E7A", "#4A5A82", "#E8DEC8"]
    },
    {
      nome: "Game Boy DMG",
      pesquisa: "Game Boy DMG",
      ambiente: "Plástico cinzento bege, ecrã verde azeitona e botões magenta.",
      cores: ["#8BAC0F", "#306230", "#D3CFC2", "#8E2955", "#2B2C28"]
    },
    {
      nome: "Azulejo Português",
      pesquisa: "Portuguese azulejo tile",
      ambiente: "Cerâmica vidrada, azul cobalto profundo, ocre quente e branco clássico.",
      cores: ["#1B4D89", "#E9E4D8", "#D99B26", "#4F7CAC", "#2C2A29"]
    },
    {
      nome: "Tamagotchi",
      pesquisa: "Tamagotchi 1997",
      ambiente: "Plástico colorido transparente, botões amarelos e ecrã cinzento.",
      cores: ["#FF5E8E", "#FFD23F", "#3BCEAC", "#9BA89E", "#262322"]
    },
    {
      nome: "Kodak FunSaver",
      pesquisa: "Kodak FunSaver camera",
      ambiente: "Amarelo fotográfico intenso, preto mate e pequenos toques vermelhos.",
      cores: ["#F4C400", "#181818", "#D62828", "#F1EFEA", "#5C5C5C"]
    },
    {
      nome: "Olivetti Valentine",
      pesquisa: "Olivetti Valentine typewriter",
      ambiente: "Plástico vermelho icónico, teclas pretas e detalhes cor de laranja.",
      cores: ["#D62229", "#1C1C1C", "#F26419", "#E8E6E1", "#6D6A65"]
    },
    {
      nome: "Cartucho Nintendo 64",
      pesquisa: "Nintendo 64 cartridge",
      ambiente: "Cinzento industrial fosco com autocolantes de cores primárias.",
      cores: ["#8D9093", "#D92323", "#1F5AA6", "#F2C12E", "#238C47"]
    },
    {
      nome: "Fujifilm Superia",
      pesquisa: "Fujifilm Superia box",
      ambiente: "Verde esmeralda marcante, branco técnico e detalhes vermelhos.",
      cores: ["#008B45", "#F7F7F5", "#E31E24", "#1A1A1A", "#A8D5BA"]
    },
    {
      nome: "Tapete Aeroporto PDX",
      pesquisa: "PDX airport carpet",
      ambiente: "Padrão geométrico famoso em verde azulado profundo com magenta.",
      cores: ["#1B6B63", "#0E3B43", "#C83E76", "#D9A036", "#5D576B"]
    },
    {
      nome: "Bilhete Metro de Paris",
      pesquisa: "Paris metro ticket",
      ambiente: "Cartolina fina creme, banda castanha e apontamento violeta e verde.",
      cores: ["#F4F1EA", "#6C3B7E", "#4E3629", "#009B77", "#D9D2C5"]
    },
    {
      nome: "Lata de Sardinhas",
      pesquisa: "Portuguese sardine tin",
      ambiente: "Metal litografado, azul marinho, dourado e vermelho cheio de vida.",
      cores: ["#C83E37", "#1E3A5F", "#E6B84C", "#F6F0E0", "#2A7B76"]
    },
    {
      nome: "Selo Espacial Soviético",
      pesquisa: "Soviet space stamp",
      ambiente: "Impressão antiga em azul petróleo, vermelho óxido e papel creme.",
      cores: ["#B83A2D", "#1E4E68", "#E9DFC8", "#D49B38", "#222428"]
    },
    {
      nome: "Cadeira Insuflável 90s",
      pesquisa: "90s inflatable chair",
      ambiente: "Plástico brilhante em cores néon transparentes cheias de reflexos.",
      cores: ["#FF4D94", "#70D6FF", "#E9FF70", "#9B5DE5", "#FFFFFF"]
    },
    {
      nome: "Bola de Bowling",
      pesquisa: "Marbled bowling ball",
      ambiente: "Resina polida com remoinhos profundos de cor e brilho vítreo.",
      cores: ["#2D1E4F", "#C84B31", "#ECDBBA", "#1B4965", "#141418"]
    },
    {
      nome: "Gelado Perna de Pau",
      pesquisa: "Perna de Pau ice cream",
      ambiente: "Rosa morango suave, baunilha cremosa, chocolate e pau de madeira.",
      cores: ["#F497A9", "#FFF3D6", "#5C3A21", "#D9A773", "#E63946"]
    },
    {
      nome: "Licor Beirão",
      pesquisa: "Licor Beirao bottle",
      ambiente: "Vidro âmbar escuro, rótulo creme clássico e vermelho vinho.",
      cores: ["#C86D1F", "#6B1D1D", "#F2E6C9", "#2F4838", "#3B2314"]
    },
    {
      nome: "Sapo Dardo Azul",
      pesquisa: "Blue poison dart frog",
      ambiente: "Saturação natural extrema em azul elétrico, preto e amarelo vivo.",
      cores: ["#0050E6", "#111114", "#FFE600", "#00B4D8", "#3A0CA3"]
    },
    {
      nome: "Fisher Price Telephone",
      pesquisa: "Fisher Price Chatter Telephone",
      ambiente: "Madeira pintada e plástico de cores primárias alegres.",
      cores: ["#E63946", "#F4C430", "#2A9D8F", "#F7F5EE", "#1D3557"]
    },
    {
      nome: "Wonder Bread",
      pesquisa: "Wonder Bread packaging",
      ambiente: "Fundo branco limpo com círculos vermelhos, azuis e amarelos.",
      cores: ["#FAF9F5", "#E52521", "#0066B3", "#FFD100", "#D9B382"]
    },
    {
      nome: "Cassete TDK D90",
      pesquisa: "TDK D90 cassette",
      ambiente: "Plástico fumado escuro, etiqueta branca limpa e detalhes vermelhos.",
      cores: ["#222225", "#ECEBE4", "#D93829", "#9A9B9F", "#F2A900"]
    },
    {
      nome: "Elétrico 28 de Lisboa",
      pesquisa: "Lisbon tram 28",
      ambiente: "Amarelo vivo, madeira envernizada quente e cinzento de calçada.",
      cores: ["#F2B705", "#733A19", "#F5F2EB", "#4F5459", "#B82925"]
    },
    {
      nome: "Pastilhas Gorila",
      pesquisa: "Pastilhas Gorila",
      ambiente: "Embalagem nostálgica com tons vibrantes de fruta e papel encerado.",
      cores: ["#E84A5F", "#F9C74F", "#2D6A4F", "#FFF8E7", "#22223B"]
    },
    {
      nome: "Lâmpada de Lava",
      pesquisa: "Lava lamp purple orange",
      ambiente: "Cera brilhante em movimento dentro de líquido roxo iluminado.",
      cores: ["#3C096C", "#FF6D00", "#FF9E00", "#9D4EDD", "#10002B"]
    },
    {
      nome: "Pena de Pavão",
      pesquisa: "Peacock feather",
      ambiente: "Azul iridescente, verde esmeralda profundo e reflexos de bronze.",
      cores: ["#005F73", "#0A9396", "#CA6702", "#1B4332", "#94D2BD"]
    },
    {
      nome: "iMac G3 Bondi Blue",
      pesquisa: "iMac G3 Bondi Blue",
      ambiente: "Plástico translúcido azul turquesa com branco leitoso e cinzento.",
      cores: ["#008B99", "#72C6CC", "#F2F4F3", "#BFC7C9", "#1E292B"]
    },
    {
      nome: "Polaroid SX 70",
      pesquisa: "Polaroid SX-70",
      ambiente: "Cromado escovado, pele castanha caramelo e lista arco íris discreta.",
      cores: ["#A96A3B", "#C9CED1", "#222224", "#E63946", "#2A9D8F"]
    },
    {
      nome: "Sony Walkman TPS L2",
      pesquisa: "Sony Walkman TPS-L2",
      ambiente: "Azul metálico clássico, prateado frio e botão laranja quente.",
      cores: ["#2B4C7E", "#C4C9CE", "#F26419", "#1C232B", "#E8ECEF"]
    },
    {
      nome: "Cubo de Rubik",
      pesquisa: "Rubik's Cube",
      ambiente: "Plástico preto com quadrados sólidos primários de alto contraste.",
      cores: ["#D90429", "#00509D", "#FFD60A", "#2B9348", "#161618"]
    },
    {
      nome: "Saco IKEA Frakta",
      pesquisa: "IKEA Frakta bag",
      ambiente: "Polipropileno azul intenso com alças amarelas e reflexo de plástico.",
      cores: ["#0051BA", "#FFDA1A", "#003B8E", "#E6F0FA", "#1B1B1E"]
    },
    {
      nome: "Canivete Suíço",
      pesquisa: "Swiss Army knife",
      ambiente: "Vermelho brilhante icónico, aço inox polido e cruz branca.",
      cores: ["#C8102E", "#D4D7DC", "#FFFFFF", "#7B828A", "#1E1F22"]
    },
    {
      nome: "Cartas UNO",
      pesquisa: "UNO cards",
      ambiente: "Quatro cores vivas bem separadas sobre fundo preto e oval branco.",
      cores: ["#E52521", "#0066B3", "#39A935", "#FFCD00", "#111111"]
    },
    {
      nome: "Lata Sopa Campbell",
      pesquisa: "Campbell's soup can",
      ambiente: "Vermelho clássico, branco papel, medalhão dourado e preto tipográfico.",
      cores: ["#C8102E", "#F8F7F4", "#C9A227", "#1C1C1C", "#8C0B20"]
    },
    {
      nome: "Garrafa Tabasco",
      pesquisa: "Tabasco bottle",
      ambiente: "Molho vermelho intenso, tampa verde viva e rótulo losango creme.",
      cores: ["#C1121F", "#1B8A5A", "#F4EFE6", "#780000", "#1A1A1A"]
    },
    {
      nome: "Molho Sriracha",
      pesquisa: "Sriracha bottle",
      ambiente: "Vermelho alaranjado vibrante com tampa verde e grafismo branco.",
      cores: ["#D62828", "#2B9348", "#FFFFFF", "#9D0208", "#F77F00"]
    },
    {
      nome: "Casio F91W",
      pesquisa: "Casio F-91W",
      ambiente: "Resina preta mate, ecrã LCD cinzento claro e linhas azuis e amarelas.",
      cores: ["#1B1C1E", "#B8C2B9", "#0066B3", "#E9C46A", "#D62828"]
    },
    {
      nome: "Nokia 3310",
      pesquisa: "Nokia 3310",
      ambiente: "Azul escuro ardosia, moldura cinzenta e ecrã verde iluminado.",
      cores: ["#2C3545", "#C4C9D0", "#8CB369", "#1B2028", "#E5E8EC"]
    },
    {
      nome: "iPod Classic",
      pesquisa: "iPod Classic",
      ambiente: "Branco acrílico polido, roda cinzenta suave e ecrã azulado frio.",
      cores: ["#F7F8FA", "#D0D4D9", "#7D95B3", "#4A5568", "#A0AEC0"]
    },
    {
      nome: "GameCube Indigo",
      pesquisa: "Nintendo GameCube Indigo",
      ambiente: "Roxo índigo característico com botões verde, vermelho e cinzento.",
      cores: ["#4B4791", "#2B285C", "#00A878", "#E63946", "#B8BCC2"]
    },
    {
      nome: "PlayStation 1",
      pesquisa: "PlayStation 1 console",
      ambiente: "Cinzento claro dos anos 90 com símbolos verde, azul, rosa e vermelho.",
      cores: ["#B8BABD", "#7C7F84", "#00A896", "#E63946", "#3A86FF"]
    },
    {
      nome: "Atari 2600",
      pesquisa: "Atari 2600",
      ambiente: "Plástico preto estriado, painel de madeira quente e detalhes laranja.",
      cores: ["#1B1B1D", "#8C522B", "#E85D04", "#D4D4D4", "#5C3317"]
    },
    {
      nome: "Macintosh 128K",
      pesquisa: "Macintosh 128K",
      ambiente: "Bege clássico de escritório, ecrã escuro e pequeno logótipo colorido.",
      cores: ["#D6CFC0", "#A8A090", "#2B2D2F", "#61BB46", "#E03A3E"]
    },
    {
      nome: "Táxi Amarelo NYC",
      pesquisa: "NYC yellow cab",
      ambiente: "Amarelo táxi vibrante, xadrez preto e branco e cinzento de asfalto.",
      cores: ["#F7B801", "#141416", "#F8F9FA", "#6C757D", "#D62828"]
    },
    {
      nome: "Metro de Londres",
      pesquisa: "London Underground sign",
      ambiente: "Vermelho sinalético, azul marinho profundo e branco muito limpo.",
      cores: ["#DC241F", "#0019A8", "#FFFFFF", "#1C1C1E", "#FFD329"]
    },
    {
      nome: "Cabine Telefónica UK",
      pesquisa: "Red telephone box UK",
      ambiente: "Ferro pintado em vermelho vivo, vidro claro e coroa dourada.",
      cores: ["#C8102E", "#8A0A1E", "#E6E9EC", "#D4AF37", "#1F2428"]
    },
    {
      nome: "Autocarro Escolar EUA",
      pesquisa: "American school bus",
      ambiente: "Amarelo alaranjado inconfundível, faixas pretas e aço cromado.",
      cores: ["#F4A200", "#18181A", "#C9CED4", "#D62828", "#F7F7F5"]
    },
    {
      nome: "Cone de Trânsito",
      pesquisa: "Orange traffic cone",
      ambiente: "Laranja fluorescente industrial, faixas refletoras brancas e base preta.",
      cores: ["#FF5400", "#FFFFFF", "#212529", "#CC4400", "#ADB5BD"]
    },
    {
      nome: "Cafeteira Bialetti Moka",
      pesquisa: "Bialetti Moka Express",
      ambiente: "Alumínio polido octogonal, pega preta em baquelite e café escuro.",
      cores: ["#CED4DA", "#8D99AE", "#1B1B1D", "#4A2C1D", "#F8F9FA"]
    },
    {
      nome: "Batedeira KitchenAid",
      pesquisa: "Mint KitchenAid mixer",
      ambiente: "Verde pistácio pastel, taça de inox espelhado e detalhes cromados.",
      cores: ["#A8DADC", "#E6EEF0", "#8D99AE", "#2B2D42", "#F1FAEE"]
    },
    {
      nome: "Vespa Vintage",
      pesquisa: "Vintage mint Vespa",
      ambiente: "Verde água retro, assento em pele castanha e jantes cromadas.",
      cores: ["#88C9BF", "#7F4F24", "#E5E8E8", "#2B2D2F", "#C1121F"]
    },
    {
      nome: "Mochila Fjallraven Kanken",
      pesquisa: "Fjallraven Kanken yellow",
      ambiente: "Tecido mate amarelo ocre com emblema vermelho e branco.",
      cores: ["#E0A82E", "#B8841B", "#D62828", "#F8F7F4", "#2B2B2B"]
    },
    {
      nome: "Nike Air Max 90",
      pesquisa: "Nike Air Max 90 Infrared",
      ambiente: "Branco malha, cinzento claro, preto e vermelho infravermelho.",
      cores: ["#F8F9FA", "#B8BEC6", "#1A1A1D", "#FF2A4B", "#6C757D"]
    },
    {
      nome: "Caneta Bic Cristal",
      pesquisa: "Bic Cristal pen",
      ambiente: "Plástico transparente, tinta azul royal e corpo amarelo clássico.",
      cores: ["#004AAD", "#F4C430", "#E9EEF2", "#1B263B", "#FFFFFF"]
    },
    {
      nome: "Lápis de Cera Crayola",
      pesquisa: "Crayola crayons box",
      ambiente: "Caixa amarela e verde icónica cheia de pontas coloridas vivas.",
      cores: ["#FFCC00", "#00843D", "#EE204D", "#1F75FE", "#FF7538"]
    },
    {
      nome: "Peças LEGO Clássicas",
      pesquisa: "Classic Lego bricks",
      ambiente: "Plástico ABS brilhante em vermelho, azul, amarelo, verde e branco.",
      cores: ["#D01012", "#0055BF", "#F2CD37", "#237841", "#FFFFFF"]
    },
    {
      nome: "Bola de Discoteca",
      pesquisa: "Disco ball",
      ambiente: "Centenas de espelhos prateados com reflexos frios de violeta e ciano.",
      cores: ["#E2E8F0", "#94A3B8", "#38BDF8", "#A855F7", "#0F172A"]
    },
    {
      nome: "Máquina de Arcade",
      pesquisa: "Retro arcade cabinet",
      ambiente: "Preto de sala escura com gráficos néon rosa, azul elétrico e amarelo.",
      cores: ["#120D26", "#FF007F", "#00F5D4", "#FEE440", "#7209B7"]
    },
    {
      nome: "Máquina de Pinball",
      pesquisa: "Vintage pinball machine",
      ambiente: "Luzes quentes de tungsténio, cromados, vermelho vivo e azul cobalto.",
      cores: ["#D90429", "#0077B6", "#FFB703", "#EAE2B7", "#1D1E22"]
    },
    {
      nome: "Jukebox Wurlitzer",
      pesquisa: "Wurlitzer jukebox",
      ambiente: "Madeira nogueira, tubos luminosos âmbar, vermelho rubi e cromado.",
      cores: ["#6F3718", "#FF9F1C", "#D62828", "#CED4DA", "#2EC4B6"]
    },
    {
      nome: "Disquete 3.5",
      pesquisa: "Colored floppy disks",
      ambiente: "Plástico mate em cores variadas com janela metálica cinzenta.",
      cores: ["#2563EB", "#EF4444", "#EAB308", "#CBD5E1", "#1E293B"]
    },
    {
      nome: "Cassete VHS",
      pesquisa: "Retro VHS tape",
      ambiente: "Preto fosco com capas riscadas em vermelho, laranja e amarelo.",
      cores: ["#1C1C1E", "#E63946", "#F77F00", "#FCBF49", "#EAE2B7"]
    },
    {
      nome: "Máquina de Venda Japão",
      pesquisa: "Japanese vending machine",
      ambiente: "Branco iluminado, vermelho vivo e fila colorida de latas brilhantes.",
      cores: ["#F8F9FA", "#E63946", "#0077B6", "#06D6A0", "#1D3557"]
    },
    {
      nome: "Tabuleiro Monopólio",
      pesquisa: "Monopoly board",
      ambiente: "Verde água pálido no centro cercado por blocos de cor vibrantes.",
      cores: ["#CDEAC0", "#D62828", "#00509D", "#F4A261", "#1D1E22"]
    },
    {
      nome: "Etch A Sketch",
      pesquisa: "Etch A Sketch",
      ambiente: "Moldura vermelha forte, botões brancos e ecrã cinzento metálico.",
      cores: ["#D90429", "#BFC3C7", "#FFFFFF", "#5C6066", "#8D0801"]
    },
    {
      nome: "Gomas Haribo",
      pesquisa: "Haribo gummy bears",
      ambiente: "Gelatina translúcida em vermelho, laranja, amarelo e verde vivo.",
      cores: ["#E63946", "#FF7F11", "#FFD166", "#2EC4B6", "#FFF8E7"]
    },
    {
      nome: "Lata de Pringles",
      pesquisa: "Pringles can",
      ambiente: "Vermelho clássico, verde cebola, amarelo e branco limpo.",
      cores: ["#D62828", "#52B788", "#F4C430", "#FFFFFF", "#1B1B1E"]
    },
    {
      nome: "Pastel de Nata",
      pesquisa: "Pastel de Nata",
      ambiente: "Creme amarelo dourado, massa folhada tostada e manchas caramelizadas.",
      cores: ["#F2C14E", "#C97B2B", "#4A2511", "#F7E5B7", "#8C4A1C"]
    },
    {
      nome: "Boião de Nutella",
      pesquisa: "Nutella jar",
      ambiente: "Castanho chocolate profundo, tampa branca e letras pretas e vermelhas.",
      cores: ["#4A2511", "#FFFFFF", "#D62828", "#181818", "#C98A5B"]
    },
    {
      nome: "Pistola Super Soaker",
      pesquisa: "90s Super Soaker",
      ambiente: "Plástico néon dos anos 90 em verde lima, amarelo e laranja elétrico.",
      cores: ["#70E000", "#FFEA00", "#FF6D00", "#00B4D8", "#FFFFFF"]
    },
    {
      nome: "Ponte 25 de Abril",
      pesquisa: "Ponte 25 de Abril Lisbon",
      ambiente: "Aço vermelho óxido contra céu azul claro e rio azul acinzentado.",
      cores: ["#C83E37", "#4A7C9B", "#B8D0E0", "#2F3E46", "#E9ECEF"]
    },
    {
      nome: "Farol da Barra",
      pesquisa: "Farol da Barra Aveiro",
      ambiente: "Riscas largas vermelhas e brancas sobre céu azul e areia clara.",
      cores: ["#C1121F", "#F8F9FA", "#3A86FF", "#E9D8A6", "#1D3557"]
    },
    {
      nome: "Casas da Costa Nova",
      pesquisa: "Costa Nova striped houses",
      ambiente: "Fachadas de madeira às riscas verticais em azul, vermelho, amarelo e branco.",
      cores: ["#0077B6", "#D62828", "#F4C430", "#2A9D8F", "#FFFFFF"]
    },
    {
      nome: "Peixe Betta",
      pesquisa: "Betta fish",
      ambiente: "Barbatanas sedosas em azul cobalto, vermelho carmim e reflexos turquesa.",
      cores: ["#023E8A", "#D00000", "#00B4D8", "#3C096C", "#10002B"]
    },
    {
      nome: "Borboleta Morpho Azul",
      pesquisa: "Blue Morpho butterfly",
      ambiente: "Azul metálico intenso rodeado por margens pretas aveludadas.",
      cores: ["#0077FF", "#00B4D8", "#111114", "#023E8A", "#CAF0F8"]
    },
    {
      nome: "Cogumelo Amanita",
      pesquisa: "Amanita muscaria mushroom",
      ambiente: "Chapéu vermelho brilhante com pintas brancas sobre musgo verde.",
      cores: ["#D62828", "#F8F7F4", "#588157", "#A3B18A", "#3A2D28"]
    },
    {
      nome: "Flor Ave do Paraíso",
      pesquisa: "Bird of Paradise flower",
      ambiente: "Laranja tropical vivo, violeta azulado e folhas verdes profundas.",
      cores: ["#F77F00", "#3A0CA3", "#2D6A4F", "#FCBF49", "#1B4332"]
    },
    {
      nome: "Ametista em Bruto",
      pesquisa: "Raw amethyst crystal",
      ambiente: "Cristais violeta translúcidos, lilás suave e rocha cinzenta escura.",
      cores: ["#5A189A", "#9D4EDD", "#E0AAFF", "#495057", "#240046"]
    },
    {
      nome: "Malaquite Polida",
      pesquisa: "Polished malachite stone",
      ambiente: "Anéis orgânicos em vários tons de verde esmeralda, menta e preto.",
      cores: ["#0B3D2E", "#1B7A58", "#52B788", "#95D5B2", "#081C15"]
    },
    {
      nome: "Pôr do Sol no Deserto",
      pesquisa: "Mojave desert sunset",
      ambiente: "Degradê quente de coral, rosa poeirento, violeta e silhueta escura.",
      cores: ["#F28482", "#F6BD60", "#846A6A", "#4A4E69", "#22223B"]
    },
    {
      nome: "Aurora Boreal",
      pesquisa: "Aurora Borealis night sky",
      ambiente: "Véus luminosos verde néon e violeta sobre céu noturno muito escuro.",
      cores: ["#06D6A0", "#00BBF9", "#7209B7", "#0B132B", "#1C2541"]
    },
    {
      nome: "Recife de Coral",
      pesquisa: "Tropical coral reef",
      ambiente: "Água azul turquesa cheia de corais rosa, laranja vivo e amarelo.",
      cores: ["#0096C7", "#FF6B6B", "#FF9F1C", "#48CAE4", "#023E8A"]
    }
  ]
};

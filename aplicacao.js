// Lógica principal do Oddly Niche
// Tudo aqui corre localmente no navegador, sem precisar de servidor.

(function () {
  // Chaves usadas para guardar favoritos e histórico no navegador
  const CHAVES_MEMORIA = {
    favoritos: "oddly_niche_favoritos_v3",
    historico: "oddly_niche_historico_v3"
  };

  // Pequenos ícones SVG no estilo retro para os botões dinâmicos
  const ICONES = {
    cadeadoAberto: `<svg class="icone-svg" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 6V4a3 3 0 0 1 6 0h-2a1 1 0 0 0-2 0v2h6v8H3V6h2zm0 2v4h6V8H5z" fill="currentColor"/></svg>`,
    cadeadoFechado: `<svg class="icone-svg" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6V4a4 4 0 0 1 8 0v2h1v8H3V6h1zm2 0h4V4a2 2 0 1 0-4 0v2zm1 3h2v3H7V9z" fill="currentColor"/></svg>`,
    estrelaVazia: `<svg class="icone-svg" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1l2.2 4.5 5 .7-3.6 3.5.8 5L8 12.3 3.6 14.7l.8-5L.8 6.2l5-.7L8 1zm0 3.1L6.6 7l-3.1.4 2.2 2.2-.5 3.1L8 11.2l2.8 1.5-.5-3.1 2.2-2.2-3.1-.4L8 4.1z" fill="currentColor"/></svg>`,
    estrelaCheia: `<svg class="icone-svg" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1l2.2 4.5 5 .7-3.6 3.5.8 5L8 12.3 3.6 14.7l.8-5L.8 6.2l5-.7L8 1z" fill="currentColor"/></svg>`
  };

  // Estado atual da aplicação
  const estado = {
    disciplina: "todas",
    bloqueios: {
      formato: false,
      tema: false,
      estilo: false,
      objetoCor: false
    },
    selecionado: {
      formato: null,
      tema: null,
      estilo: null,
      objetoCor: null
    },
    favoritos: lerMemoria(CHAVES_MEMORIA.favoritos, []),
    historico: lerMemoria(CHAVES_MEMORIA.historico, []),
    abaAtiva: "favoritos"
  };

  // Referências aos elementos da página
  const listas = {
    formato: document.getElementById("lista-formato"),
    tema: document.getElementById("lista-tema"),
    estilo: document.getElementById("lista-estilo"),
    objetoCor: document.getElementById("lista-objetoCor")
  };

  const elementos = {
    palcoCores: document.getElementById("palcoCores"),
    tituloObjetoCor: document.getElementById("tituloObjetoCor"),
    descricaoObjetoCor: document.getElementById("descricaoObjetoCor"),
    linhaAmostras: document.getElementById("linhaAmostras"),
    linkGoogleImagens: document.getElementById("linkGoogleImagens"),
    linkPinterest: document.getElementById("linkPinterest"),
    tituloNotaEstilo: document.getElementById("tituloNotaEstilo"),
    descricaoNotaEstilo: document.getElementById("descricaoNotaEstilo"),
    linkPesquisarEstilo: document.getElementById("linkPesquisarEstilo"),
    resumoEstado: document.getElementById("resumoEstado"),
    botaoGerar: document.getElementById("botaoGerar"),
    botaoFavorito: document.getElementById("botaoFavorito"),
    botaoCopiar: document.getElementById("botaoCopiar"),
    botaoExportarPng: document.getElementById("botaoExportarPng"),
    botaoHistorico: document.getElementById("botaoHistorico"),
    contadorArquivo: document.getElementById("contadorArquivo"),
    gavetaArquivo: document.getElementById("gavetaArquivo"),
    fundoGaveta: document.getElementById("fundoGaveta"),
    botaoFecharGaveta: document.getElementById("botaoFecharGaveta"),
    listaGaveta: document.getElementById("listaGaveta"),
    contagemFavoritos: document.getElementById("contagemFavoritos"),
    contagemHistorico: document.getElementById("contagemHistorico"),
    botaoLimparHistorico: document.getElementById("botaoLimparHistorico"),
    avisoFlutuante: document.getElementById("avisoFlutuante"),
    telaExportacao: document.getElementById("telaExportacao")
  };

  // Funções de apoio para ler e gravar no navegador sem dar erros
  function lerMemoria(chave, valorPadrao) {
    try {
      const guardado = localStorage.getItem(chave);
      return guardado ? JSON.parse(guardado) : valorPadrao;
    } catch {
      return valorPadrao;
    }
  }

  function gravarMemoria(chave, valor) {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch {
      // Se o navegador bloquear armazenamento local, seguimos normalmente
    }
  }

  // Devolve os formatos disponíveis tendo em conta o filtro de área escolhido
  function obterFormatosFiltrados() {
    if (estado.disciplina === "todas") return DADOS_DESIGN.formatos;
    return DADOS_DESIGN.formatos.filter((item) => item.disciplina === estado.disciplina);
  }

  // Escolhe um elemento aleatório evitando repetir logo o mesmo
  function escolherAleatorio(lista, atual) {
    if (!lista.length) return null;
    if (lista.length === 1) return lista[0];
    let escolhido;
    let tentativas = 0;
    do {
      escolhido = lista[Math.floor(Math.random() * lista.length)];
      tentativas++;
    } while (escolhido === atual && tentativas < 10);
    return escolhido;
  }

  // Mostra um pequeno aviso temporário no fundo do ecrã
  let temporizadorAviso;
  function mostrarAviso(mensagem) {
    elementos.avisoFlutuante.textContent = mensagem;
    elementos.avisoFlutuante.classList.remove("escondido");
    clearTimeout(temporizadorAviso);
    temporizadorAviso = setTimeout(() => {
      elementos.avisoFlutuante.classList.add("escondido");
    }, 2200);
  }

  // Cria um identificador único para saber se o desafio atual já está nos favoritos
  function obterIdDesafio(sel = estado.selecionado) {
    if (!sel.formato || !sel.tema || !sel.estilo || !sel.objetoCor) return "";
    return `${sel.formato.nome}|${sel.tema}|${sel.estilo.nome}|${sel.objetoCor.nome}`;
  }

  // Desenha cada uma das 4 listas de opções
  function desenharListaFormatos() {
    const itens = obterFormatosFiltrados();
    listas.formato.innerHTML = "";

    itens.forEach((item) => {
      const linha = document.createElement("div");
      const selecionado = estado.selecionado.formato?.nome === item.nome;
      linha.className = "item-lista" + (selecionado ? " selecionado" : "");
      linha.setAttribute("role", "option");
      linha.innerHTML = `<span>${item.nome}</span><span class="etiqueta-item">${item.etiqueta}</span>`;
      linha.addEventListener("click", () => {
        estado.selecionado.formato = item;
        atualizarInterface(false);
      });
      listas.formato.appendChild(linha);
    });
  }

  function desenharListaTemas() {
    listas.tema.innerHTML = "";

    DADOS_DESIGN.temas.forEach((nomeTema) => {
      const linha = document.createElement("div");
      const selecionado = estado.selecionado.tema === nomeTema;
      linha.className = "item-lista" + (selecionado ? " selecionado" : "");
      linha.setAttribute("role", "option");
      linha.textContent = nomeTema;
      linha.addEventListener("click", () => {
        estado.selecionado.tema = nomeTema;
        atualizarInterface(false);
      });
      listas.tema.appendChild(linha);
    });
  }

  function desenharListaEstilos() {
    listas.estilo.innerHTML = "";

    DADOS_DESIGN.estilos.forEach((estilo) => {
      const linha = document.createElement("div");
      const selecionado = estado.selecionado.estilo?.nome === estilo.nome;
      linha.className = "item-lista" + (selecionado ? " selecionado" : "");
      linha.setAttribute("role", "option");
      linha.textContent = estilo.nome;
      linha.addEventListener("click", () => {
        estado.selecionado.estilo = estilo;
        atualizarInterface(false);
      });
      listas.estilo.appendChild(linha);
    });
  }

  function desenharListaCores() {
    listas.objetoCor.innerHTML = "";

    DADOS_DESIGN.objetosCor.forEach((objeto) => {
      const linha = document.createElement("div");
      const selecionado = estado.selecionado.objetoCor?.nome === objeto.nome;
      linha.className = "item-lista" + (selecionado ? " selecionado" : "");
      linha.setAttribute("role", "option");

      const miniPontos = objeto.cores
        .slice(0, 3)
        .map((cor) => `<span class="ponto-cor" style="background:${cor}"></span>`)
        .join("");

      linha.innerHTML = `<span>${objeto.nome}</span><span class="pontos-cor">${miniPontos}</span>`;
      linha.addEventListener("click", () => {
        estado.selecionado.objetoCor = objeto;
        atualizarInterface(false);
      });
      listas.objetoCor.appendChild(linha);
    });
  }

  // Garante que o item sorteado fica sempre visível dentro de cada lista
  function centrarSelecionados() {
    Object.values(listas).forEach((caixa) => {
      const ativo = caixa.querySelector(".item-lista.selecionado");
      if (ativo) {
        ativo.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    });
  }

  // Atualiza o painel da direita com a paleta, os links e a descrição do estilo
  function desenharInspetor() {
    const objetoCor = estado.selecionado.objetoCor;
    const estilo = estado.selecionado.estilo;

    if (objetoCor) {
      elementos.tituloObjetoCor.textContent = objetoCor.nome;
      elementos.descricaoObjetoCor.textContent = objetoCor.ambiente;

      // Barras verticais com as cores principais
      elementos.palcoCores.innerHTML = "";
      objetoCor.cores.forEach((hex) => {
        const barra = document.createElement("div");
        barra.className = "barra-cor";
        barra.style.backgroundColor = hex;
        barra.title = `Clica para copiar ${hex}`;
        barra.addEventListener("click", () => copiarTexto(hex, `Cor ${hex} copiada.`));
        elementos.palcoCores.appendChild(barra);
      });

      // Pequenos botões com o código de cada cor
      elementos.linhaAmostras.innerHTML = "";
      objetoCor.cores.forEach((hex) => {
        const botao = document.createElement("button");
        botao.className = "pilula-cor";
        botao.innerHTML = `<span class="quadrado-cor" style="background:${hex}"></span>${hex}`;
        botao.addEventListener("click", () => copiarTexto(hex, `Cor ${hex} copiada.`));
        elementos.linhaAmostras.appendChild(botao);
      });

      // Ligações diretas com termos curtos e exatos para encontrar boas imagens
      const termo = encodeURIComponent(objetoCor.pesquisa || objetoCor.nome);
      elementos.linkGoogleImagens.href = `https://www.google.com/search?tbm=isch&q=${termo}`;
      elementos.linkPinterest.href = `https://www.pinterest.com/search/pins/?q=${termo}`;
    }

    if (estilo) {
      elementos.tituloNotaEstilo.textContent = estilo.nome;
      elementos.descricaoNotaEstilo.textContent = estilo.descricao;
      const termoEstilo = encodeURIComponent(`${estilo.nome} graphic design`);
      elementos.linkPesquisarEstilo.href = `https://www.pinterest.com/search/pins/?q=${termoEstilo}`;
    }

    // Resumo limpo na barra de estado
    if (estado.selecionado.formato && estado.selecionado.tema && estilo && objetoCor) {
      elementos.resumoEstado.textContent = `${estado.selecionado.formato.nome} | ${estilo.nome} | ${objetoCor.nome}`;
    }

    // Atualiza o botão de favorito com o ícone certo
    const idAtual = obterIdDesafio();
    const jaGuardado = estado.favoritos.some((item) => item.id === idAtual);
    elementos.botaoFavorito.classList.toggle("guardado", jaGuardado);
    elementos.botaoFavorito.innerHTML = jaGuardado
      ? `${ICONES.estrelaCheia}<span>Guardado</span>`
      : `${ICONES.estrelaVazia}<span>Guardar</span>`;
  }

  function atualizarContadores() {
    elementos.contadorArquivo.textContent = estado.favoritos.length + estado.historico.length;
    elementos.contagemFavoritos.textContent = estado.favoritos.length;
    elementos.contagemHistorico.textContent = estado.historico.length;
  }

  function atualizarInterface(fazerScroll = true) {
    desenharListaFormatos();
    desenharListaTemas();
    desenharListaEstilos();
    desenharListaCores();
    desenharInspetor();
    atualizarContadores();
    if (fazerScroll) {
      centrarSelecionados();
    }
  }

  // Sorteia um novo desafio respeitando as colunas que o utilizador bloqueou
  function gerarDesafio(registarNoHistorico = true) {
    const formatosDisponiveis = obterFormatosFiltrados();

    if (!estado.bloqueios.formato) {
      estado.selecionado.formato = escolherAleatorio(formatosDisponiveis, estado.selecionado.formato);
    }
    if (!estado.bloqueios.tema) {
      estado.selecionado.tema = escolherAleatorio(DADOS_DESIGN.temas, estado.selecionado.tema);
    }
    if (!estado.bloqueios.estilo) {
      estado.selecionado.estilo = escolherAleatorio(DADOS_DESIGN.estilos, estado.selecionado.estilo);
    }
    if (!estado.bloqueios.objetoCor) {
      estado.selecionado.objetoCor = escolherAleatorio(DADOS_DESIGN.objetosCor, estado.selecionado.objetoCor);
    }

    if (registarNoHistorico) {
      guardarNoHistorico();
    }

    atualizarInterface(true);
  }

  function criarRegistoAtual() {
    return {
      id: obterIdDesafio(),
      formato: estado.selecionado.formato,
      tema: estado.selecionado.tema,
      estilo: estado.selecionado.estilo,
      objetoCor: estado.selecionado.objetoCor,
      data: Date.now()
    };
  }

  function guardarNoHistorico() {
    const registo = criarRegistoAtual();
    if (!registo.id) return;
    estado.historico = [registo, ...estado.historico.filter((h) => h.id !== registo.id)].slice(0, 30);
    gravarMemoria(CHAVES_MEMORIA.historico, estado.historico);
  }

  function alternarFavorito() {
    const registo = criarRegistoAtual();
    if (!registo.id) return;

    const existe = estado.favoritos.some((f) => f.id === registo.id);
    if (existe) {
      estado.favoritos = estado.favoritos.filter((f) => f.id !== registo.id);
      mostrarAviso("Desafio removido dos favoritos.");
    } else {
      estado.favoritos = [registo, ...estado.favoritos];
      mostrarAviso("Desafio guardado nos favoritos.");
    }

    gravarMemoria(CHAVES_MEMORIA.favoritos, estado.favoritos);
    desenharInspetor();
    atualizarContadores();
    if (!elementos.gavetaArquivo.classList.contains("escondido")) {
      desenharListaGaveta();
    }
  }

  // Copia texto para a área de transferência
  async function copiarTexto(texto, mensagemSucesso) {
    try {
      await navigator.clipboard.writeText(texto);
      mostrarAviso(mensagemSucesso);
    } catch {
      const area = document.createElement("textarea");
      area.value = texto;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
      mostrarAviso(mensagemSucesso);
    }
  }

  function copiarBrief() {
    const { formato, tema, estilo, objetoCor } = estado.selecionado;
    const termo = encodeURIComponent(objetoCor.pesquisa || objetoCor.nome);
    const texto = [
      "Desafio de Design (Oddly Niche)",
      `Formato: ${formato.nome} (${formato.etiqueta})`,
      `Tema e contexto: ${tema}`,
      `Estilo niche: ${estilo.nome}. ${estilo.descricao}`,
      `Cores inspiradas em: ${objetoCor.nome} (${objetoCor.cores.join(", ")})`,
      `Referências fotográficas: https://www.google.com/search?tbm=isch&q=${termo}`
    ].join("\n");

    copiarTexto(texto, "Briefing copiado para a área de transferência.");
  }

  // Funções auxiliares para desenhar bordas retro em relevo no Canvas
  function desenharCaixaRelevo(ctx, x, y, l, a, fundo, afundado = false) {
    ctx.fillStyle = fundo;
    ctx.fillRect(x, y, l, a);

    const corTopoEsq = afundado ? "#404040" : "#ffffff";
    const corFundoDir = afundado ? "#ffffff" : "#404040";
    const corMedia = "#808080";

    ctx.fillStyle = corTopoEsq;
    ctx.fillRect(x, y, l, 2);
    ctx.fillRect(x, y, 2, a);

    ctx.fillStyle = corFundoDir;
    ctx.fillRect(x, y + a - 2, l, 2);
    ctx.fillRect(x + l - 2, y, 2, a);

    ctx.fillStyle = afundado ? corMedia : "#dfdfdf";
    ctx.fillRect(x + 2, y + 2, l - 4, 1);
    ctx.fillRect(x + 2, y + 2, 1, a - 4);
  }

  function escreverQuebrado(ctx, texto, x, y, larguraMax, alturaLinha) {
    const palavras = texto.split(" ");
    let linha = "";
    let yAtual = y;

    for (let i = 0; i < palavras.length; i++) {
      const teste = linha + palavras[i] + " ";
      if (ctx.measureText(teste).width > larguraMax && i > 0) {
        ctx.fillText(linha.trim(), x, yAtual);
        linha = palavras[i] + " ";
        yAtual += alturaLinha;
      } else {
        linha = teste;
      }
    }
    ctx.fillText(linha.trim(), x, yAtual);
    return yAtual;
  }

  // Gera e descarrega um cartão PNG exatamente no estilo da janela retro da página
  function exportarCartaoPng() {
    const tela = elementos.telaExportacao;
    const ctx = tela.getContext("2d");
    const { formato, tema, estilo, objetoCor } = estado.selecionado;

    // 1. Fundo verde azulado clássico do ambiente de trabalho
    ctx.fillStyle = "#008080";
    ctx.fillRect(0, 0, tela.width, tela.height);

    // 2. Sombra e janela principal cinzenta
    const jx = 46;
    const jy = 36;
    const jl = tela.width - 92;
    const ja = tela.height - 72;

    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
    ctx.fillRect(jx + 8, jy + 8, jl, ja);
    desenharCaixaRelevo(ctx, jx, jy, jl, ja, "#d4d0c8", false);

    // 3. Barra de título azul em gradiente
    const grad = ctx.createLinearGradient(jx + 4, jy + 4, jx + jl - 4, jy + 4);
    grad.addColorStop(0, "#0a246a");
    grad.addColorStop(1, "#a6caf0");
    ctx.fillStyle = grad;
    ctx.fillRect(jx + 4, jy + 4, jl - 8, 42);

    // Pequeno ícone colorido na barra de título
    ctx.fillStyle = "#d4d0c8";
    ctx.fillRect(jx + 14, jy + 13, 24, 24);
    ctx.fillStyle = "#0a246a";
    ctx.fillRect(jx + 16, jy + 15, 20, 5);
    ctx.fillStyle = "#ff5e8e";
    ctx.fillRect(jx + 16, jy + 22, 8, 13);
    ctx.fillStyle = "#ffd23f";
    ctx.fillRect(jx + 26, jy + 22, 10, 6);
    ctx.fillStyle = "#3bceac";
    ctx.fillRect(jx + 26, jy + 30, 10, 5);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 20px Tahoma, Segoe UI, sans-serif";
    ctx.fillText("Oddly Niche: Desafio de Design", jx + 50, jy + 32);

    // Botão decorativo de fechar no canto superior direito
    desenharCaixaRelevo(ctx, jx + jl - 38, jy + 11, 28, 28, "#d4d0c8", false);
    ctx.strokeStyle = "#111111";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(jx + jl - 30, jy + 19);
    ctx.lineTo(jx + jl - 18, jy + 31);
    ctx.moveTo(jx + jl - 18, jy + 19);
    ctx.lineTo(jx + jl - 30, jy + 31);
    ctx.stroke();

    // 4. Coluna da esquerda com os blocos do briefing
    const ex = jx + 22;
    const larguraEsq = 660;

    // Bloco Formato
    desenharCaixaRelevo(ctx, ex, jy + 64, larguraEsq, 104, "#ffffff", true);
    ctx.fillStyle = "#0a246a";
    ctx.font = "bold 14px Tahoma, Segoe UI, sans-serif";
    ctx.fillText(`FORMATO (${formato.etiqueta.toUpperCase()})`, ex + 16, jy + 92);
    ctx.fillStyle = "#111111";
    ctx.font = "bold 32px Tahoma, Segoe UI, sans-serif";
    escreverQuebrado(ctx, formato.nome, ex + 16, jy + 134, larguraEsq - 32, 36);

    // Bloco Tema
    desenharCaixaRelevo(ctx, ex, jy + 182, larguraEsq, 128, "#ffffff", true);
    ctx.fillStyle = "#0a246a";
    ctx.font = "bold 14px Tahoma, Segoe UI, sans-serif";
    ctx.fillText("TEMA E CONTEXTO", ex + 16, jy + 210);
    ctx.fillStyle = "#111111";
    ctx.font = "bold 26px Tahoma, Segoe UI, sans-serif";
    escreverQuebrado(ctx, tema, ex + 16, jy + 248, larguraEsq - 32, 34);

    // Bloco Estilo Niche
    desenharCaixaRelevo(ctx, ex, jy + 324, larguraEsq, 212, "#ffffff", true);
    ctx.fillStyle = "#0a246a";
    ctx.font = "bold 14px Tahoma, Segoe UI, sans-serif";
    ctx.fillText("ESTILO NICHE", ex + 16, jy + 352);
    ctx.fillStyle = "#111111";
    ctx.font = "bold 28px Tahoma, Segoe UI, sans-serif";
    ctx.fillText(estilo.nome, ex + 16, jy + 392);
    ctx.fillStyle = "#444444";
    ctx.font = "19px Tahoma, Segoe UI, sans-serif";
    escreverQuebrado(ctx, estilo.descricao, ex + 16, jy + 432, larguraEsq - 32, 28);

    // 5. Painel da direita com a Referência de Cor
    const dx = ex + larguraEsq + 18;
    const larguraDir = jl - (dx - jx) - 22;
    desenharCaixaRelevo(ctx, dx, jy + 64, larguraDir, 472, "#ffffff", true);

    // Cabeçalho interno do painel de cor
    ctx.fillStyle = "#d4d0c8";
    ctx.fillRect(dx + 2, jy + 66, larguraDir - 4, 32);
    ctx.fillStyle = "#808080";
    ctx.fillRect(dx + 2, jy + 98, larguraDir - 4, 1);
    ctx.fillStyle = "#111111";
    ctx.font = "bold 14px Tahoma, Segoe UI, sans-serif";
    ctx.fillText("CORES INSPIRADAS EM", dx + 14, jy + 87);

    // Título e ambiente do objeto de cor
    ctx.fillStyle = "#111111";
    ctx.font = "bold 22px Tahoma, Segoe UI, sans-serif";
    const fimTituloCor = escreverQuebrado(ctx, objetoCor.nome, dx + 16, jy + 132, larguraDir - 32, 26);

    ctx.fillStyle = "#4a4a4a";
    ctx.font = "15px Tahoma, Segoe UI, sans-serif";
    escreverQuebrado(ctx, objetoCor.ambiente, dx + 16, fimTituloCor + 28, larguraDir - 32, 21);

    // Barras da paleta dentro de moldura afundada
    const py = jy + 252;
    const pl = larguraDir - 32;
    const pa = 160;
    desenharCaixaRelevo(ctx, dx + 16, py, pl, pa, "#ffffff", true);

    const larguraFaixa = (pl - 4) / objetoCor.cores.length;
    objetoCor.cores.forEach((hex, idx) => {
      ctx.fillStyle = hex;
      ctx.fillRect(dx + 18 + idx * larguraFaixa, py + 2, larguraFaixa + 0.5, pa - 4);
    });

    // Códigos HEX em pílulas retro por baixo da paleta
    const inicioHexY = py + pa + 18;
    objetoCor.cores.forEach((hex, idx) => {
      const col = idx % 2;
      const lin = Math.floor(idx / 2);
      const bx = dx + 16 + col * 172;
      const by = inicioHexY + lin * 34;

      desenharCaixaRelevo(ctx, bx, by, 160, 26, "#d4d0c8", false);
      ctx.fillStyle = hex;
      ctx.fillRect(bx + 7, by + 6, 14, 14);
      ctx.strokeStyle = "#333333";
      ctx.lineWidth = 1;
      ctx.strokeRect(bx + 7, by + 6, 14, 14);

      ctx.fillStyle = "#111111";
      ctx.font = "bold 14px Consolas, Courier New, monospace";
      ctx.fillText(hex, bx + 28, by + 18);
    });

    // 6. Barra de estado no fundo da janela exportada
    desenharCaixaRelevo(ctx, ex, jy + ja - 42, 240, 28, "#d4d0c8", true);
    ctx.fillStyle = "#4a4a4a";
    ctx.font = "13px Consolas, Courier New, monospace";
    ctx.fillText("Oddly Niche Studio", ex + 10, jy + ja - 23);

    desenharCaixaRelevo(ctx, ex + 250, jy + ja - 42, jl - 294, 28, "#d4d0c8", true);
    ctx.fillStyle = "#111111";
    ctx.font = "bold 13px Consolas, Courier New, monospace";
    ctx.fillText(`${formato.nome} | ${estilo.nome} | ${objetoCor.nome}`.slice(0, 74), ex + 260, jy + ja - 23);

    // Descarregar o ficheiro PNG
    const link = document.createElement("a");
    const nomeLimpo = formato.nome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_|_$/g, "");
    link.download = `desafio_${nomeLimpo}.png`;
    link.href = tela.toDataURL("image/png");
    link.click();
    mostrarAviso("Cartão PNG descarregado.");
  }

  // Controlo da gaveta de histórico e favoritos
  function abrirGaveta() {
    elementos.gavetaArquivo.classList.remove("escondido");
    elementos.gavetaArquivo.setAttribute("aria-hidden", "false");
    desenharListaGaveta();
  }

  function fecharGaveta() {
    elementos.gavetaArquivo.classList.add("escondido");
    elementos.gavetaArquivo.setAttribute("aria-hidden", "true");
  }

  function desenharListaGaveta() {
    const lista = estado.abaAtiva === "favoritos" ? estado.favoritos : estado.historico;
    elementos.listaGaveta.innerHTML = "";

    if (!lista.length) {
      elementos.listaGaveta.innerHTML = `<div class="estado-vazio">Ainda não existem desafios guardados aqui.</div>`;
      return;
    }

    lista.forEach((item) => {
      const cartao = document.createElement("div");
      cartao.className = "cartao-guardado";
      const faixasCor = item.objetoCor.cores
        .map((c) => `<span style="background:${c}"></span>`)
        .join("");

      cartao.innerHTML = `
        <div class="titulo-guardado">${item.formato.nome} com ${item.estilo.nome}</div>
        <div class="meta-guardado">${item.tema}. Cores de ${item.objetoCor.nome}.</div>
        <div class="cores-guardado">${faixasCor}</div>
      `;

      cartao.addEventListener("click", () => {
        estado.disciplina = "todas";
        document.querySelectorAll(".botao-filtro").forEach((b) => {
          b.classList.toggle("ativo", b.dataset.disciplina === "todas");
        });

        estado.selecionado = {
          formato: DADOS_DESIGN.formatos.find((f) => f.nome === item.formato.nome) || item.formato,
          tema: item.tema,
          estilo: DADOS_DESIGN.estilos.find((e) => e.nome === item.estilo.nome) || item.estilo,
          objetoCor: DADOS_DESIGN.objetosCor.find((c) => c.nome === item.objetoCor.nome) || item.objetoCor
        };

        atualizarInterface(true);
        fecharGaveta();
        mostrarAviso("Desafio carregado.");
      });

      elementos.listaGaveta.appendChild(cartao);
    });
  }

  // Inicializa os ícones de cadeado em todas as colunas
  function prepararCadeados() {
    document.querySelectorAll(".botao-cadeado").forEach((botao) => {
      const coluna = botao.dataset.cadeado;
      botao.innerHTML = ICONES.cadeadoAberto;

      botao.addEventListener("click", () => {
        estado.bloqueios[coluna] = !estado.bloqueios[coluna];
        const ativo = estado.bloqueios[coluna];
        botao.classList.toggle("bloqueado", ativo);
        botao.innerHTML = ativo ? ICONES.cadeadoFechado : ICONES.cadeadoAberto;
        botao.setAttribute("aria-pressed", String(ativo));
        botao.title = ativo ? "Desbloquear esta coluna" : "Fixar esta coluna";
      });
    });
  }

  // Eventos dos botões principais
  elementos.botaoGerar.addEventListener("click", () => gerarDesafio(true));
  elementos.botaoFavorito.addEventListener("click", alternarFavorito);
  elementos.botaoCopiar.addEventListener("click", copiarBrief);
  elementos.botaoExportarPng.addEventListener("click", exportarCartaoPng);

  elementos.botaoHistorico.addEventListener("click", abrirGaveta);
  elementos.botaoFecharGaveta.addEventListener("click", fecharGaveta);
  elementos.fundoGaveta.addEventListener("click", fecharGaveta);

  elementos.botaoLimparHistorico.addEventListener("click", () => {
    estado.historico = [];
    gravarMemoria(CHAVES_MEMORIA.historico, []);
    atualizarContadores();
    desenharListaGaveta();
    mostrarAviso("Histórico recente limpo.");
  });

  // Alternar entre favoritos e recentes dentro da gaveta
  document.querySelectorAll(".aba-gaveta").forEach((aba) => {
    aba.addEventListener("click", () => {
      estado.abaAtiva = aba.dataset.aba;
      document.querySelectorAll(".aba-gaveta").forEach((t) => {
        t.classList.toggle("ativa", t === aba);
      });
      desenharListaGaveta();
    });
  });

  // Filtros de área no topo
  document.querySelectorAll(".botao-filtro").forEach((botao) => {
    botao.addEventListener("click", () => {
      estado.disciplina = botao.dataset.disciplina;
      document.querySelectorAll(".botao-filtro").forEach((b) => {
        b.classList.toggle("ativo", b === botao);
      });

      const disponiveis = obterFormatosFiltrados();
      if (!disponiveis.some((f) => f.nome === estado.selecionado.formato?.nome)) {
        estado.selecionado.formato = escolherAleatorio(disponiveis, null);
      }
      atualizarInterface(true);
    });
  });

  // Atalhos de teclado: Espaço para sortear e Escape para fechar a gaveta
  document.addEventListener("keydown", (evento) => {
    const foco = document.activeElement.tagName;
    if (evento.code === "Space" && !["INPUT", "TEXTAREA", "BUTTON", "A"].includes(foco)) {
      evento.preventDefault();
      gerarDesafio(true);
    } else if (evento.code === "Escape") {
      fecharGaveta();
    }
  });

  // Arranque inicial da ferramenta
  prepararCadeados();
  gerarDesafio(false);
})();

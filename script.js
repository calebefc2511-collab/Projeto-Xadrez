/* Elementos */

const posicoes = new Array(8);

for (let i = 0; i <= 7; i++)
{
	posicoes[i] = new Array(8);
	py = i + 1;
	for (let j = 0; j <= 7; j++)
	{
		px = j + 1;
		posicoes[i][j] = document.getElementById("pos"+py+px);
	}
}

const promotBranco  = document.getElementById("promot-branco");
const promotPreto   = document.getElementById("promot-preto");

const promoRainhaBr = document.getElementById("promot-rainhabr");
const promoRainhaPr = document.getElementById("promot-rainhapr");
const promoTorreBr  = document.getElementById("promot-torrebr");
const promoTorrePr  = document.getElementById("promot-torrepr");
const promoBispoBr  = document.getElementById("promot-bispobr");
const promoBispoPr  = document.getElementById("promot-bispopr");
const promoCavaloBr = document.getElementById("promot-cavalobr");
const promoCavaloPr = document.getElementById("promot-cavalopr");

const btnInicio = document.getElementById("retrocedertotal");
const btnMenos1 = document.getElementById("retroceder");
const btnMais1  = document.getElementById("avancar");
const btnAtual  = document.getElementById("avancartotal");

const pontosTomPeaoBr   = document.getElementById("peaoBr");
const pontosTomTorreBr  = document.getElementById("torreBr");
const pontosTomCavaloBr = document.getElementById("cavaloBr");
const pontosTomBispoBr  = document.getElementById("bispoBr");
const pontosTomRainhaBr = document.getElementById("rainhaBr");

const pontosTomPeaoPr   = document.getElementById("peaoPr");
const pontosTomTorrePr  = document.getElementById("torrePr");
const pontosTomCavaloPr = document.getElementById("cavaloPr");
const pontosTomBispoPr  = document.getElementById("bispoPr");
const pontosTomRainhaPr = document.getElementById("rainhaPr");

const listaDeMovimentos = document.getElementById("lista-moves");

const placarBr = document.getElementById("placarBr");
const placarPr = document.getElementById("placarPr");

/* Constantes */

const PEAO_PRETO    = "peao-preto.png";
const PEAO_BRANCO   = "peao-branco.png";
const TORRE_PRETA	= "torre-preto.png";
const TORRE_BRANCA	= "torre-branco.png";
const CAVALO_PRETO	= "cavalo-preto.png";
const CAVALO_BRANCO	= "cavalo-branco.png";
const BISPO_PRETO	= "bispo-preto.png";
const BISPO_BRANCO	= "bispo-branco.png";
const RAINHA_PRETA	= "rainha-preto.png";
const RAINHA_BRANCA	= "rainha-branco.png";
const REI_PRETO		= "rei-preto.png";
const REI_BRANCO	= "rei-branco.png";

const P = 0;
const B = 1;

const X = 0;
const Y = 1;

const A = 0;
const H = 1;

/* Variáveis */

/* Salvamento das posições */

const historico = [];

let tamMax = 0;
let lugAtu = -1;

let Contador = 1;

let info;

/* Contagem de pontos */

let pontosBr = 0;
let pontosPr = 0;

let posPec = new Array(2);

posPec[P] = new Array(8);
posPec[B] = new Array(8);

for (let i = 0; i < 8; i++)
{
	posPec[P][i] = new Array(8);
	posPec[B][i] = new Array(8);
	
	for (j = 0; j < 8; j++) // Incializando como falso
	{
		posPec[P][i][j] = false;
		posPec[B][i][j] = false;
	}
	
	if (i < 2) // Onde começam as pretas
	{
		for (j = 0; j < 8; j++)
		{
			posPec[P][i][j] = true;
		}
	}
	if (i > 5) // Onde começam as brancas
	{
		for (j = 0; j < 8; j++)
		{
			posPec[B][i][j] = true;
		}
	}
}

let posSel = new Array(2);
// Posição selecionada


let movimentos = new Array(8);

for (let i = 0; i < 8; i++)
{
	movimentos[i] = new Array(8);
	for (let j = 0; j < 8; j++)
	{
		movimentos[i][j] = false;
	}
}

let roque = new Array(2);

roque[B] = new Array(2);
roque[P] = new Array(2);

roque[B][A] = true;
roque[B][H] = true;
roque[P][A] = true;
roque[P][H] = true;

let enPassant = new Array(2);

for (let i = 0; i<2; i++)
{
	enPassant[i] = new Array(8);
	
	for (let j = 0; j<8; j++)
	{
		enPassant[i][j] = false;
	}
}

let promo = false;

let movendo = false;

let finalizarPartida = false;
// Vira true no xeque-mate e bloqueia novos cliques no tabuleiro

let posRei = new Array(2);

posRei[B] = new Array(2);
posRei[P] = new Array(2);

posRei[B][X] = 4;
posRei[P][X] = 4;
posRei[B][Y] = 7;
posRei[P][Y] = 0; 

let posReiXeque = new Array(2)

for(i = 0; i<8; i++)
{

	posReiXeque[i] = new Array(8);

	for(j=0; j<8; j++)

		posReiXeque[i][j] = true;

}

let cor = "brancas";

let casaXeque = null;

/* Funções */

function clicouP00() { principal(0,0);}
function clicouP01() { principal(0,1);}
function clicouP02() { principal(0,2);}
function clicouP03() { principal(0,3);}
function clicouP04() { principal(0,4);}
function clicouP05() { principal(0,5);}
function clicouP06() { principal(0,6);}
function clicouP07() { principal(0,7);}

function clicouP10() { principal(1,0);}
function clicouP11() { principal(1,1);}
function clicouP12() { principal(1,2);}
function clicouP13() { principal(1,3);}
function clicouP14() { principal(1,4);}
function clicouP15() { principal(1,5);}
function clicouP16() { principal(1,6);}
function clicouP17() { principal(1,7);}

function clicouP20() { principal(2,0);}
function clicouP21() { principal(2,1);}
function clicouP22() { principal(2,2);}
function clicouP23() { principal(2,3);}
function clicouP24() { principal(2,4);}
function clicouP25() { principal(2,5);}
function clicouP26() { principal(2,6);}
function clicouP27() { principal(2,7);}

function clicouP30() { principal(3,0);}
function clicouP31() { principal(3,1);}
function clicouP32() { principal(3,2);}
function clicouP33() { principal(3,3);}
function clicouP34() { principal(3,4);}
function clicouP35() { principal(3,5);}
function clicouP36() { principal(3,6);}
function clicouP37() { principal(3,7);}

function clicouP40() { principal(4,0);}
function clicouP41() { principal(4,1);}
function clicouP42() { principal(4,2);}
function clicouP43() { principal(4,3);}
function clicouP44() { principal(4,4);}
function clicouP45() { principal(4,5);}
function clicouP46() { principal(4,6);}
function clicouP47() { principal(4,7);}

function clicouP50() { principal(5,0);}
function clicouP51() { principal(5,1);}
function clicouP52() { principal(5,2);}
function clicouP53() { principal(5,3);}
function clicouP54() { principal(5,4);}
function clicouP55() { principal(5,5);}
function clicouP56() { principal(5,6);}
function clicouP57() { principal(5,7);}

function clicouP60() { principal(6,0);}
function clicouP61() { principal(6,1);}
function clicouP62() { principal(6,2);}
function clicouP63() { principal(6,3);}
function clicouP64() { principal(6,4);}
function clicouP65() { principal(6,5);}
function clicouP66() { principal(6,6);}
function clicouP67() { principal(6,7);}

function clicouP70() { principal(7,0);}
function clicouP71() { principal(7,1);}
function clicouP72() { principal(7,2);}
function clicouP73() { principal(7,3);}
function clicouP74() { principal(7,4);}
function clicouP75() { principal(7,5);}
function clicouP76() { principal(7,6);}
function clicouP77() { principal(7,7);}

// Funções para promoção

function clicouRAP() { promover (cor, 3); }
function clicouRAB() { promover (cor, 3); }
function clicouBIP() { promover (cor, 2); }
function clicouBIB() { promover (cor, 2); }
function clicouCAP() { promover (cor, 1); }
function clicouCAB() { promover (cor, 1); }
function clicouTOP() { promover (cor, 0); }
function clicouTOB() { promover (cor, 0); }

// Funções para navegação

function clicouInicio() { 
	limparBolinha(posicoes);
	navegar(lugAtu = (0)); 
}
function clicouMenos1() { 
	if (lugAtu == 0)
	{
		limparBolinha(posicoes);
		navegar(lugAtu);
	}
	else
	{
		limparBolinha(posicoes);
		navegar(--lugAtu);
	}		
}
function clicouMais1()  { 
	if (lugAtu == tamMax - 1)
		return;
	limparBolinha(posicoes);
	navegar(++lugAtu); 
}
function clicouAtual()  { 
	limparBolinha(posicoes);
	navegar(lugAtu = (tamMax - 1) ); 
}

/* Principal função */

atualizarHistorico ();

function principal (posY, posX)
{
	
	let i, j;

	if (promo || finalizarPartida) 
	{
		return;
	}

	if (movendo)
	{
		if (movimentos[posY][posX])
		{
			
			info = mover(posX, posY, posSel, posPec, posicoes);
			posMov(posY, posX, posSel, cor, enPassant, posicoes, posRei);
			
			if (promo)
				ativarPromo (cor, posY, posX);
			
			cor = cor === "brancas" ? "pretas" : "brancas";
			
			// Inverte o turno

			// Se houve promoção, a checagem é feita depois que a peça for escolhida
			if (!promo)
			{
				
				moniMate(posX, posY, posicoes, movimentos, posPec, cor, enPassant);
				atualizarXeque(cor);
			}
			
			if (emXeque(posRei, posicoes, posPec, cor))
			{
				if (finalizarPartida)
				{
					info.tipoAtaque = "#";
				}
				else
				{
					info.tipoAtaque = "+";
				}
			}
			else
			{
				if (finalizarPartida)
				{
					info.tipoAtaque = "1/2-1/2"
				}
			}
			
			if (lugAtu === tamMax - 1)
				atualizarPontos (info.pecDepois, cor);
			
			if (lugAtu === tamMax - 1 && !promo)
			{
				atualizarHistorico();
				atualizarLista(info);
			}
			
		}
		
		limparBolinha(posicoes);
		
		movendo = false;
		
		limpar(movimentos);
		
	}

	if (posicoes[posY][posX].style.backgroundImage === "")
	{
		return;
	}
	
	if (cor === "brancas")
	{
		if (posPec[B][posY][posX])
		{
			if (posicoes[posY][posX].style.backgroundImage.includes(PEAO_BRANCO)) {
				peao   (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
			}
			if (posicoes[posY][posX].style.backgroundImage.includes(CAVALO_BRANCO)) {
				cavalo (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
			}
			if (posicoes[posY][posX].style.backgroundImage.includes(TORRE_BRANCA)) {
				torre  (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
			}
			if (posicoes[posY][posX].style.backgroundImage.includes(BISPO_BRANCO)) {
				bispo  (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
			}
			if (posicoes[posY][posX].style.backgroundImage.includes(RAINHA_BRANCA)) {
				rainha (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
			}
			if (posicoes[posY][posX].style.backgroundImage.includes(REI_BRANCO)) {
				rei    (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
			}
			
			posSel[X] = posX;
			posSel[Y] = posY;

			moniMovimentos(posX, posY, posPec, cor)

			// Armazena onde selecionou

			mostrarBolinha(posicoes, movimentos);

			movendo = true;

		}
	}
	else
	{
		if (posPec[P][posY][posX])
		{
			if (posicoes[posY][posX].style.backgroundImage.includes(PEAO_PRETO)) {
				peao   (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
			}
			if (posicoes[posY][posX].style.backgroundImage.includes(CAVALO_PRETO)) {
				cavalo (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
			}
			if (posicoes[posY][posX].style.backgroundImage.includes(TORRE_PRETA)) {
				torre  (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
			}
			if (posicoes[posY][posX].style.backgroundImage.includes(BISPO_PRETO)) {
				bispo  (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
			}
			if (posicoes[posY][posX].style.backgroundImage.includes(RAINHA_PRETA)) {
				rainha (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
			}
			if (posicoes[posY][posX].style.backgroundImage.includes(REI_PRETO)) {
				rei    (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
			}
			
			posSel[X] = posX;
			posSel[Y] = posY;

			moniMovimentos(posX, posY, posPec, cor)
			
			// Armazena onde selecionou
			
			mostrarBolinha(posicoes, movimentos);
			
			movendo = true;
		}
		
	}
	
}

// Funções de calculo de movimento

function limpar (matriz)
{
	let i, j;
	
	for (i = 0; i<8; i++)
	{
		for (j = 0; j<8; j++)
		{
			matriz[i][j] = false;
		}
		
	}
}

function mostrarBolinha(posicoes, movimentos) {
	for (let i = 0; i < 8; i++)
	{
		for (let j = 0; j < 8; j++)
		{
			if (movimentos[i][j])
			{
				const casa = posicoes[i][j];
				const span = document.createElement("span");

    			span.classList.add("indicador-movimento");
				
				casa.appendChild(span);
			}
		}
	}
}

function limparBolinha(posicoes) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const span = posicoes[i][j].querySelector(".indicador-movimento");
            if(span){
			span.remove();
			}
        }
    }
}

function mover(posX, posY, posSel, posPec, posicoes) 
{
	let atacou = (posPec[B][posY][posX] || posPec[P][posY][posX]);
	let fezRoque = 0;
	
	let pecAntes = posicoes[posSel[Y]][posSel[X]].style.backgroundImage;
	let pecDepois = posicoes[posY][posX].style.backgroundImage;
	
	posicoes[posY][posX].style.backgroundImage = pecAntes;
	posicoes[posSel[Y]][posSel[X]].style.backgroundImage = "";
	
	/* Abaixo, enPassant */
	
	if (posicoes[posY][posX].style.backgroundImage.includes("peao"))
	{
		if (cor === "brancas")
		{
			if (posX != posSel[X] && !(posPec[P][posY][posX]))
			{
				posPec[P][posY + 1][posX] = false;
				pecDepois = posicoes[posY + 1][posX].style.backgroundImage;
				posicoes[posY + 1][posX].style.backgroundImage = "";
				atacou = true;
			}
			
		}
		if (cor === "pretas")
		{
			if (posX != posSel[X] && !(posPec[B][posY][posX]))
			{
				posPec[P][posY - 1][posX] = false;
				pecDepois = posicoes[posY - 1][posX].style.backgroundImage;
				posicoes[posY - 1][posX].style.backgroundImage = "";
				atacou = true;
			}
		}
	}

	if (cor === "brancas")
	{
		posPec[B][posY][posX] = true;
		posPec[P][posY][posX] = false;
		posPec[B][posSel[Y]][posSel[X]] = false;
	}

	if (cor === "pretas")
	{
		posPec[B][posY][posX] = false;
		posPec[P][posY][posX] = true;
		posPec[P][posSel[Y]][posSel[X]] = false;
	}	
	
	/* 
	Abaixo, roque
	*/
	
	if (posicoes[posY][posX].style.backgroundImage.includes("rei"))
	{
		if (cor === "brancas")
		{
			if (posSel[X] - posX === 2)
			{
				posicoes[posY][posX + 1].style.backgroundImage = posicoes[posY][0].style.backgroundImage;
				posicoes[posY][0].style.backgroundImage = "";
				posPec[B][posY][0] = false;
				posPec[B][posY][posX + 1] = true;
				fezRoque = 1;
				
			}
			if (posSel[X] - posX === -2)
			{
				posicoes[posY][posX - 1].style.backgroundImage = posicoes[posY][7].style.backgroundImage;
				posicoes[posY][7].style.backgroundImage = "";
				posPec[B][posY][7] = false;
				posPec[B][posY][posX - 1] = true;
				fezRoque = 2;
				
			}
		}
		if (cor === "pretas")
		{
			if (posSel[X] - posX === 2)
			{
				posicoes[posY][posX + 1].style.backgroundImage = posicoes[posY][0].style.backgroundImage;
				posicoes[posY][0].style.backgroundImage = "";
				posPec[P][posY][0] = false;
				posPec[P][posY][posX + 1] = true;
				fezRoque = 1;
				
			}
			if (posSel[X] - posX === -2)
			{
				posicoes[posY][posX - 1].style.backgroundImage = posicoes[posY][7].style.backgroundImage;
				posicoes[posY][7].style.backgroundImage = "";
				posPec[P][posY][7] = false;
				posPec[P][posY][posX - 1] = true;
				fezRoque = 2;

			}
		}
	}
	
	const infoMov = 
	{
		antesPosX: posSel[X],
		antesPosY: posSel[Y],
		depoisPosX: posX,
		depoisPosY: posY,
		tipoAtaque: "",
		atacou: atacou,
		promoveu: false,
		roque: fezRoque,
		pecAntes : pecAntes,
		pecDepois: pecDepois
	}
	
	return infoMov;

}

function posMov(posY, posX, posSel, cor, enPassant, posicoes, posRei)
{
	for (let i = 0; i < 8; i++)
	{
		enPassant[P][i] = false;
		enPassant[B][i] = false;
	}
	
	if (posicoes[posY][posX].style.backgroundImage.includes("peao"))
	{
		
		if (cor === "brancas")
		{			
			// Abaixo, En passant Branco
			if (posSel[Y] - posY === 2)
			{
				enPassant[P][posX] = true;
			}
			
			// Abaixo, promoção branca
			if (posY === 0)
			{
				promo = true;
			}
		}
		else
		{
			// Abaixo, En passant Preto
			if (posY - posSel[Y] === 2)
			{
				enPassant[B][posX] = true;
			}
			
			// Abaixo, promoção preta
			if (posY === 7)
			{
				promo = true;
			}
		}	
	}
	
	if (posicoes[posY][posX].style.backgroundImage.includes("rei"))
	{
		if (cor === "brancas")
		{
			posRei[B][X] = posX;
			posRei[B][Y] = posY;
			
			/* 
			Abaixo, roque
			*/
			
			roque[B][A] = false;
			roque[B][H] = false;
		}
		if (cor === "pretas")
		{
			posRei[P][X] = posX;
			posRei[P][Y] = posY;
			
			/* 
			Abaixo, roque
			*/
			
			roque[P][A] = false;
			roque[P][H] = false;
		}
	}
	
	/* 
	Abaixo, roque
	*/
	
	if (cor === "brancas")
	{
		if (!posicoes[7][7].style.backgroundImage.includes(TORRE_BRANCA))
		{
			roque[B][H] = false;
		}
		if (!posicoes[7][0].style.backgroundImage.includes(TORRE_BRANCA))
		{
			roque[B][A] = false;
		}
	}
	if (cor === "pretas")
	{
		if (!posicoes[0][7].style.backgroundImage.includes(TORRE_PRETA))
		{
			roque[P][H] = false;
		}
		if (!posicoes[0][0].style.backgroundImage.includes(TORRE_PRETA))
		{
			roque[P][A] = false;
		}
	}
	
}

function ativarPromo (cor, posY, posX)
{

	if(cor === "brancas"){
		promotBranco.style.display = "flex";
		promotBranco.style.left = posX * posicoes[0][0].offsetWidth+"px";
	}
	if(cor === "pretas"){
		promotPreto.style.display = "flex";
		promotPreto.style.left = posX * posicoes[0][0].offsetWidth+"px";
	}	

	posSel[X] = posX;
	posSel[Y] = posY;
	
}

function promover (cor, tipo)
{
	cor = cor === "brancas" ? "pretas" : "brancas";
	// Inverte a cor para voltar o turno para quem de fato está promovendo
	
	if(cor === "brancas"){
		
		switch(tipo)
		{
			case 0:
				posicoes[posSel[Y]][posSel[X]].style.backgroundImage = "url('img/" + TORRE_BRANCA + "')";
				break;
			case 1:
				posicoes[posSel[Y]][posSel[X]].style.backgroundImage = "url('img/" + CAVALO_BRANCO + "')";
				break;
			case 2:
				posicoes[posSel[Y]][posSel[X]].style.backgroundImage = "url('img/" + BISPO_BRANCO + "')";
				break;
			case 3:
				posicoes[posSel[Y]][posSel[X]].style.backgroundImage = "url('img/" + RAINHA_BRANCA + "')";
				break;
				
		}
		
		promotBranco.style.display = "none";
		promotBranco.style.left = 0;
		
	}
	if(cor === "pretas"){
		
		switch(tipo)
		{
			case 0:
				posicoes[posSel[Y]][posSel[X]].style.backgroundImage = "url('img/" + TORRE_PRETA + "')";
				break;
			case 1:
				posicoes[posSel[Y]][posSel[X]].style.backgroundImage = "url('img/" + CAVALO_PRETO + "')";
				break;
			case 2:
				posicoes[posSel[Y]][posSel[X]].style.backgroundImage = "url('img/" + BISPO_PRETO + "')";
				break;
			case 3:
				posicoes[posSel[Y]][posSel[X]].style.backgroundImage = "url('img/" + RAINHA_PRETA + "')";
				break;		
		}
		
		promotPreto.style.display = "none";
		promotPreto.style.left = 0;
	}

	promo = false;
	
	cor = cor === "brancas" ? "pretas" : "brancas";

	// Aqui "cor" é quem promoveu; o turno agora é do adversário
	moniMate(posSel[X], posSel[Y], posicoes, movimentos, posPec, cor, enPassant);
	atualizarXeque(cor);
	
	info.promoveu = true;
	
	if (emXeque(posRei, posicoes, posPec, cor))
	{
		if (finalizarPartida)
		{
			info.tipoAtaque = "#";
		}
		else
		{
			info.tipoAtaque = "+";
		}
	}
	else
	{
		if (finalizarPartida)
		{
			info.tipoAtaque = " 1/2-1/2"
		}
	}
	
	atualizarPontos(posicoes[posSel[Y]][posSel[X]].style.backgroundImage, cor)
	
	if (cor === "brancas")
	{
		pontosBr--;
		pontosPr++;
	}
	if (cor === "pretas")
	{
		pontosPr--;
		pontosBr++;
	}
	
	if (lugAtu === tamMax - 1)
	{
		atualizarHistorico();
		atualizarLista(info);
	}

}

function peao  (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei)
{
	
	let NposX = posX;
	let NposY = posY;
	let i;

	if(cor === "pretas")
	{

		if(condicaoPeao(NposX, NposY+1, posPec, cor))
		{

			movimentos[NposY+1][NposX] = true;

			if(posY === 1)
			{

				
				{

					if(condicaoPeao(NposX, NposY+2, posPec, cor))

						movimentos[NposY+2][NposX] = true;

				}

			}

		}

		for(i = -1; i<=1; i++)
		{

			if(i === 0)

				continue;

			NposY = posY + 1;
			NposX = posX + i;

			if(condicaoPeaoDgn(NposX, NposY, posPec, cor))
	
				movimentos[NposY][NposX] = true;
				
			if (posY === 4)
			{
				
				if (NposX >= 0 && NposX <= 7 && enPassant[P][NposX])
				{
					movimentos[NposY][NposX] = true;
				}
				
			}
			
		}
	
	}

	if(cor === "brancas")
	{

		if(condicaoPeao(NposX, NposY-1, posPec, cor))
		{

			movimentos[NposY-1][NposX] = true;

			if(posY === 6)
			{

				{

					if(condicaoPeao(NposX, NposY-2, posPec, cor) )

						movimentos[NposY-2][NposX] = true;

				}

			}

		}

		for(i = -1; i<=1; i++)
		{

			if(i === 0)

				continue;

			NposY = posY - 1;
			NposX = posX + i;

			if(condicaoPeaoDgn(NposX, NposY, posPec, cor))

				movimentos[NposY][NposX] = true;
				
			if (posY === 3)
			{
				
				if (NposX >= 0 && NposY <= 7 && enPassant[B][NposX])
				{
					movimentos[NposY][NposX] = true;
				}
				
			}

		}

	}

}
function cavalo (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei)
{

	let NposX = posX;
	let NposY = posY;
	let i;
	let j;

	for(j = 1; j<=4; j++)
	{

		for(i = -1; i<=1; i++)
		{

			if(i === 0)

				continue;

			switch(j)
			{

				case 1:
					
					NposX = posX + i;
					NposY = posY + 2;

					if(condicao(NposX, NposY, posicoes, posPec, cor))

						movimentos[NposY][NposX] = true;

					break;

				case 2:

					NposX = posX + i;
					NposY = posY - 2;

					if(condicao(NposX, NposY, posicoes, posPec, cor))

						movimentos[NposY][NposX] = true;

					break;

				case 3:

					NposX = posX + 2;
					NposY = posY + i;

					if(condicao(NposX, NposY, posicoes, posPec, cor))

						movimentos[NposY][NposX] = true;

					break;

				case 4:

					NposX = posX - 2;
					NposY = posY + i;

					if(condicao(NposX, NposY, posicoes, posPec, cor))

						movimentos[NposY][NposX] = true;

					break;

			}

		}

	}

}
function torre  (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei)
{

	let NposX = posX;
	let NposY;
	let i;

	for(i=0; i<4; i++)
	{

		switch(i)
		{

			case 0:

				NposY = posY;
				for(j = 0; j<8; j++)
				{

					++NposY;

					if(condicao(NposX, NposY, posicoes, posPec, cor))

						movimentos[NposY][NposX] = true;

					else

						break;

					if(posPec[P][NposY][NposX] || posPec[B][NposY][NposX])

						break;

				}

			break;

			case 1:

				NposY = posY;
				for(j = 0; j<8; j++)
				{

					--NposY;

					if(condicao(NposX, NposY, posicoes,posPec, cor))

						movimentos[NposY][NposX] = true;

					else

						break;

					if(posPec[P][NposY][NposX] || posPec[B][NposY][NposX])

						break;

				}

			break;

			case 2:

				NposY = posY;
				for(j = 0; j<8; j++)
				{

					++NposX;

					if(condicao(NposX, NposY, posicoes, posPec, cor))

						movimentos[NposY][NposX] = true;

					else

						break;

					if(posPec[P][NposY][NposX] || posPec[B][NposY][NposX])

						break;

				}

			break;

			case 3:

				NposX = posX;
				for(j = 0; j<8; j++)
				{

					--NposX;

					if(condicao(NposX, NposY, posicoes, posPec, cor))

						movimentos[NposY][NposX] = true;

					else

						break;

					if(posPec[P][NposY][NposX] || posPec[B][NposY][NposX])

						break;

				}

		}

	}

}

function bispo  (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei)
{

	let NposX = posX;
	let NposY = posY;
	let i;

	for(i = 0; i<8; i++)
	{

		NposX++;
		NposY++;
		
		if(condicao(NposX, NposY, posicoes, posPec, cor))
		
			movimentos[NposY][NposX] = true; 

		else

			break;

		if(posPec[P][NposY][NposX] || posPec[B][NposY][NposX])

			break;

	}

	NposX = posX;
	NposY = posY;

	for(i = 0; i<8; i++)
	{

		NposX--;
		NposY++;
		
		if(condicao(NposX, NposY, posicoes, posPec, cor))
		
			movimentos[NposY][NposX] = true;

		else

			break;

		if(posPec[P][NposY][NposX] || posPec[B][NposY][NposX])

			break;

	}

	NposX = posX;
	NposY = posY;

	for(i = 0; i<8; i++)
	{

		NposX++;
		NposY--;
		
		if(condicao(NposX, NposY, posicoes, posPec, cor))
		
			movimentos[NposY][NposX] = true;

		else

			break;

		if(posPec[P][NposY][NposX] || posPec[B][NposY][NposX])

			break;

	}

	NposX = posX;
	NposY = posY;

	for(i = 0; i<8; i++)
	{

		NposX--;
		NposY--;
		
		if(condicao(NposX, NposY, posicoes, posPec, cor))
		
			movimentos[NposY][NposX] = true;

		else

			break;

		if(posPec[P][NposY][NposX] || posPec[B][NposY][NposX])

			break;

	}

}

function rainha (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei)
{
	
	torre(posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);
	bispo(posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei);

}

function rei    (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei)
{
	
	let NposX = posX;
	let NposY = posY;
	let i;

	//Diagonal

		NposX++;
		NposY++;
		
		if(condicao(NposX, NposY, posicoes, posPec, cor))
		
			movimentos[NposY][NposX] = true;          

	NposX = posX;
	NposY = posY;

		NposX--;
		NposY++;
		
		if(condicao(NposX, NposY, posicoes, posPec, cor))     
		
			movimentos[NposY][NposX] = true;

	NposX = posX;
	NposY = posY;

		NposX++;
		NposY--;
		
		if(condicao(NposX, NposY, posicoes, posPec, cor))
		
			movimentos[NposY][NposX] = true;

	NposX = posX;
	NposY = posY;
		NposX--;
		NposY--;
		
		if(condicao(NposX, NposY, posicoes, posPec, cor))
		
			movimentos[NposY][NposX] = true;
		
	//Lados da torre

	for(i=0; i<4; i++)
	{

		NposX = posX;
		NposY = posY;

		switch(i)
		{

			case 0:
			{
				NposY = posY;


					++NposY;

					if(condicao(NposX, NposY, posicoes, posPec, cor))

						movimentos[NposY][NposX] = true;
			
			}

			break;

			case 1:
			{
				
				NposY = posY;

					--NposY;

					if(condicao(NposX, NposY, posicoes,posPec, cor))

						movimentos[NposY][NposX] = true;


			}			
			break;

			case 2:
			{
				NposY = posY;

					++NposX;

					if(condicao(NposX, NposY, posicoes, posPec, cor))

						movimentos[NposY][NposX] = true;

			}

			break;

			case 3:

				NposX = posX;

					--NposX;

					if(condicao(NposX, NposY, posicoes, posPec, cor))

						movimentos[NposY][NposX] = true;

		}

	}
	
	/*
	Abaixo, roque
	*/
	
	let SposRei;
	let roquePossivel;
	
	if (emXeque(posRei, posicoes, posPec, cor))
	{
		return;
	}
	
	if (cor === "brancas") 
	{
		if (posY === 7)
		{
			if (roque[B][H])
			{
				roquePossivel = true;
				
				for (i = 1; posX + i <= 6; i++)
				{
					if (posPec[P][posY][posX + i] || posPec[B][posY][posX + i])
					{
						roquePossivel = false;
						break;
					}
				}
				
				SposRei = structuredClone(posRei);
				
				SposRei[B][X] = posRei[B][X] + 1;
				
				if (emXeque(SposRei, posicoes, posPec, cor))
				{
					roquePossivel = false;
				}
				
				SposRei = structuredClone(posRei);
				
				SposRei[B][X] = posRei[B][X] + 2;
				
				if (emXeque(SposRei, posicoes, posPec, cor))
				{
					roquePossivel = false;
				}
				
				if (roquePossivel)
				{
					movimentos[posY][posX + 2] = true; 
				}
				
			}
			
			SposRei = structuredClone(posRei);
			
			if (roque[B][A])
			{
				roquePossivel = true;
				
				for (i = -1; posX + i >= 1; i--)
				{
					if (posPec[P][posY][posX + i] || posPec[B][posY][posX + i])
					{
						roquePossivel = false;
						break;
					}
				}
				
				SposRei = structuredClone(posRei);
				
				SposRei[B][X] = posRei[B][X] - 1;
				
				if (emXeque(SposRei, posicoes, posPec, cor))
				{
					roquePossivel = false;
				}
				
				SposRei = structuredClone(posRei);
				
				SposRei[B][X] = posRei[B][X] - 2;
				
				if (emXeque(SposRei, posicoes, posPec, cor))
				{
					roquePossivel = false;
				}
				
				if (roquePossivel)
				{
					movimentos[posY][posX - 2] = true; 
				}
			}
		}
	}
	if (cor === "pretas")
	{
		if (posY === 0)
		{
			if (roque[P][H])
			{
				roquePossivel = true;
				
				for (i = 1; posX + i <= 6; i++)
				{
					if (posPec[P][posY][posX + i] || posPec[B][posY][posX + i])
					{
						roquePossivel = false;
						break;
					}
				}
				
				SposRei = structuredClone(posRei);
				
				SposRei[P][X] = posRei[P][X] + 1;
				
				if (emXeque(SposRei, posicoes, posPec, cor))
				{
					roquePossivel = false;
				}
				
				SposRei = structuredClone(posRei);
				
				SposRei[P][X] = posRei[P][X] + 2;
				
				if (emXeque(SposRei, posicoes, posPec, cor))
				{
					roquePossivel = false;
				}
				
				if (roquePossivel)
				{
					movimentos[posY][posX + 2] = true; 
				}
				
			}
			
			SposRei = structuredClone(posRei);
			
			if (roque[P][A])
			{
				roquePossivel = true;
				
				for (i = -1; posX + i >= 1; i--)
				{
					if (posPec[P][posY][posX + i] || posPec[B][posY][posX + i])
					{
						roquePossivel = false;
						break;
					}
				}
				
				SposRei = structuredClone(posRei);
				
				SposRei[P][X] = posRei[P][X] - 1;
				
				if (emXeque(SposRei, posicoes, posPec, cor))
				{
					roquePossivel = false;
				}
				
				SposRei = structuredClone(posRei);
				
				SposRei[P][X] = posRei[P][X] - 2;
				
				if (emXeque(SposRei, posicoes, posPec, cor))
				{
					roquePossivel = false;
				}
				
				if (roquePossivel)
				{
					movimentos[posY][posX - 2] = true; 
				}
			}
		}
	}

}

function condicao(posX, posY, posicoes, posPec, cor)
{

	if (! ( ( posX >= 0 && posX <= 7 ) && ( posY >= 0 && posY <= 7 ) ) ) 
	{
		return false;
	}

	return !(posPec[P][posY][posX] || posPec[B][posY][posX]) || posPec[P][posY][posX] && cor === "brancas" || posPec[B][posY][posX] && cor === "pretas";
}

function condicaoPeao(posX, posY, posPec, cor)
{
	if (! ( ( posX >= 0 && posX <= 7 ) && ( posY >= 0 && posY <= 7 ) ) ) 
	{
		return false;
	}


	if(posPec[B][posY][posX] || posPec[P][posY][posX])

		return false;

	return true;		

}

function condicaoPeaoDgn(posX, posY, posPec, cor)
{
	if (! ( ( posX >= 0 && posX <= 7 ) && ( posY >= 0 && posY <= 7 ) ) ) 
	{
		return false;
	}

	if(cor === "brancas" && posPec[P][posY][posX] === true)

		return true;

	if(cor === "pretas" && posPec[B][posY][posX] === true)

		return true;

	return false;

}

function moniMovimentos(posX, posY, posPec, cor)
{

	let img = posicoes[posY][posX].style.backgroundImage;
	let imgDestino;

	// Os testes abaixo movem posRei temporariamente; guarda para restaurar no fim
	const reiBX = posRei[B][X], reiBY = posRei[B][Y];
	const reiPX = posRei[P][X], reiPY = posRei[P][Y];

	let SposRei = posRei;

	if (posicoes[posY][posX].style.backgroundImage.includes("rei"))
	{
		if (cor === "brancas")
		{
			SposRei[B][X] = posX;
			SposRei[B][Y] = posY;
		}
		if (cor === "pretas")
		{
			SposRei[P][X] = posX;
			SposRei[P][Y] = posY;
		}
	}

	for(let i = 0; i<8; i++)
	{

		for(let j=0; j<8; j++)
		{

			if(movimentos[i][j] === true)
			{

				imgDestino = posicoes[i][j].style.backgroundImage;

				posPec[B][posY][posX] = false;
				posPec[P][posY][posX] = false

				if(cor === "brancas")

					posPec[B][i][j] = true;

				else

					posPec[P][i][j] = true;

				posicoes[i][j].style.backgroundImage = img;
				posicoes[posY][posX].style.backgroundImage = "";

				SposRei = posRei;

				if (posicoes[i][j].style.backgroundImage.includes("rei"))
				{
					if (cor === "brancas")
					{
						SposRei[B][X] = j;
						SposRei[B][Y] = i;
					}
					if (cor === "pretas")
					{
						SposRei[P][X] = j;
						SposRei[P][Y] = i;
					}
				}

				if(emXeque(posRei, posicoes, posPec, cor))

					movimentos[i][j] = false;

 				posicoes[posY][posX].style.backgroundImage = img;
				posicoes[i][j].style.backgroundImage = imgDestino;
	
 				if(posicoes[i][j].style.backgroundImage)
				{
					if(cor === "brancas")
					{
						posPec[P][i][j] = true;
						posPec[B][i][j] = false;
					}

					else
					{
						posPec[B][i][j] = true;
						posPec[P][i][j] = false;
					}
				}
				else
				{
					posPec[B][i][j] = false;
					posPec[P][i][j] = false;
				}
 				if(cor === "brancas")

					posPec[B][posY][posX] = true;

				else  

					posPec[P][posY][posX] = true;

				//Verificação caso EnPassant

 				let imgEnPassant, imgEnpassantOposto;

 				if(cor==="brancas")
				{

					if(posicoes[posY][posX].style.backgroundImage.includes(PEAO_BRANCO) && posPec[P][posY-1][posX+1] === false && movimentos[posY-1][posX+1] === true)
					{

						imgEnpassantOposto = posicoes[posY][posX+1].style.backgroundImage;
						imgEnPassant = posicoes[posY][posX].style.backgroundImage;
						posicoes[posY][posX+1].style.backgroundImage = "";
						posicoes[posY][posX].style.backgroundImage = "";
						posicoes[posY-1][posX+1].style.backgroundImage = imgEnPassant;
						posPec[B][posY][posX] = false;
						posPec[B][posY-1][posX+1] = true;
						posPec[P][posY][posX+1] = false;

						if(emXeque(posRei, posicoes, posPec, cor))
	
							movimentos[i][j] = false;

						posicoes[posY][posX].style.backgroundImage = imgEnPassant;
						posicoes[posY][posX+1].style.backgroundImage = imgEnpassantOposto;
						posicoes[posY-1][posX+1].style.backgroundImage = imgEnPassant;
						posicoes[posY-1][posX+1].style.backgroundImage = "";
						posPec[B][posY][posX] = true;
						posPec[B][posY-1][posX+1] = false;
						posPec[P][posY][posX+1] = true;

					}

					if(posicoes[posY][posX].style.backgroundImage.includes(PEAO_BRANCO) && posPec[P][posY-1][posX-1] === false && movimentos[posY-1][posX-1] === true)
					{

						imgEnpassantOposto = posicoes[posY][posX-1].style.backgroundImage;
						imgEnPassant = posicoes[posY][posX].style.backgroundImage;
						posicoes[posY][posX-1].style.backgroundImage = "";
						posicoes[posY][posX].style.backgroundImage = "";
						posicoes[posY-1][posX-1].style.backgroundImage = imgEnPassant;
						posPec[B][posY][posX] = false;
						posPec[B][posY-1][posX-1] = true;
						posPec[P][posY][posX-1] = false;


						if(emXeque(posRei, posicoes, posPec, cor))

							movimentos[i][j] = false;
							
						posicoes[posY][posX].style.backgroundImage = imgEnPassant;
						posicoes[posY][posX-1].style.backgroundImage = imgEnpassantOposto;
						posicoes[posY-1][posX-1].style.backgroundImage = imgEnPassant;
 						posicoes[posY-1][posX-1].style.backgroundImage = "";
						posPec[B][posY][posX] = true;
						posPec[B][posY-1][posX-1] = false;
						posPec[P][posY][posX-1] = true;

					
					}

				}

 				if(cor==="pretas")
				{

					if(posicoes[posY][posX].style.backgroundImage.includes(PEAO_PRETO) && posPec[B][posY+1][posX+1] === false && movimentos[posY+1][posX+1] === true)
					{
						imgEnpassantOposto = posicoes[posY][posX+1].style.backgroundImage;
						imgEnPassant = posicoes[posY][posX].style.backgroundImage;
						posicoes[posY][posX+1].style.backgroundImage = "";
						posicoes[posY][posX].style.backgroundImage = "";
						posicoes[posY+1][posX+1].style.backgroundImage = imgEnPassant;
						posPec[P][posY][posX] = false;
						posPec[P][posY+1][posX+1] = true;
						posPec[B][posY][posX+1] = false;

						
						if(emXeque(posRei, posicoes, posPec, cor))

							movimentos[i][j] = false;

						posicoes[posY][posX].style.backgroundImage = imgEnPassant;
						posicoes[posY][posX+1].style.backgroundImage = imgEnpassantOposto;
						posicoes[posY+1][posX+1].style.backgroundImage = imgEnPassant;
						posicoes[posY+1][posX+1].style.backgroundImage = "";
						posPec[P][posY][posX] = true;
						posPec[P][posY+1][posX+1] = false;
						posPec[B][posY][posX+1] = true;


					}

					if(posicoes[posY][posX].style.backgroundImage.includes(PEAO_PRETO) && posPec[B][posY+1][posX-1] === false && movimentos[posY+1][posX-1] === true)
					{

						imgEnpassantOposto = posicoes[posY][posX-1].style.backgroundImage;
						imgEnPassant = posicoes[posY][posX].style.backgroundImage;
						posicoes[posY][posX-1].style.backgroundImage = "";
						posicoes[posY][posX].style.backgroundImage = "";
						posicoes[posY+1][posX-1].style.backgroundImage = imgEnPassant;
						posPec[P][posY][posX] = false;
						posPec[P][posY+1][posX-1] = true;
						posPec[B][posY][posX-1] = false;

						if(emXeque(posRei, posicoes, posPec, cor))

							movimentos[i][j] = false;

						posicoes[posY][posX].style.backgroundImage = imgEnPassant;
						posicoes[posY][posX-1].style.backgroundImage = imgEnpassantOposto;
						posicoes[posY+1][posX-1].style.backgroundImage = imgEnPassant;
						posicoes[posY+1][posX-1].style.backgroundImage = "";
						posPec[P][posY][posX] = true;
						posPec[P][posY+1][posX-1] = false;
						posPec[B][posY][posX-1] = true;

					}

				}

			}

		}

	}

	posRei[B][X] = reiBX;
	posRei[B][Y] = reiBY;
	posRei[P][X] = reiPX;
	posRei[P][Y] = reiPY;

}

function emXeque(posRei, posicoes, posPec, cor)
{

	let i;
	let j;

	// O rei adversário também ameaça as casas ao redor dele: dois reis nunca podem ficar lado a lado
	if (Math.abs(posRei[B][X] - posRei[P][X]) <= 1 && Math.abs(posRei[B][Y] - posRei[P][Y]) <= 1)

		return true;

	if(cor === "brancas")
	{

		//Xeque nas diagonais

		for(i = 0; i<4; i++)
		{

			cont = 0;

			NposXb = posRei[B][X];
			NposYb = posRei[B][Y];

			for(j = 0; j<8; j++)
			{

				if (! ( ( NposXb >= 0 && NposXb <= 7 ) && ( NposYb >= 0 && NposYb <= 7 ) ) ) 
				{
					break;
				}

				if((posPec[B][NposYb][NposXb] || posPec[P][NposYb][NposXb]) && !(posicoes[NposYb][NposXb].style.backgroundImage.includes(REI_BRANCO)))

					break;

				switch (i)
				{

					case 0:

						NposYb += - 1;
						NposXb += - 1;

						if (! ( ( NposXb >= 0 && NposXb <= 7 ) && ( NposYb >= 0 && NposYb <= 7 ) ) ) 
						{
							break;
						}

						if(cont === 0 && (posicoes[NposYb][NposXb].style.backgroundImage.includes(BISPO_PRETO) || posicoes[NposYb][NposXb].style.backgroundImage.includes(RAINHA_PRETA) || posicoes[NposYb][NposXb].style.backgroundImage.includes(PEAO_PRETO)))

							return true;

						if(!(cont===0) && posicoes[NposYb][NposXb].style.backgroundImage.includes(BISPO_PRETO) || posicoes[NposYb][NposXb].style.backgroundImage.includes(RAINHA_PRETA))

							return true;

						cont++;

						break;

					case 1:

						NposYb += -1;
						NposXb += +1;

						if (! ( ( NposXb >= 0 && NposXb <= 7 ) && ( NposYb >= 0 && NposYb <= 7 ) ) ) 
						{
							break;
						}

						if(cont === 0 && (posicoes[NposYb][NposXb].style.backgroundImage.includes(BISPO_PRETO) || posicoes[NposYb][NposXb].style.backgroundImage.includes(RAINHA_PRETA) || posicoes[NposYb][NposXb].style.backgroundImage.includes(PEAO_PRETO)))

							return true;

						if(!(cont===0) && posicoes[NposYb][NposXb].style.backgroundImage.includes(BISPO_PRETO) || posicoes[NposYb][NposXb].style.backgroundImage.includes(RAINHA_PRETA))

							return true;

						cont++;

						break;

					case 2:

						NposYb += +1;
						NposXb += +1;

						if (! ( ( NposXb >= 0 && NposXb <= 7 ) && ( NposYb >= 0 && NposYb <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYb][NposXb].style.backgroundImage.includes(BISPO_PRETO) || posicoes[NposYb][NposXb].style.backgroundImage.includes(RAINHA_PRETA))

							return true;

						cont++;

						break;

					case 3:

						NposYb += +1;
						NposXb += -1;

						if (! ( ( NposXb >= 0 && NposXb <= 7 ) && ( NposYb >= 0 && NposYb <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYb][NposXb].style.backgroundImage.includes(BISPO_PRETO) || posicoes[NposYb][NposXb].style.backgroundImage.includes(RAINHA_PRETA))

							return true;

						cont++;

						break;

				}

			}

		}	

		//Xeque na horizontal e vertical 

		for(i = 0; i<4; i++)
		{

			NposXb = posRei[B][X];
			NposYb = posRei[B][Y];

			for(j = 0; j<8; j++)
			{

				if (! ( ( NposXb >= 0 && NposXb <= 7 ) && ( NposYb >= 0 && NposYb <= 7 ) ) ) 
				{
					break;
				}

				if((posPec[B][NposYb][NposXb] || posPec[P][NposYb][NposXb]) && !(posicoes[NposYb][NposXb].style.backgroundImage.includes(REI_BRANCO)))

					break;

				switch (i)
				{

					case 0:

						NposYb += - 1;

						if (! ( ( NposXb >= 0 && NposXb <= 7 ) && ( NposYb >= 0 && NposYb <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYb][NposXb].style.backgroundImage.includes(TORRE_PRETA) || posicoes[NposYb][NposXb].style.backgroundImage.includes(RAINHA_PRETA))

							return true;

						break;

					case 1:

						NposYb += +1;

						if (! ( ( NposXb >= 0 && NposXb <= 7 ) && ( NposYb >= 0 && NposYb <= 7 ) ) ) 
						{
							break;
						}

						if((posicoes[NposYb][NposXb].style.backgroundImage.includes(TORRE_PRETA) || posicoes[NposYb][NposXb].style.backgroundImage.includes(RAINHA_PRETA)))

							return true;

						break;

					case 2:

						NposXb += -1;

						if (! ( ( NposXb >= 0 && NposXb <= 7 ) && ( NposYb >= 0 && NposYb <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYb][NposXb].style.backgroundImage.includes(TORRE_PRETA) || posicoes[NposYb][NposXb].style.backgroundImage.includes(RAINHA_PRETA))

							return true;

						break;

					case 3:

						NposXb += +1;

						if (! ( ( NposXb >= 0 && NposXb <= 7 ) && ( NposYb >= 0 && NposYb <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYb][NposXb].style.backgroundImage.includes(TORRE_PRETA) || posicoes[NposYb][NposXb].style.backgroundImage.includes(RAINHA_PRETA))

							return true;

						break;


				}

			}

		}

		//Xeque do cavalo

		for(i=0; i<4; i++)
		{

			NposXb = posRei[B][X];
			NposYb = posRei[B][Y];


			for(j = -1; j<=1; j++)
			{

				if(j===0)

					continue;

				NposYb = posRei[B][Y];
				NposXb = posRei[B][X];

				switch(i)
				{

					case 0:

						NposYb += +2;

						if (! ( ( NposXb+j >= 0 && NposXb+j <= 7 ) && ( NposYb >= 0 && NposYb <= 7 ) ) ) 
						{
							break;
						}
						
						if(posicoes[NposYb][NposXb+j].style.backgroundImage.includes(CAVALO_PRETO))
						{
							posReiXeque[NposYb][NposXb] = false;

							return true;
						}
						break;

					case 1:

						NposYb += -2;

						if (! ( ( NposXb+j >= 0 && NposXb+j <= 7 ) && ( NposYb >= 0 && NposYb <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYb][NposXb+j].style.backgroundImage.includes(CAVALO_PRETO))
						{
							posReiXeque[NposYb][NposXb] = false;

							return true;
						}
						break;

					case 2:

						NposXb += +2;

						if (! ( ( NposXb >= 0 && NposXb <= 7 ) && ( NposYb+j >= 0 && NposYb+j <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYb+j][NposXb].style.backgroundImage.includes(CAVALO_PRETO))
						{
							posReiXeque[NposYb][NposXb] = false;

							return true;
						}
						break;

					case 3:

						NposXb += -2;

						if (! ( ( NposXb >= 0 && NposXb <= 7 ) && ( NposYb+j >= 0 && NposYb+j <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYb+j][NposXb].style.backgroundImage.includes(CAVALO_PRETO))
						{
							posReiXeque[NposYb][NposXb] = false;

							return true;
						}
						break;

				}

			}

		}

	}

	if(cor === "pretas")
	{

		//Xeque na diagonal

		for(i = 0; i<4; i++)
		{

			cont = 0;

			NposXp = posRei[P][X];
			NposYp = posRei[P][Y];

			for(j = 0; j<8; j++)
			{

				if (! ( ( NposXp >= 0 && NposXp <= 7 ) && ( NposYp >= 0 && NposYp <= 7 ) ) ) 
				{
					break;
				}

				if((posPec[B][NposYp][NposXp] || posPec[P][NposYp][NposXp]) && !(posicoes[NposYp][NposXp].style.backgroundImage.includes(REI_PRETO)))

					break;

				switch (i)
				{

					case 0:

						NposYp += + 1;
						NposXp += + 1;

						if (! ( ( NposXp >= 0 && NposXp <= 7 ) && ( NposYp >= 0 && NposYp <= 7 ) ) ) 
						{
							break;
						}

						if(cont === 0 && (posicoes[NposYp][NposXp].style.backgroundImage.includes(BISPO_BRANCO) || posicoes[NposYp][NposXp].style.backgroundImage.includes(RAINHA_BRANCA) || posicoes[NposYp][NposXp].style.backgroundImage.includes(PEAO_BRANCO)))

								return true;

						if(!(cont===0) && posicoes[NposYp][NposXp].style.backgroundImage.includes(BISPO_BRANCO) || posicoes[NposYp][NposXp].style.backgroundImage.includes(RAINHA_BRANCA))

							return true;

						cont++;

						break;

					case 1:

						NposYp += +1;
						NposXp += -1;

						if (! ( ( NposXp >= 0 && NposXp <= 7 ) && ( NposYp >= 0 && NposYp <= 7 ) ) ) 
						{
							break;
						}

						if(cont === 0 && (posicoes[NposYp][NposXp].style.backgroundImage.includes(BISPO_BRANCO) || posicoes[NposYp][NposXp].style.backgroundImage.includes(RAINHA_BRANCA) || posicoes[NposYp][NposXp].style.backgroundImage.includes(PEAO_BRANCO)))

								return true;

						if(!(cont===0) && posicoes[NposYp][NposXp].style.backgroundImage.includes(BISPO_BRANCO) || posicoes[NposYp][NposXp].style.backgroundImage.includes(RAINHA_BRANCA))

							return true;

						cont++;

						break;

					case 2:

						NposYp += -1;
						NposXp += +1;

						if (! ( ( NposXp >= 0 && NposXp <= 7 ) && ( NposYp >= 0 && NposYp <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYp][NposXp].style.backgroundImage.includes(BISPO_BRANCO) || posicoes[NposYp][NposXp].style.backgroundImage.includes(RAINHA_BRANCA))

							return true;

						cont++;

						break;

					case 3:

						NposYp += -1;
						NposXp += -1;

						if (! ( ( NposXp >= 0 && NposXp <= 7 ) && ( NposYp >= 0 && NposYp <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYp][NposXp].style.backgroundImage.includes(BISPO_BRANCO) || posicoes[NposYp][NposXp].style.backgroundImage.includes(RAINHA_BRANCA))

							return true;

						cont++;

						break;

				}

			}

		}	

		//Xeque na horizontal e na vertical

		for(i = 0; i<4; i++)
		{

			NposXp = posRei[P][X];
			NposYp = posRei[P][Y];

			for(j = 0; j<8; j++)
			{

				if (! ( ( NposXp >= 0 && NposXp <= 7 ) && ( NposYp >= 0 && NposYp <= 7 ) ) ) 
				{
					break;
				}

				if((posPec[B][NposYp][NposXp] || posPec[P][NposYp][NposXp]) && !(posicoes[NposYp][NposXp].style.backgroundImage.includes(REI_PRETO)))

					break;

				switch (i)
				{

					case 0:

						NposYp += - 1;

						if (! ( ( NposXp >= 0 && NposXp <= 7 ) && ( NposYp >= 0 && NposYp <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYp][NposXp].style.backgroundImage.includes(TORRE_BRANCA) || posicoes[NposYp][NposXp].style.backgroundImage.includes(RAINHA_BRANCA))

							return true;

						break;

					case 1:

						NposYp += +1;

						if (! ( ( NposXp >= 0 && NposXp <= 7 ) && ( NposYp >= 0 && NposYp <= 7 ) ) ) 
						{
							break;
						}

						if((posicoes[NposYp][NposXp].style.backgroundImage.includes(TORRE_BRANCA) || posicoes[NposYp][NposXp].style.backgroundImage.includes(RAINHA_BRANCA)))

							return true;

						break;

					case 2:

						NposXp += -1;

						if (! ( ( NposXp >= 0 && NposXp <= 7 ) && ( NposYp >= 0 && NposYp <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYp][NposXp].style.backgroundImage.includes(TORRE_BRANCA) || posicoes[NposYp][NposXp].style.backgroundImage.includes(RAINHA_BRANCA))

							return true;

						break;

					case 3:

						NposXp += +1;

						if (! ( ( NposXp >= 0 && NposXp <= 7 ) && ( NposYp >= 0 && NposYp <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYp][NposXp].style.backgroundImage.includes(TORRE_BRANCA) || posicoes[NposYp][NposXp].style.backgroundImage.includes(RAINHA_BRANCA))

							return true;

						break;


				}

			}

		}

		//Xeque do cavalo

		for(i=0; i<4; i++)
		{

			NposXp = posRei[P][X];
			NposYp = posRei[P][Y];


			for(j = -1; j<=1; j++)
			{

				if(j===0)

					continue;

				NposYp = posRei[P][Y];
				NposXp = posRei[P][X];

				switch(i)
				{

					case 0:

						NposYp += +2;

						if (! ( ( NposXp+j >= 0 && NposXp+j <= 7 ) && ( NposYp >= 0 && NposYp <= 7 ) ) ) 
						{
							break;
						}
						
						if(posicoes[NposYp][NposXp+j].style.backgroundImage.includes(CAVALO_BRANCO))
						{
							posReiXeque[NposYp][NposXp] = false;

							return true;
						}
						break;

					case 1:

						NposYp += -2;

						if (! ( ( NposXp+j >= 0 && NposXp+j <= 7 ) && ( NposYp >= 0 && NposYp <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYp][NposXp+j].style.backgroundImage.includes(CAVALO_BRANCO))
						{
							posReiXeque[NposYp][NposXp] = false;

							return true;
						}
						break;

					case 2:

						NposXp += +2;

						if (! ( ( NposXp >= 0 && NposXp <= 7 ) && ( NposYp+j >= 0 && NposYp+j <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYp+j][NposXp].style.backgroundImage.includes(CAVALO_BRANCO))
						{
							posReiXeque[NposYp][NposXp] = false;

							return true;
						}
						break;

					case 3:

						NposXp += -2;

						if (! ( ( NposXp >= 0 && NposXp <= 7 ) && ( NposYp+j >= 0 && NposYp+j <= 7 ) ) ) 
						{
							break;
						}

						if(posicoes[NposYp+j][NposXp].style.backgroundImage.includes(CAVALO_BRANCO))
						{
							posReiXeque[NposYp][NposXp] = false;

							return true;
						}
						break;

				}

			}

		}

	}

}

function atualizarXeque(cor) {
    if (casaXeque)
        casaXeque.classList.remove("em-xeque");

    const lado = cor === "brancas" ? B : P;

    if (emXeque(posRei, posicoes, posPec, cor)) {
        casaXeque = posicoes[posRei[lado][Y]][posRei[lado][X]];
        casaXeque.classList.add("em-xeque");
    }
    else {
        casaXeque = null;
    }
}

// Chamada depois de cada lance (e depois da promoção).
// "cor" é o lado que vai jogar agora. Se nenhuma peça dele tem movimento legal
// e o rei dele está em xeque, é xeque-mate.
function moniMate(posX, posY, posicoes, movimentos, posPec, cor, enPassant)
{

	const lado = cor === "brancas" ? B : P;

	let achou = false;
	let i, j, a, b;

	for(i=0; i<8 && !achou; i++)

		for(j=0; j<8 && !achou; j++)
		{

			if (!posPec[lado][i][j])

				continue;

			// Cada peça é calculada sozinha, sem sobras das anteriores
			limpar(movimentos);

			if (cor === "brancas")
			{
				if (posicoes[i][j].style.backgroundImage.includes(PEAO_BRANCO)) {
					peao   (j, i, posicoes, movimentos, posPec, cor, enPassant, posRei);
				}
				if (posicoes[i][j].style.backgroundImage.includes(CAVALO_BRANCO)) {
					cavalo (j, i, posicoes, movimentos, posPec, cor, enPassant, posRei);
				}
				if (posicoes[i][j].style.backgroundImage.includes(TORRE_BRANCA)) {
					torre  (j, i, posicoes, movimentos, posPec, cor, enPassant, posRei);
				}
				if (posicoes[i][j].style.backgroundImage.includes(BISPO_BRANCO)) {
					bispo  (j, i, posicoes, movimentos, posPec, cor, enPassant, posRei);
				}
				if (posicoes[i][j].style.backgroundImage.includes(RAINHA_BRANCA)) {
					rainha (j, i, posicoes, movimentos, posPec, cor, enPassant, posRei);
				}
				if (posicoes[i][j].style.backgroundImage.includes(REI_BRANCO)) {
					rei    (j, i, posicoes, movimentos, posPec, cor, enPassant, posRei);
				}
			}
			else
			{
				if (posicoes[i][j].style.backgroundImage.includes(PEAO_PRETO)) {
					peao   (j, i, posicoes, movimentos, posPec, cor, enPassant, posRei);
				}
				if (posicoes[i][j].style.backgroundImage.includes(CAVALO_PRETO)) {
					cavalo (j, i, posicoes, movimentos, posPec, cor, enPassant, posRei);
				}
				if (posicoes[i][j].style.backgroundImage.includes(TORRE_PRETA)) {
					torre  (j, i, posicoes, movimentos, posPec, cor, enPassant, posRei);
				}
				if (posicoes[i][j].style.backgroundImage.includes(BISPO_PRETO)) {
					bispo  (j, i, posicoes, movimentos, posPec, cor, enPassant, posRei);
				}
				if (posicoes[i][j].style.backgroundImage.includes(RAINHA_PRETA)) {
					rainha (j, i, posicoes, movimentos, posPec, cor, enPassant, posRei);
				}
				if (posicoes[i][j].style.backgroundImage.includes(REI_PRETO)) {
					rei    (j, i, posicoes, movimentos, posPec, cor, enPassant, posRei);
				}
			}

			// Tira os movimentos que deixariam o próprio rei em xeque
			moniMovimentos(j, i, posPec, cor)

			for(a=0; a<8; a++)

				for(b=0; b<8; b++)

					if(movimentos[a][b] === true)

						achou = true;

		}

	limpar(movimentos);

	if(moniMaterial(posicoes, movimentos, posPec, cor, enPassant))
	{

		finalizarPartida = true;

		document.getElementById("mensagem-fim").style.display = "flex";
		document.getElementById("texto-fim").textContent = "Empate!";

	}	
	else
	{

		if (achou)
		{
			document.getElementById("mensagem-fim").style.display = "none";
			return;
		}

		// Sem nenhum movimento legal: só é xeque-mate se o rei estiver em xeque
		
		finalizarPartida = true;

		if (emXeque(posRei, posicoes, posPec, cor))
		{
			document.getElementById("mensagem-fim").style.display = "flex";
			document.getElementById("texto-fim").textContent = "Xeque-mate!";
			if(cor === "brancas")
				document.getElementById("detalhe-fim").textContent = "As pretas venceram!";
			else
				document.getElementById("detalhe-fim").textContent = "As brancas venceram!";
		}
		
		else
		{

			document.getElementById("mensagem-fim").style.display = "flex";
			document.getElementById("texto-fim").textContent = "Afogamento!";

		}

	}

}

function moniMaterial(posicoes, movimentos, posPec, cor, enPassant)
{

	let i, j;
	let contBb=0, contBp=0, contCb=0, contCp=0, contPeao=0;

	for(i=0; i<8; i++)
	{

		for(j=0; j<8; j++)
		{

			if(posicoes[i][j].style.backgroundImage.includes(BISPO_BRANCO))
			{

				contBb++;

			}

			if(posicoes[i][j].style.backgroundImage.includes(BISPO_PRETO))
			{

				contBp++;

			}

			if(posicoes[i][j].style.backgroundImage.includes(CAVALO_BRANCO))
			{

				contCb++;

			}

			if(posicoes[i][j].style.backgroundImage.includes(CAVALO_PRETO))
			{

				contCp++;

			}

			if(posicoes[i][j].style.backgroundImage.includes(TORRE_BRANCA) || posicoes[i][j].style.backgroundImage.includes(TORRE_PRETA))
			{

				return false;

			}

			if(posicoes[i][j].style.backgroundImage.includes(RAINHA_BRANCA) || posicoes[i][j].style.backgroundImage.includes(RAINHA_PRETA))
			{

				return false;

			}

			if(posicoes[i][j].style.backgroundImage.includes(PEAO_BRANCO) || posicoes[i][j].style.backgroundImage.includes(PEAO_PRETO))
			{

				contPeao++;

			}

		}

	}

	if((2<=contBb || 2<=contBp|| 2<=contCb || 2<=contCp) || 0<contPeao)
	{

		return false;

	}

	if((contBb && contCb) || (contBp && contCp))
	{

		return false;

	}

	return true;

}

function atualizarHistorico () 
{
	const momento =  {
		tabuleiro: [],
		posPec: structuredClone(posPec),
		posRei: structuredClone(posRei),
		roque: structuredClone(roque),
		enPassant: structuredClone(enPassant),
		cor: cor,
		finalizarPartida: finalizarPartida
	};
	
	momento.tabuleiro = new Array(8);
	
	for (let i = 0; i < 8; i++)
	{
		momento.tabuleiro[i] = new Array(8);
		for (let j = 0; j < 8; j++)
		{
			momento.tabuleiro[i][j] = posicoes[i][j].style.backgroundImage;
		}
	}
	
	historico.push(momento);
	tamMax++;
	lugAtu++;
}

function navegar (onde)
{
	limpar(movimentos);
	movendo = false;
	
	posPec = structuredClone(historico[onde].posPec);
	posRei = structuredClone(historico[onde].posRei);
	roque = structuredClone(historico[onde].roque);
	enPassant = structuredClone(historico[onde].enPassant);
	cor = historico[onde].cor;
	finalizarPartida = historico[onde].finalizarPartida;
	
	for (let i = 0; i < 8; i++)
	{
		for (let j = 0; j < 8; j++)
		{
			if (posicoes[i][j].style.backgroundImage != historico[onde].tabuleiro[i][j])
				posicoes[i][j].style.backgroundImage = historico[onde].tabuleiro[i][j];
		}
	}
	
	moniMate(0, 0, posicoes, movimentos, posPec, cor, enPassant)
	atualizarXeque(cor);
	
}

function atualizarPontos(peca, cor)
{
    if (peca == "")
        return;

    function adicionarPeca(container)
    {
        const novaPeca = document.createElement("div");

        novaPeca.classList.add("peca-capturada");
        novaPeca.style.backgroundImage = peca;

        container.appendChild(novaPeca);
		container.style.display = "flex";
    }

    if (cor === "brancas")
    {
		
   if (peca.includes("peao"))
        {
            adicionarPeca(pontosTomPeaoBr);
            pontosPr += 1;
			pontosBr -= 1;
        }
        else if (peca.includes("torre"))
        {
            adicionarPeca(pontosTomTorreBr);
            pontosPr += 5;
			pontosBr -= 5;
        }
        else if (peca.includes("cavalo"))
        {
            adicionarPeca(pontosTomCavaloBr);
            pontosPr += 3;
			pontosBr -= 3;
        }
        else if (peca.includes("bispo"))
        {
            adicionarPeca(pontosTomBispoBr);
            pontosPr += 3;
			pontosBr -= 3;
        }
        else if (peca.includes("rainha"))
        {
            adicionarPeca(pontosTomRainhaBr);
            pontosPr += 9;
			pontosBr -= 9;
        }
		
	}

	if (cor === "pretas")
    {
		
        if (peca.includes("peao"))
        {
            adicionarPeca(pontosTomPeaoPr);
            pontosBr += 1;
			pontosPr -= 1;
        }
        else if (peca.includes("torre"))
        {
            adicionarPeca(pontosTomTorrePr);
            pontosBr += 5;
			pontosPr -= 5;
        }
        else if (peca.includes("cavalo"))
        {
            adicionarPeca(pontosTomCavaloPr);
            pontosBr += 3;
			pontosPr -= 3;
        }
        else if (peca.includes("bispo"))
        {
            adicionarPeca(pontosTomBispoPr);
            pontosBr += 3;
			pontosPr -= 3;
        }
        else if (peca.includes("rainha"))
        {
            adicionarPeca(pontosTomRainhaPr);
            pontosBr += 9;
			pontosPr -= 9;
        }
		
    }

	if (pontosBr > 0)
		placarBr.textContent = "+" + pontosBr;
	else
	{
		if (pontosBr != 0)
			placarBr.textContent = pontosBr;
		else
			placarBr.textContent = "";
	}
	if (pontosPr > 0)
		placarPr.textContent = "+" + pontosPr;
	else
	{
		if (pontosPr != 0)
			placarPr.textContent = + pontosPr;
		else
			placarPr.textContent = "";
	}

}

function atualizarLista(info)
{
	/* Essa função é responsável por atualizar a lista de movimentos */
	
	let texto = "";
	
	let classe = info.cor === "brancas" ? "movBrancas" : "movPretas";
	
	if (cor === "pretas")
	{
		// Parte que numera a rodada
		texto += "<div class='numero'> <span>" + Contador++ + ". </span> </div>";
	}
	
	texto += "<div class='"+classe+"'> <span>";
	// Parte que declara a estrutura inicial do movimento
	
	switch(info.roque)
	{
	// para saber se é normal, roque longo ou roque curto
		case 0:
			
			texto += pecaParaLet(info.pecAntes);
			
			if (info.pecAntes.includes("torre"))
			{
				if (info.antesPosX == info.depoisPosX)
				{
					texto += 8 - info.antesPosY;
				}
				else
				{
					texto += posParaLet(info.antesPosX);
				}
			}
			// Coloca uma das posições para identificar qual torre moveu
			
			if (info.atacou)
			{
				if (info.pecAntes.includes("peao"))
				{
					texto += posParaLet(info.antesPosX);
				}
				texto += "x";
			}
			// Coloca a coluna do peão caso tome
			
			texto += posParaLet(info.depoisPosX);
			
			texto += (7 - info.depoisPosY + 1);
			
			if (info.promoveu)
			{
				texto += "=";
				
				texto += pecaParaLet(posicoes[info.depoisPosY][info.depoisPosX].style.backgroundImage);
			}
			// Coloca para o que promoveu
			
		break;
		case 1:
			texto += "O-";
			// Roque longo
		case 2:
			texto += "O-O";
			// Roque curto
	}
	
	texto += info.tipoAtaque;
	// Mostra se deu xeque, xeque-mate ou empate
	
	texto += "</span> </div>"
	// Fecha a estrutura
	
	listaDeMovimentos.innerHTML += texto;
	// Adiciona ao html
	
}

function pecaParaLet (peca)
{
	/* Transforma uma peça em uma letra (ou nada para o peão) */
	if(peca.includes(PEAO_BRANCO))
	{
		return "";
	}
	if(peca.includes(PEAO_PRETO))
	{
		return "";
	}
	
	if(peca.includes(TORRE_BRANCA))
	{
		return "T";
	}
	if(peca.includes(TORRE_PRETA))
	{
		return "T";
	}
	
	if(peca.includes(CAVALO_BRANCO))
	{
		return "C";
	}
	if(peca.includes(CAVALO_PRETO))
	{
		return "C";
	}
	
	if(peca.includes(BISPO_BRANCO))
	{
		return "B";
	}
	if(peca.includes(BISPO_PRETO))
	{
		return "B";
	}
	
	if(peca.includes(RAINHA_BRANCA))
	{
		return "D";
	}
	if(peca.includes(RAINHA_PRETA))
	{
		return "D";
	}
	
	if(peca.includes(REI_BRANCO))
	{
		return "R";
	}
	if(peca.includes(REI_PRETO))
	{
		return "R";
	}
}

function posParaLet (posicao)
{
	/* Transforma uma posição em sua respectiva letra */
	switch (posicao)
	{
		case 0 :
			return "a";
			break;
		case 1 :
			return "b";
			break;
		case 2 :
			return "c";
			break;
		case 3 :
			return "d";
			break;
		case 4 :
			return "e";
			break;
		case 5 : 
			return "f";
			break;
		case 6 :
			return "g";
			break;
		case 7 :
			return "h";
			break;
	}
}

/* Eventos */

posicoes[0][0].addEventListener('click', clicouP00);
posicoes[0][1].addEventListener('click', clicouP01);
posicoes[0][2].addEventListener('click', clicouP02);
posicoes[0][3].addEventListener('click', clicouP03);
posicoes[0][4].addEventListener('click', clicouP04);
posicoes[0][5].addEventListener('click', clicouP05);
posicoes[0][6].addEventListener('click', clicouP06);
posicoes[0][7].addEventListener('click', clicouP07);

posicoes[1][0].addEventListener('click', clicouP10);
posicoes[1][1].addEventListener('click', clicouP11);
posicoes[1][2].addEventListener('click', clicouP12);
posicoes[1][3].addEventListener('click', clicouP13);
posicoes[1][4].addEventListener('click', clicouP14);
posicoes[1][5].addEventListener('click', clicouP15);
posicoes[1][6].addEventListener('click', clicouP16);
posicoes[1][7].addEventListener('click', clicouP17);

posicoes[2][0].addEventListener('click', clicouP20);
posicoes[2][1].addEventListener('click', clicouP21);
posicoes[2][2].addEventListener('click', clicouP22);
posicoes[2][3].addEventListener('click', clicouP23);
posicoes[2][4].addEventListener('click', clicouP24);
posicoes[2][5].addEventListener('click', clicouP25);
posicoes[2][6].addEventListener('click', clicouP26);
posicoes[2][7].addEventListener('click', clicouP27);

posicoes[3][0].addEventListener('click', clicouP30);
posicoes[3][1].addEventListener('click', clicouP31);
posicoes[3][2].addEventListener('click', clicouP32);
posicoes[3][3].addEventListener('click', clicouP33);
posicoes[3][4].addEventListener('click', clicouP34);
posicoes[3][5].addEventListener('click', clicouP35);
posicoes[3][6].addEventListener('click', clicouP36);
posicoes[3][7].addEventListener('click', clicouP37);

posicoes[4][0].addEventListener('click', clicouP40);
posicoes[4][1].addEventListener('click', clicouP41);
posicoes[4][2].addEventListener('click', clicouP42);
posicoes[4][3].addEventListener('click', clicouP43);
posicoes[4][4].addEventListener('click', clicouP44);
posicoes[4][5].addEventListener('click', clicouP45);
posicoes[4][6].addEventListener('click', clicouP46);
posicoes[4][7].addEventListener('click', clicouP47);

posicoes[5][0].addEventListener('click', clicouP50);
posicoes[5][1].addEventListener('click', clicouP51);
posicoes[5][2].addEventListener('click', clicouP52);
posicoes[5][3].addEventListener('click', clicouP53);
posicoes[5][4].addEventListener('click', clicouP54);
posicoes[5][5].addEventListener('click', clicouP55);
posicoes[5][6].addEventListener('click', clicouP56);
posicoes[5][7].addEventListener('click', clicouP57);

posicoes[6][0].addEventListener('click', clicouP60);
posicoes[6][1].addEventListener('click', clicouP61);
posicoes[6][2].addEventListener('click', clicouP62);
posicoes[6][3].addEventListener('click', clicouP63);
posicoes[6][4].addEventListener('click', clicouP64);
posicoes[6][5].addEventListener('click', clicouP65);
posicoes[6][6].addEventListener('click', clicouP66);
posicoes[6][7].addEventListener('click', clicouP67);

posicoes[7][0].addEventListener('click', clicouP70);
posicoes[7][1].addEventListener('click', clicouP71);
posicoes[7][2].addEventListener('click', clicouP72);
posicoes[7][3].addEventListener('click', clicouP73);
posicoes[7][4].addEventListener('click', clicouP74);
posicoes[7][5].addEventListener('click', clicouP75);
posicoes[7][6].addEventListener('click', clicouP76);
posicoes[7][7].addEventListener('click', clicouP77);

promoRainhaBr.addEventListener('click', clicouRAB);
promoRainhaPr.addEventListener('click', clicouRAP);
promoTorreBr.addEventListener('click', clicouTOB);
promoTorrePr.addEventListener('click', clicouTOP);
promoBispoBr.addEventListener('click', clicouBIB);
promoBispoPr.addEventListener('click', clicouBIP);
promoCavaloBr.addEventListener('click', clicouCAB);
promoCavaloPr.addEventListener('click', clicouCAP);

btnInicio.addEventListener('click', clicouInicio);
btnMenos1 .addEventListener('click', clicouMenos1);
btnMais1.addEventListener('click', clicouMais1);
btnAtual.addEventListener('click', clicouAtual);
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

const P = 0;
const B = 1;

const X = 0;
const Y = 1;

/* Variáveis */

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

let posRei = new Array(2);

posRei[B] = new Array(2);
posRei[P] = new Array(2);

posRei[B][X] = 4;
posRei[P][X] = 4;
posRei[B][Y] = 7;
posRei[P][Y] = 0; 


let cor = "brancas";

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

/* Principal função */

function principal (posY, posX)
{
	if (promo)
	{
		return;
	}
	
	if (movendo)
	{
		if (movimentos[posY][posX])
		{
			mover(posX, posY, posSel, posPec, posicoes);
			posMov(posY, posX, posSel, cor, enPassant, posicoes, posRei);
			
			cor = cor === "brancas" ? "pretas" : "brancas";
			// Inverte o turno
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
			// Armazena onde selecionou
			
			mostrarBolinha(posicoes, movimentos);
			
			movendo = true;
		}
		
	}
	
}

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

function mover(posX, posY, posSel, posPec, posicoes) {

	posicoes[posY][posX].style.backgroundImage = posicoes[posSel[Y]][posSel[X]].style.backgroundImage;
	posicoes[posSel[Y]][posSel[X]].style.backgroundImage = "";
	
	if (posicoes[posY][posX].style.backgroundImage.includes("peao"))
	{
		if (cor === "brancas")
		{
			if (posX != posSel[X] && !(posPec[P][posY][posX]))
			{
				posPec[P][posY + 1][posX] = false;
				posicoes[posY + 1][posX].style.backgroundImage = "";
			}
		}
		if (cor === "pretas")
		{
			if (posX != posSel[X] && !(posPec[B][posY][posX]))
			{
				posPec[P][posY - 1][posX] = false;
				posicoes[posY - 1][posX].style.backgroundImage = "";
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
		}
		if (cor === "pretas")
		{
			posRei[P][X] = posX;
			posRei[P][Y] = posY;
		}
	}
	
}

function ativarPromo (cor)
{
	cor = cor === "brancas" ? "pretas" : "brancas";
	// Inverte a cor para voltar o turno para quem de fato está promovendo

	if(cor === "brancas"){
		promotBranco.style.display = "flex";
	}
	if(cor === "pretas"){
		promotPreto.style.display = "flex";
	}		
}


function peao   (posX, posY, posicoes, movimentos, posPec, cor, enPassant, posRei)
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


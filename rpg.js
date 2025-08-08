let nome = "Ketniss";
let classe = "Arqueiros";
let nivel = 10;
let vida = 100;
let ouro = 80;
let xp = 60;

console.log(`LORE DA HEROINA: Ketniss 🏹🔥`);
console.log(`${nome}, faz parte da classe dos ${classe} da floresta encantada de Panem, é conhecida por sua mira infalível e coragem inabalável.`);

const NOME_ARMA = "Arco de fogo";
let danoBase = 80; 
const NOME_ARMADURA = "Armadura de ferro";
const DEFESA_BASE = 50;

console.log(`Portando seu ${NOME_ARMA}, canaliza o poder das chamas sagradas para derrotar criaturas das sombras.`);
console.log(`Com nível ${nivel} e um dano base de ${danoBase},${nome} é uma lutadora poderosa.`);
console.log(`Protegida pela ${NOME_ARMADURA}, sua defesa base alcança ${DEFESA_BASE} pontos — o bastante para resistir a investidas brutais.`);

pontosBonusTreino = xp += 150; 
ouroRestante = ouro -= 30;
pontosDeVidaRecuperados = vida += 40;
armaEncantada =  danoBase *= 2;
 
console.log(`Após muitas missões cumpridas, acumula ${pontosBonusTreino} de XP e carrega ${ouroRestante} moedas de ouro, apos precisar comprar uma poção de recuperação, ela esta pronta para negociações em tavernas distantes.`);
console.log(`Com sua vida plena em ${pontosDeVidaRecuperados} pontos, ela segue preparada para o próximo confronto.`);

ataqueFinal = nivel + danoBase;
defesaFinal = DEFESA_BASE + (nivel / 2 ); 

console.log(`Seu ataque final atinge ${ataqueFinal} pontos de dano, capaz de perfurar até as escamas do Dragão da Nevoa.`);
console.log(`E com sua defesa final chegando a ${defesaFinal} pontos, protegendo-a contra os golpes mais ferozes.`);

vidaSulficiente = vida > 70; 
ataqueForte = ataqueFinal > 60;
nivelAvancado = nivel >= 10;
podeEnferntarGuardiao = vidaSulficiente && (ataqueForte || nivelAvancado)

console.log(`Será que ${nome} podera enfrentar o guardião?? ${podeEnferntarGuardiao}`);
console.log(`Com seu arco em punho e o coração firme, Ketniss avança para enfrentar o guardião, sabendo que só a coragem e a habilidade podem garantir a vitória`);

let vidaMaxima = 100;
let forca = 30; 
let defesa = 25;
let agilidade = 18;
let combatesVencidos = 1;
let localAtual = "Panem";
let missaoAtual = "Derrotar o guardião";

// Prólogo
console.log('PRÓLOGO');
console.log(`Após tres meses de treinamento intensivo ${nome} vem como uma grande ameça para o guardião. Será que ela o vencerá?? Antes disso ela precisa enfrentar uma série de desafios até o chegar no grande guardião`);

// Capitulo 1 
console.log("CAPITULO 1: Olympo");

console.log(`Antes de começar os desafios ${nome} deve escolher por qual caminho seguirá, sendo estes o misterioso caminho do Olympo e o arrepilante caminho do Jaguar. Qual sera que nossa arqueira escolherá??`);

let CaminhoOlympo = true; 
if (CaminhoOlympo) {
    xp += 20;
}

if(!CaminhoOlympo) {
    xp = xp/2;
}
console.log(`${nome} fez uma escolha arriscada mas dessa vez acertou!! Escolhendo o Olympo e ganhou +20 xp que podem ser necessarios mais pra frente. Entretanto o primeiro desafio do olympo nao depende apenas dela mas sim de sua quantidade de ouro ja que, precisara comprar uma capa de invisibilidade para passar pelos dementadores sem ser vista`);

if (ouro >= 200 ) {
    console.log(`Que sorte, nossa heroina consegue passar pelos dementadores sem problemas`);
    
} else {
    console.log(`Dessa vez nao deu para nossa guerreira passar ilesa, os dementadores a viram e agora ela tera que derotalos`);
    
}
let flechaEncatada = ataqueFinal * 3; 
//console.log(`${nome}`);
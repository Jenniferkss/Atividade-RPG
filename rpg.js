let nome = "Ketniss";
let classe = "Arqueiros";
let nivel = 10;
let vida = 100;
let ouro = 80;
let xp = 60;

console.log(`LORE DA HEROÍNA: Ketniss 🏹🔥`);
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
 
console.log(`Após muitas missões cumpridas, acumula ${pontosBonusTreino} de XP e carrega ${ouroRestante} moedas de ouro, após precisar comprar uma poção de recuperação, ela esta pronta para negociações em tavernas distantes.`);
console.log(`Com sua vida plena em ${pontosDeVidaRecuperados} pontos, ela segue preparada para o próximo confronto.`);

ataqueFinal = nivel + danoBase;
defesaFinal = DEFESA_BASE + (nivel / 2 ); 

console.log(`Seu ataque final atinge ${ataqueFinal} pontos de dano, capaz de perfurar até as escamas do Dragão da Nevoa.`);
console.log(`E com sua defesa final chegando a ${defesaFinal} pontos, protegendo-a contra os golpes mais ferozes.`);

vidaSulficiente = vida > 70; 
ataqueForte = ataqueFinal > 60;
nivelAvancado = nivel >= 10;
podeEnferntarGuardiao = vidaSulficiente && (ataqueForte || nivelAvancado)

console.log(`Será que ${nome} poderá enfrentar o guardião??`);
if (podeEnferntarGuardiao = true) {
    console.log(`${nome} está pronta e poderá enfrentar o guardião`);
} else {
    console.log(`${nome} ainda não esta preparada para este grande desafio.`);
    
}
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
console.log(`Após três meses de treinamento intensivo ${nome} vem como uma grande ameça para o guardião. Será que ela o vencerá?? Antes disso ela precisa enfrentar uma série de desafios até o chegar no grande guardião`);

// Capitulo 1 
console.log("CAPITULO 1: Olympo");

console.log(`Antes de começar os desafios ${nome} deve escolher por qual caminho seguirá, sendo estes o misterioso caminho do Olympo e o arrepiante caminho do Jaguar. Qual será que nossa arqueira escolherá??`);

let CaminhoOlympo = true; 
if (CaminhoOlympo) {
    xp += 20;
}

if(!CaminhoOlympo) {
    xp = xp/2;
}
console.log(`${nome} fez uma escolha arriscada,mas dessa vez acertou!! ${nome} escolheu o misterioso caminho do Olympo, ganhando +20 XP — uma decisão arriscada que pode valer muito a pena.Entretanto, o primeiro desafio do Olympo não depende apenas dela mas, também da sua quantidade de ouro ja que, precisará comprar uma capa de invisibilidade para passar pelos dementadores sem ser vista`);

if (ouro >= 200 ) {
    console.log(`Que sorte, nossa heroína consegue passar pelos dementadores sem problemas`);
    
} else {
    console.log(`Dessa vez não deu para nossa guerreira passar ilesa, os dementadores a viram e agora ela tera que derotá-los`);
    
}

let flechaEncatada = ataqueFinal * 3; 
let vidaDementador = 100;
let dementadoresRestantes = 3; 
let danoRestante = flechaEncatada;

console.log(`${nome} deve lutar contra 3 dementadores; se ela ganhar a batalha, poderá continuar sua missão se perder... algo ruim pode lhe acontecer.Ela deve derotar os 3 dementadores se um deles resistir ela deve escolher entre seu ataque surpresa ou enfrentá-los novamente correndo riscos de perder bons pontos de vida. E lá vai ela...`);

if (danoRestante >= 100) {
    dementadoresRestantes --;
    danoRestante -= 100;
    console.log(`Nossa heroína ja derrotou um dos dementadores, agora restam ${dementadoresRestantes}`); 
}  else {
    console.log(`O primeiro dementador resistiu ao ataque de ${nome}!! ainda restam ${dementadoresRestantes}`);
}

if (danoRestante >= 100) {
    dementadoresRestantes --;
    danoRestante -= 100;
    console.log(`E ela vence mais um!!! Agora restam ${dementadoresRestantes}`);
} else {
    console.log(`Mais um dementador resistente! O que nossa heroína fará agora?? Ela tentara destriuir o proximo dementador ou usará um ataque supresa para destrui-los de uma só vez?`);
} 
let ataqueSurpresa = danoRestante * 80; 

if (dementadoresRestantes >= 2) {
    vidaDementador -= ataqueSurpresa;
    dementadoresRestantes = 0;
    console.log(`Todos os dementadores foram derrotados,ou seja restam ${dementadoresRestantes}`);
}   else if (dementadoresRestantes === 1) {
     vida -= 50; 
     console.log(`Agora ${nome} deve escolher entre seu ataque surpresa ou enfrentar novamente os dementadores.O que será que ela fará??`);
     
    console.log(`Ela tenta enfrentá-los novamente, mas os dementadores a ferem, e sua vida cai para ${vida} mas ela ainda pode seguir com a missão.`);
}   else {
   console.log(`Todos os dementadores foram derrotados e nossa heroína pode avançar sem sua missão!`);
}

// Capitulo 2: 
console.log(`Nessa nova etapa da missão ${nome} deve enfrentar a sombria floresta negra. No meio de seu caminho ela se depara com um misterioso objeto.`);

let objetoMisterioso = 60; // Objeto recarrega 60 pontos de vida se tocado. 
if (objetoMisterioso >= 60) {
    vida += objetoMisterioso;
} console.log(`Ao tocar o objeto ela teve 60 pontos de vida recuperados.EW agora segue em frente em busca do próximo obstaculo. Mais a frente ela encontra um portal e ao se aproximar percebe que é necessario expor sua classe, ja que a entrada é limitada para classes especificas. `);

if (classe === "Arqueiros") {
    console.log("Surpreendentemente sua classe foi aceita, e ela podera continuar para o proximo desafio.");
} else {
   console.log(`Infelizmente sua classe não foi aceita e ela terá que voltar ao inicio da floresta e resolver o misterio escondido.`);
}; 

// Capitulo 3 
console.log(`${nome} ao entrar no portal é levada a um multiverso totalmente desconhecido por si, algo como um futuro distante.Ao abrir os olhos ela se depara com um gigante a observando, assustada decide correr mas não consegue, se sente lenta mas avista uma poção ao longe e decide ir até la.`);
let concluiuMissao = true;
let poçãoFlash = 50; // Poção Flash custa 50 ouros
if (ouroRestante >= 50) {
    ouroRestante -= poçãoFlash;
    console.log(`Ela consegue alcançar a poção e a compra por 50 ouros, ficando então com ${ouroRestante} ouros e conclui a primeira parte da missão.`);
    concluiuMissao = true;
    console.log(`Missão 2 concluida com sucesso 🎉Avance para proxima fase!`);
    
}   else {
    console.log(`Ela alcança a poção mas não consegue a comprar ja que não possui ouro sulficiente e terá que voltar ao inicio da missão`);
    concluiuMissao = false; 
    console.log(`Missão não concluida 😥 Reinicie a fase e tente novamente!`);
    
};
 //Epílogo
if (concluiuMissao === true) {
    console.log(`${nome} segue para a proxima fase onde finalmente enfrentará o grande Guardião. Será que nossa heroína conseguirá vence-ló?? Agora depende apenas dela.`);
};
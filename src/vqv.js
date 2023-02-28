/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (string, numero) => {
  if (string === undefined && numero === undefined) {
    return undefined;
  }

  const mensagem = `Oi, meu nome é ${string}!\n`;
  const idade = `Tenho ${numero} anos,\n`;
  const trabalho = `trabalho na Trybe e mando muito em programação!\n`;
  const hashtag = `#VQV!`;

  return mensagem + idade + trabalho + hashtag;
};


module.exports = vqv;

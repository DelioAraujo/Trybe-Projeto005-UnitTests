const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:



    // Teste se productDetails é uma função.

    expect (typeof productDetails).toBe("function")

    // Teste se o retorno da função é um array.
    const Retorno = productDetails("item1", "item2");
    const tipoRetorno = Array.isArray(Retorno)

    expect(tipoRetorno).toBeTruthy()


    // Teste se o array retornado pela função contém dois itens dentro.

    expect(Retorno.length).toBe(2)

    // Teste se os dois itens dentro do array retornado pela função são objetos.

    let objetos = false
    if(typeof Retorno[0]==="object" && typeof Retorno[1]==="object"){ objetos = true}

    expect(objetos).toBeTruthy()

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    let diferentes = false
    const produto1Name=Retorno[0].name;
    const produto2Name=Retorno[1].name;

    const produto1Id=Retorno[0].details.productId
    const produto2Id=Retorno[1].details.productId

    if(produto1Name!==produto2Name && produto1Id!== produto2Id){diferentes=true}

    expect(diferentes).toBeTruthy()

    // Teste se os dois productIds terminam com 123.

    const ultimosDigitos1 = produto1Id.substring(produto1Id.length-3)
    const ultimosDigitos2 = produto2Id.substring(produto2Id.length-3)

    let ultimosDigitosIguais = false
    if(ultimosDigitos1===ultimosDigitos2){ultimosDigitosIguais=true}

    expect(ultimosDigitosIguais).toBeTruthy()

  });
});

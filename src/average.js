/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const validateArrayTypeNumberAndLength = (array) => {
  if (!array) {
    return undefined;
  }

  if (array.length < 1) {
    return undefined;
  }

  for (let item of array) {
    if (typeof item !== 'number') {
      return undefined;
    }
  }
  return true;
};

const average = (array) => {
  if (!validateArrayTypeNumberAndLength(array)) {
    return undefined;
  }

  let soma = 0;
  for (let item of array) {
    soma += item;
  }
  const media = Math.round(soma / array.length);
  return media;
};

const array = [1, 2, 3, 4, 5];
console.log(average(array));
module.exports = average;

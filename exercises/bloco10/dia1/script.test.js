const { it, expect } = require('@jest/globals')
const sum = require('./script')

describe('Uma que função deve retornar a soma de dois parâmetros', () => {
  it('Testa se o retorno de 4 + 5 é igual a 9', () => {
    expect(9).toBe(sum(4,5))
  })

  it('Testa se o retorno de 0 + 0 é igual a 0', () => {
    expect(0).toBe(sum(0,0))
  })

  it('Testa se um parâmetro recebendo uma string de valor 5, retorna uma erro', () => {
    expect(() => sum(4,'5').toThrow())
  })
})




import pegaArquivo from '../index.js';

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pegaArquivo::', () => {
  it('must be a function', () => {
    expect(typeof pegaArquivo).toBe('function');
  })
  it('must return a array with results', async () => {
    const result = await pegaArquivo('C:/Users/Filip/Desktop/Codigo/Alura/Node - Biblioteca/LIB-MARKDOWN/test/arquivos/texto1.md')
    expect(result).toEqual(arrayResult)
  })
  it('must return a message: "não há links"', async () => {
    const result = await pegaArquivo('C:/Users/Filip/Desktop/Codigo/Alura/Node - Biblioteca/LIB-MARKDOWN/test/arquivos/texto2.md')
    expect(result).toBe('não há links')
  })
} )

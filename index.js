//import chalk from 'chalk'
import fs from 'fs'

 // const texto = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'



function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null ){
        arrayResultados.push({[temp[1]]: temp[2]})
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function trataErro(erro){
    throw new Error(erro.code, 'Não há arquivos');
}

export default async function pegaArquivo (caminhoDoArquivo){
    const encoding = 'utf-8';
    //js tentará executar o try
    try{
        const texto =await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    } catch (erro){
        trataErro(erro)
    }
}

//pegaArquivo('./arquivos/texto1.md');

//module.exports = pegaArquivo;


// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises.readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(texto))
//     .catch((erro) => trataErro(erro))
// }

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, data) => {
//         if (erro){
//             trataErro(erro);
//         }
//         console.log(chalk.blue(data));
//     } )
// }


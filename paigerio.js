import chalk from 'chalk'
import fs from 'fs'

function getPlayers(texto){
    const regex = /\((.*?)\)\[(.*?)\]/gm;
    let arrayResults = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResults.push({[temp[1]]: temp[2]})
    }

    return arrayResults;

}

function lancaErro (erro){
   throw new Error (chalk.red(erro));
}

async function getPath(caminhoDoArquivo){
    const encode = 'utf-8'
    try{
        let texto = await fs.promises.readFile(caminhoDoArquivo, encode)
        console.log(getPlayers(texto))
    } catch(err){
        lancaErro(err)
    }
    
}
//'./arquivos/escalacao.md' /\((.*?)\)\[(.*?)\]/gm

getPath('./arquivos/escalacao.md')

//Async await (Aconteceu primeiro, antes de executar)


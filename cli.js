import urlCheck from './httpValidacao.js';
import chalk from 'chalk';
import pegaArquivo from './index.js';

const caminho = process.argv;

async function processaTexto (caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('validado!'), await urlCheck(resultado))
    } else{
        console.log(chalk.yellow('Lista de Links'), resultado)

    }
}

processaTexto(caminho);
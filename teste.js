import chalk from 'chalk'
let arr = ["16/03", "19/03", "23/03", "10/04", "17/04" ]

function trataErro(erro){
    throw new Error(chalk.red(erro)) 
}

async function saoPauloJogaHj (dataHoje){

    try{
         if(arr.includes(dataHoje)){
            console.log("Joga hoje sim, meu guerreiro")
        } else {
            console.log("Infelizmente não joga hj")
        }
    } catch (erro){
        trataErro(erro)
    }
}

saoPauloJogaHj("16/04")
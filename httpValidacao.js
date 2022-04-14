import fetch from "node-fetch";

function manejaErro(erro){
    throw new Error(erro.message);
}

//Async esperar acontecer pra mandar resposta pra frente
async function statusCheck(arrayUrl){
    try{
        const arrayStatus = await Promise
        .all(arrayUrl
            .map( async url => {
                const res = await fetch(url);
                return res.status;
            }))
    return arrayStatus
    } catch (erro){
        manejaErro(erro);
    }
    
}

function getUrlArray (arrayLink){
    return arrayLink
        .map(linkObject => Object
                .values(linkObject).join())
}

export default async function urlCheck(arrayLink){
    const links = getUrlArray(arrayLink);
    const statusLinks = await statusCheck(links);
    const result = arrayLink.map((object, index) => ({
        ...object, stts: statusLinks[index]  
    }))
    return result;
}

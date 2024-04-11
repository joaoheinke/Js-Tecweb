const axios = require("axios");

async function get_token(){
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }

    return axios
        .post("https://tecweb-js.insper-comp.com.br/token", { username: "joaovhs1" }, config)
        .then((response) => response.data.accessToken);
}


async function get_exercises(token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    return axios
        .get("https://tecweb-js.insper-comp.com.br/exercicio", config2)
        .then((response) => response.data)
}

async function main(){
    let token = await get_token();
    let exercises = await get_exercises(token);
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    
    let a = exercises.soma.entrada.a;
    let b = exercises.soma.entrada.b; 
    let result = soma(a, b);
    console.log(result);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/soma", {'resposta': result}, config2)
    .then((response) => console.log(response.data))
    
    
}

main();

function soma(a, b){
  return a + b;
}

function tamanhoDaString(str) {
  return str.length;
}

function extractUsername(email) {

    const parts = email.split('@');
    const username = parts[0];

    return username;
}

function calcularAlcanceJaca(v, theta) {
    const g = 9.8; 
    const raioEspalhamento = 2;
    const distanciaAlvo = 100;

    const thetaRad = (theta * Math.PI) / 180;

    const alcance = (Math.pow(v, 2) * Math.sin(2 * thetaRad)) / g;

    if (Math.abs(distanciaAlvo - alcance) <= raioEspalhamento) {
        return 0; 
    } else if (alcance > distanciaAlvo) {
        return 1; 
    } else {
        return -1; 
    }
}

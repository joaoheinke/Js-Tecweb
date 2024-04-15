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
    console.log(exercises);
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
    .then((response) => console.log(response.data));

    let palavra = exercises['tamanho-string'].entrada.string;
    let qntd_caracter = tamanhoString(palavra);
    console.log(qntd_caracter);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/tamanho-string", {'resposta': qntd_caracter}, config2)
    .then((response) => console.log(response.data));

    let pessoa = exercises['nome-do-usuario'].entrada.email;
    let nome = nomeUsuario(pessoa);
    console.log(nome);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/nome-do-usuario", {'resposta': nome}, config2)
    .then((response) => console.log(response.data));

    
    let V = exercises['jaca-wars'].entrada.v;
    let theta = exercises['jaca-wars'].entrada.theta;
    let resultado = jacaWars(V, theta);
    console.log(resultado);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/jaca-wars", {'resposta': resultado}, config2)
    .then((response) => console.log(response.data));

    
    let year = exercises['ano-bissexto'].entrada.ano;
    let bissexto = anoBissexto(year);
    console.log(bissexto);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/ano-bissexto", {'resposta': bissexto}, config2)
    .then((response) => console.log(response.data));

    
    let raio = exercises['volume-da-pizza'].entrada.z;
    let altura = exercises['volume-da-pizza'].entrada.a;
    let volume = volumePizza(raio, altura);
    console.log(volume);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/volume-da-pizza", {'resposta': volume}, config2)
    .then((response) => console.log(response.data));

    let s0 = exercises.mru.entrada.s0;
    let v = exercises.mru.entrada.v;
    let t = exercises.mru.entrada.t;
    let s = mru(s0, v, t);
    console.log(s);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/mru", {'resposta': s}, config2)
    .then((response) => console.log(response.data));

    
    let string_normal = exercises['inverte-string'].entrada.string;
    let string_invertida = inverteString(string_normal);
    console.log(string_invertida);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/inverte-string", {'resposta': string_invertida}, config2)
    .then((response) => console.log(response.data));

    
    let objeto1 = exercises['soma-valores'].entrada.objeto;
    let contagem = somaValores(objeto1);
    console.log(soma);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-valores", {'resposta': contagem,}, config2)
    .then((response) => console.log(response.data));

}

main();

const soma = function(a, b){
    return a + b;
}

const tamanhoString = function(string){
    return string.length;
}

const nomeUsuario = function(email){
    let nome = email.split('@')[0];
    return nome;
}

const jacaWars = function(v, theta){
    let g = 9.8; 
    let raioEspalhamento = 2;
    let distanciaAlvo = 100;

    let thetaRad = (theta * Math.PI) / 180;

    let alcance = (Math.pow(v, 2) * Math.sin(2 * thetaRad)) / g;

    if (Math.abs(distanciaAlvo - alcance) <= raioEspalhamento) {
        return 0; 
    } else if (alcance > distanciaAlvo) {
        return 1; 
    } else {
        return -1; 
    }
}

const anoBissexto = function(ano){
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

const volumePizza = function(raio, altura){
    volume = Math.PI * (raio**2) * altura;
    return Math.round(volume); 
}

const mru = function(s0, v, t){
    s = s0 + v*t
    return s;
}

const inverteString = function(string){
    return string.split('').reverse().join('');
}

const somaValores = function(objeto){
    let somaTotal = 0;
    for (let chave in objeto) {
        somaTotal += objeto[chave];
        }
    return somaTotal;
}   



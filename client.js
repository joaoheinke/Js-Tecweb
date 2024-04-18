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

    let n = exercises['n-esimo-primo'].entrada.n;
    let enesimo = enesimoPrimo(n);
    console.log(enesimo);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/n-esimo-primo", {'resposta': enesimo}, config2)
    .then((response) => console.log(response.data));

    let arr = exercises['maior-prefixo-comum'].entrada.strings;
    let prefixo = maiorPrefixoComum(arr);
    console.log(prefixo);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/maior-prefixo-comum", {'resposta': prefixo}, config2)
    .then((response) => console.log(response.data));

    let numeroS = exercises['soma-segundo-maior-e-menor-numeros'].entrada.numeros;
    let somaS = somaSegundoMaiorMenor(numeroS);
    console.log(somaS);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-segundo-maior-e-menor-numeros", {'resposta': somaS}, config2)
    .then((response) => console.log(response.data));

    let palindromoS = exercises['conta-palindromos'].entrada.palavras;
    let contador = contarPalindromos(palindromoS);
    console.log(contador);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/conta-palindromos", {'resposta': contador}, config2)
    .then((response) => console.log(response.data));

    let array = exercises['soma-de-strings-de-ints'].entrada.strings;
    let somaArray = somaValoresInteiros(array);
    console.log(somaArray);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-de-strings-de-ints", {'resposta': somaArray}, config2)
    .then((response) => console.log(response.data));

    async function somaRequisicoes(endpoints) {
        let lista = [];
        for (let endpoint in endpoints) {
            let url = await axios.get(endpoints[endpoint],config2);
            lista.push(url.data);
        }
        let soma = lista.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        return soma;
    }

    let endpoint = exercises['soma-com-requisicoes'].entrada.endpoints;
    let somaReq = await somaRequisicoes(endpoint);
    console.log(somaReq);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-com-requisicoes", {'resposta': somaReq}, config2)
    .then((response) => console.log(response.data));

    async function cacaAoTesouro(url) {
        while(typeof url !== 'number') {
            console.log(url);
            url = await axios.get(url, config2);
            
        }
        return url;
    }

    let url = exercises['caca-ao-tesouro'].entrada.inicio;
    let tesouro = await cacaAoTesouro(url);
    console.log(tesouro);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/caca-ao-tesouro", {'resposta': tesouro}, config2)
    .then((response) => console.log(response.data));

}

main();

// Funções

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

const enesimoPrimo = function(n) {
    let contador = 0;
    let numeroAtual = 2;
  
    while (contador < n) {
      if (ePrimo(numeroAtual)) {
        contador++;
      }
      numeroAtual++;
    }
  
    return numeroAtual - 1;
  }
  
const ePrimo = function(numero) {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
        return false;
        }
    }
    return true;
}

const maiorPrefixoComum = function(arr) {
    if (arr.length < 2){
        return '';
    }
    arr.sort();

    let maior = '';

    for (let i = 0; i < arr.length-1; i++) {
        let pAtual = preComum(arr[i], arr[i+1]);
        if (pAtual.length > maior.length) {
            maior = pAtual;
        }
        
    }
    return maior;

}

const preComum = function(str1, str2) {
    let prefixo = '';
    let tamanho = Math.min(str1.length, str2.length);
    for (let i = 0; i < tamanho; i++) {
        if (str1[i] === str2[i]) {
            prefixo += str1[i];
        } else {
            break;
        }
    }
    return prefixo;

}

const somaSegundoMaiorMenor = function(numeros) {
    if (numeros.length < 2) {
      return 'Array deve ter pelo menos 2 elementos';
    }
  
    let sortedArray = numeros.slice().sort((a, b) => a - b);
    let segundoMenor = sortedArray[1];
    let segundoMaior = sortedArray[sortedArray.length - 2];
  
    return segundoMaior + segundoMenor;
  }

const contarPalindromos = function(Palindromos) {
    let contador = 0;

    for (let palavra of Palindromos) {
        if (ePalindromo(palavra)) {
        contador++;
        }
    }

    return contador;
}

const ePalindromo = function(palavra) {
    const tamanho = palavra.length;
    for (let i = 0; i < tamanho / 2; i++) {
        if (palavra[i] !== palavra[tamanho - 1 - i]) {
        return false;
        }
    }
    return true;
}

const somaValoresInteiros = function(array) {
    const valoresInteiros = array.map(str => parseInt(str, 10));
    const soma = valoresInteiros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return soma;
  }








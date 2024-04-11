const axios = require("axios");

const config = {
    headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

axios
    .post("https://tecweb-js.insper-comp.com.br/token", { username: "joaovhs1" }, config)
    .then((response) => {
        token = response.data.accessToken;
        console.log(token);

        const config2 = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        axios
            .get("https://tecweb-js.insper-comp.com.br/exercicio", config2)
            .then((response) => console.log(response))

    });



// console.log(token);

function soma(a, b){
  return a + b;
}

function tamanhoDaString(str) {
  return str.length;
}
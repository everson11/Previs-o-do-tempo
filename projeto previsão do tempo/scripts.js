let chave = "4f9f157845f89b5dca39c911150901b2"

function colocaNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/w/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".input-cidade").addEventListener("keyup", pesquisarEnter)

}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
        cidade + 
        "&appid=" + 
        chave + 
        "&lang=pt_br" + 
        "&units=metric" 
    )
    .then(resposta => resposta.json())

    colocaNaTela(dados)
}

function pesquisarEnter(event){
    if(event.keyCode == 13){
        cliqueiNoBotao()
    }
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value    

    buscarCidade(cidade)
}







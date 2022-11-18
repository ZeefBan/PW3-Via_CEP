//Seleciona os elementos input e button
var input = document.querySelector('.input')
var button = document.querySelector('.btn')


button.onclick = buscarCEP

function buscarCEP(){
    //capturar conteudo do input
    let cep = input.value

    VerificarCEP(cep)

}
    function VerificarCEP (){
        let url = `https://viacep.com.br/ws/${cep}/json/`

    }

function VerificarCEP(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
    .then(response =>{

        return response.json()
    })
    .then(response =>{

        let tags = ['tr','td','td','td','td','td','td','td']
        let ListaDeTags = []
        
        ListaDeTags = CriarTags(tags, ListaDeTags)
        preencherTds(ListaDeTags, response)
        
        inserirNaTela(ListaDeTags)
    })

}

function CriarTags(tags, ListaDeTags){

    tags.forEach(textoTag => {
        //criar tags
        let tag = document.createElement(textoTag)
        //guarda as tags detro do Lista de tags     
        ListaDeTags.push(tag)
    })

    return ListaDeTags

}

function preencherTds(ListaDeTags, response){

        ListaDeTags[1].textContent = response.cep
        ListaDeTags[2].textContent = response.logradouro
        ListaDeTags[3].textContent = response.complemento
        ListaDeTags[4].textContent = response.bairro
        ListaDeTags[5].textContent = response.localidade
        ListaDeTags[6].textContent = response.uf
        ListaDeTags[7].textContent = response.ddd

}

function inserirNaTela(ListaDeTags){
    let body = document.querySelector('.CorpoTabela')

    body.appendChild(ListaDeTags[0])

    for (let contador = 1; contador < ListaDeTags.length; contador++) {

        ListaDeTags[0].appendChild(ListaDeTags[contador])

    }
        
    
    

}



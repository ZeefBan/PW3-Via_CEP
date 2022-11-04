//Seleciona os elementos input e button
var input = document.querySelector('input')
var button = document.querySelector('.btn')

button.onclick = buscarCEP

function buscarCEP(){
    let cep = input.value
    input.value=""
    let tags = ['td','tr','tr','tr','tr','tr','tr','tr']
    ListaDeTags = []
    ListaDeTags = CriarTags(tags, ListaDeTags)

    VerificarCEP(cep, ListaDeTags)


}

function VerificarCEP(cep, ListaDeTags){
    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
    .then(response =>{

        return response.json()
    })
    .then(response =>{
        ListaDeTags[1].textContent = response.cep
        ListaDeTags[2].textContent = response.logradouro
        ListaDeTags[3].textContent = response.complemento
        ListaDeTags[4].textContent = response.bairro
        ListaDeTags[5].textContent = response.cidade
        ListaDeTags[6].textContent = response.uf
        ListaDeTags[7].textContent = response.ddd


        console.log(response)
    })
}

function CriarTags(tags, ListaDeTags){

    tags.forEach(textoTag => {
        let tag = document.createElement(textoTag)
        ListaDeTags.push(tag)
    })

    return ListaDeTags

}



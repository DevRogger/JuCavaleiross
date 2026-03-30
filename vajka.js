var bortao = document.querySelector('.icone')
var conteudo = document.querySelector('.backmenu')

bortao.addEventListener('click',()=>{
  conteudo.classList.toggle('ativar')
})

var slide = document.querySelector(".slide")
var radios = document.querySelectorAll('input[name="slider"]')
var letras = document.querySelector(".back-123")
var index = 0

var slide = document.querySelector(".slide")
var radios = document.querySelectorAll("input[type='radio']")
var index = 0

function nextslide() {
  index++

  if (index >= radios.length) {
    index = 0
  }

  // mover slide
  slide.style.transform = `translateX(-${index * 100}%)`

  // marcar radio correto
  radios[index].checked = true
}

// troca automático a cada 2 segundos
setInterval(nextslide, 5000)

radios.forEach(radio => {
  radio.addEventListener("change", function() {
    index = parseInt(this.value)
    document.querySelector(".back-123").classList.add("active")
    slide.style.transform = `translateX(-${index * 100}%)`

  })
})

// RADIO BUTTNS



// LISTA DE PRODUTOS

var item = []

var botao = document.querySelector("input[type='button']")
var listaProduto = document.querySelector(".lista")

function listaProdutos() {
  if (!listaProduto) return;

  listaProduto.innerHTML = ""
  var soma = 0;

  item.forEach(function (val) {
    soma += (val.preco*1);

    listaProduto.innerHTML += `
    <div class="item">
      <p class="item-nome">${val.nome}</p>
      <p class="item-preco">R$ ${val.preco.toFixed(2)}</p>
    </div>`
  })

  document.querySelector(".procototal").innerHTML =
  `TOTAL: R$ ${soma.toFixed(2)}`

}

if (botao) {
  botao.addEventListener("click", function (e) {
    e.preventDefault()

    var nomeProduto = document.querySelector("#pesquisa").value
    var preco = document.querySelector("#ivalor").value

    if (nomeProduto.trim() === "" || preco.trim() === "") {
      alert("Preencha todos os campos!")
      return
    }

    if (isNaN(preco)) {
      alert("Valor inválido!")
      return
    }

    item.push({
      nome: nomeProduto,
      preco: Number(preco)
    })

    listaProdutos()

    // limpa os campos
    document.querySelector("#pesquisa").value = ""
    document.querySelector("#ivalor").value = ""
    
  })
}

// BUTTON PESQUISA DE PRODUTOS

var pesquisa = document.querySelector(".back-icone")
var conteudo = document.querySelector(".back-pvb")

pesquisa.addEventListener("click", function(){
  conteudo.classList.toggle("active")
})


// BORTAO DE MENU2

bortaomenu = document.getElementById('item-icone')
conteudoP90 = document.querySelector('.backmenu2')

bortaomenu.addEventListener("click", function(){
conteudoP90.classList.toggle("ativar")

})



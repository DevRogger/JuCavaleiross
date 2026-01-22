var bortao = document.querySelector('.icone')
var conteudo = document.querySelector('.backmenu')

bortao.addEventListener('click',()=>{
  conteudo.classList.toggle('ativar')
})

fetch('https://api.github.com/users/vajka').then(Response => Response.json())

.then(json => console.log(json));

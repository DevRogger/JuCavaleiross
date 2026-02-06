var bortao = document.querySelector('.icone')
var conteudo = document.querySelector('.backmenu')

bortao.addEventListener('click',()=>{
  conteudo.classList.toggle('ativar')
})

fetch(' https://developer.themoviedb.org/docs/getting-started').then(Response => Response.json())

.then(json => console.log(json));



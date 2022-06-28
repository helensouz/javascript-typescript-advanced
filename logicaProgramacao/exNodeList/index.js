const paragrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body) // selecionamos o estile computado pelo navegador
const backBody = estilosBody.backgroundColor;
console.log(backBody)

for(p of ps){
   
    p.style.backgroundColor = backBody;
    p.style.color = '#fff'
}
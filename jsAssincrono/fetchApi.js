/// fetch api -> envia requisicoes assincronar
//para o servidor.. 

// fetch é uma promisse. 

const requisicao = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
         return response.json();
        
    }).then(jsonBody => {
        document.querySelector('#app').innerHTML = jsonBody[0].title
        console.log(jsonBody)
    })

const data = {
    id: 1,
    nome : "HELEN"
}

fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
}
)

// const request = obj => {
//     return new Promisse((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();

//         xhr.addEventListener('load', () => {
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.responseText);
//             }else{
//                 reject(xhr.statusText)
//             }
//         })
//     })
// };

// document.addEventListener('click', e => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();

//     if(tag === 'a'){
//         e.preventDefault();
//         carregaPagina(el)
//     }
// });

// async function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     const objConfig = {
//         method: 'GET',
//         url: href
//     };

//     try{
//         const response = await request(objConfig);
//         carregaResultado(response);
//     }catch(e){
//         console.log(e)
//     }
// }
 
// function carregaResultado(response){
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response
// }
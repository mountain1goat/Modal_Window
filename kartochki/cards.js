let cards=[
    {
        id: "1",
        head: "Заголовок 1",
        body: "text 1 text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
        image: "aple2.jpg"
    },
    {
        id: "2",
        head: "Заголовок 2",
        body: "text 2  text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
        image: "anm3878.jpg"
    },
    {
        id: "3",
        head: "Заголовок 3",
        body: "text 3 text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
        image: "fdf.jpg"
    }
]
let cardsCount=document.querySelector('.cards')
createManyCards(cards,cardsCount)

function createManyCards(array,cont){
    array.forEach(item => {
        cont.insertAdjacentHTML("beforeend",createCard(item))   
    });
}
function createCard({id, image, head, body}){
    return`
    <article class='card' id=${id}>
        <img class='imgCard' src="${image}" width='165' alt="${image}">
        <h2>${head}</h2>
        <p>${cropText(body)}</p>
        <div class='btns'>
            <button class='btn-delete' onclick="deleteCard(event)">Убрать</button>
            <button class='btn-info'>Подробнее</button>
        </div>
    </article>
    ` 
}
function cropText(text,length=20){
    return text.substr(0, length)+ '...';
}

const modalWrapper=document.querySelector(".modal-wrapper")
const btnClose=document.querySelector(".modal-close")

// document.querySelectorAll(".btn-delete").forEach(btn=>{
//     btn.addEventListener("click",deleteCard)
// })

document.querySelectorAll('.btn-info').forEach(btn=>{
    btn.addEventListener('click',showInfo)
});

btnClose.addEventListener("click",closeModal);

modalWrapper.addEventListener("click",e=>{
    if(e.target===e.currentTarget){
        closeModal();
    }    
})

function showInfo(e){
   modalWrapper.classList.remove('hide');
   showCard(cards,e)
}

function closeModal(e){
    modalWrapper.classList.add('hide');
}

document.addEventListener("keydown",e=>{
    if(e.code==="Escape"){
        modalWrapper.classList.add('hide');
    }
})

// console.dir(e);--подсказка для св-в
// text.addEventListener("keydown",e=>{
//     console.log(e.key);
//     console.log(e.code);
//     console.log(e.keyCode);
//     console.log(e.charCode);
// })

function deleteCard(e){
    e.target.closest("article.card").remove();    
}

function showCard(array,e){
   let {image, head, body} = array.find(item=>item.id===e.target.closest("article.card").id)
   document.querySelector(".card-modal-left>img").src=image;
   document.querySelector(".card-modal-right>h3").textContent=head;
   document.querySelector(".card-modal-right>p").textContent=body;
}
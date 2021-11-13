let cards=[
    {
        id: "1",
        head: "Справедливость и мир",
        image: "image/img1.jpg"
    },
    {
        id: "2",
        head: "Самсон и Далила",
        image: "image/img2.jpg"
    },
    {
        id: "3",
        head: "Последний день Помпеи",
        image: "image/img3.jpg"
    },
    {
        id: "4",
        head: "Девятый вал",
        image: "image/img4.jpg"
    },
    {
        id: "5",
        head: "Явление Христа народу",
        image: "image/img5.jpg"
    },
    {
        id: "6",
        head: "Утро в сосновом лесу",
        image: "image/img6.jpeg"
    }
]
let cardsCount=document.querySelector('.cont');
createManyCards(cards,cardsCount);

function createManyCards(array,cont){
    array.forEach(item => {
        cont.insertAdjacentHTML("beforeend",createCard(item))
        localStorage.setItem(`${item.id}`, JSON.stringify(item))
    });
}

// function localEntry(arr){
//     arr.forEach(item=>{
//         localStorage.setItem(`${item.id}`, createCard(item))
//     })
// }

function createCard({id, image}){
    return`
    <article class='card' id=${id} style="background-image: url('${image}'); background-size: cover; width=100%;">
    </article>
    `
}

const modalWrapper=document.querySelector(".modal-wrapper")
const lastbtn=document.querySelector('.last');
const nextbtn=document.querySelector('.next');

document.querySelectorAll('.card').forEach(btn=>{
    btn.addEventListener('click',showInfo)
});

function showInfo(e){
   modalWrapper.classList.remove('hide');
   showCard(cards,e)
//lastbtn.addEventListener('click', showLast) 
}

function showCard(array,e){
   let {image, head} = array.find(item=>item.id===e.target.closest("article.card").id)
   document.querySelector(".card-modal-top").style=`background-image: url('${image}'); background-size: cover; width=100%;`;
   document.querySelector(".card-modal-buttom>h3>a").textContent=head;
}

function showLast(arr,e){
    arr.forEach(item=>{
        if(item.id===e.target.closest("article.card").id) {
            let {image, head} = localStorage.getItem(item)
            document.querySelector(".card-modal-top").style=`background-image: url('${image}'); background-size: cover; width=100%;`;
            document.querySelector(".card-modal-buttom>h3>a").textContent=head;
        }
    })
}

modalWrapper.addEventListener("click",e=>{
    if(e.target===e.currentTarget){
        closeModal();
    }    
})

document.addEventListener("keydown",e=>{
    if(e.code==="Escape"){
        closeModal();
    }
})
function closeModal(){
    modalWrapper.classList.add('hide');
}
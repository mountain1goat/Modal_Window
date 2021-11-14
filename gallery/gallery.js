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
let deletedCards;
let numbSl;
let btnPrev = document.querySelector('.last');
let btnNext = document.querySelector('.next');
createManyCards(cards,cardsCount);

function createManyCards(array,cont){
    deletedCards = loadFromLocalStorage();
    cont.innerHTML = '';
    array.forEach(item => {
       if (!deletedCards.includes(item.id)){
        cont.insertAdjacentHTML("beforeend",createCard(item));
       }
    });
}

function createCard({id, image}){
    return`
    <article class='card' id=${id} style="background-image: url('${image}'); background-size: cover; width=100%;">
    <span class="delete" id='id${id}'>&times;</span>
    </article>
    `
}

const modalWrapper=document.querySelector(".modal-wrapper")

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        deleteCard(e);
    }
    if (e.target.classList.contains('card')) {
        showInfo(e);
    }
})

function showInfo(e){
   modalWrapper.classList.remove('hide');
   numbSl = e.target.closest('article.card').id;
    showCard(cards, e);
}

deletedCards = loadFromLocalStorage();

function deleteCard(e) {
    e.target.closest('article.card').remove();

    deletedCards.push(e.target.closest('article.card').id);

    localStorage.setItem('deletedCards', JSON.stringify(deletedCards));
}

function showCard(array,e){
   let {image, head} = array.find(item=>item.id == numbSl)
   document.querySelector(".card-modal-top").style=`background-image: url('${image}'); background-size: cover; width=100%;`;
   document.querySelector(".card-modal-buttom>h3>a").textContent=head;
   numberSlide.textContent = numbSl + '/' + cards.length;

   if (numbSl === 1) {
       btnPrev.disabled = true;
   }
   else {
       btnPrev.disabled = false;
   }
   if (numbSl === cards.length) {
       btnNext.disabled = true;
   }
   else {
       btnNext.disabled = false;
   }
}

btnPrev.addEventListener('click', (e) => {
    if (numbSl >= 1) {
        --numbSl;
        showCard(cards, e);
    }
});

btnNext.addEventListener('click', (e) => {
    if (numbSl <= cards.length) {
        numbSl++;
        showCard(cards, e);
    }
});

function loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem('deletedCards')) || [];
}

const btnShow = document.getElementById('backCards');

btnShow.addEventListener('click', () => {
    localStorage.removeItem('deletedCards');
    createManyCards(cards, cardsCount);
})


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

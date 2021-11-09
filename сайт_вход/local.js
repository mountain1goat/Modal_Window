// localStorage.setItem('userName', 'Alise');
const input = document.querySelector('#text');
const btn = document.querySelector('#btn');

let student = {
    studentName: 'Mike',
    age: 18
}

localStorage.setItem('student', JSON.stringify(student));
let obj = JSON.parse(localStorage.getItem('student'));

console.log(obj.studentName);
console.log(obj);


btn.addEventListener('click', showInfo);

function showInfo(){
    if(input.value == localStorage.getItem('userName')){
        alert('GOOD');
    }
    console.log(localStorage.getItem('userName'))
}


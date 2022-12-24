// shu classga tegishli bolgan elemtlarni qidiradi
const elemensOne = document.querySelectorAll('.lesson__list');
console.log(elemensOne);


// li teglarini hamasini qidiradi
const elemensTwo = document.querySelectorAll('li');
console.log(elemensTwo); 


// Faqat .lesson__items-list classga ega bo`lgan li teglarini qidiradi
const elemensThree = document.querySelectorAll('li.lesson__item-list');
console.log(elemensThree);


// Shu class ichidagi birinchi farzandlarini qidiradi (nevara emas, farzand)
const elemensFour = document.querySelectorAll('.lesson__list>li')
console.log(elemensFour); 


// Class bo`ylab ikki va undan ko`proq elemntlarni qidirish, "," vergul bo`lishi kerak
const elemensFive = document.querySelectorAll('.lesson__list , .lesson__text')
console.log(elemensFive); 


// Shu classga ega bo`lgan element ichidagi elementni classi bo`yicha qidiradi
const elemensSix = document.querySelectorAll('.lesson__sub-list .lesson__item-sub-list')
console.log(elemensSix); 


// ID bo`yicha qidirish
const elemensSeven = document.querySelector('#listItem');
console.log(elemensSeven);


// Attribut orqali qidirish
const elemensEight = document.querySelector('[data-item]');
console.log(elemensEight);


// Attribut qiymati bilan qidirish
const elemensNine = document.querySelector('[data-item = "85"]');
console.log(elemensNine);

///////////////////////////////////////////////////////////

const myName = document.querySelector('#myName');

const myNameElement = myName.innerHTML = 'Uzbekistan';

console.log(myName);

//////////////////////////////////////////////////////////////

const button = document.querySelector('#button');

button.addEventListener("click" , ()=>{
    if(document.body.style.backgroundColor === "dodgerblue"){
        document.body.style.backgroundColor = "rgb(30, 30, 30)";
    }else{
        document.body.style.backgroundColor = "dodgerblue";
    }
})

///////////////////////////////////


function showMeIt (){
    console.log("I show you it, dear");
}

button.addEventListener("click" , showMeIt)

/////////////////////////////////////////////////////////////////
   


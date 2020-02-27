// window.onload = function() {
//     oneUser(window.fetch)
// }

const assert = require('assert');
const fetch = require('node-fetch');

const oneUser = (i) => {
    fetch('https://randomuser.me/api/')
   .then((response) => {
       return response.json();
   })
   .then((response) => {
       getPic(response, i);
   })
     .catch(error => {
     console.error(error);
   })
   }
   
   
   function getMoreData(){
     for (let i = 1; i < 5; i++) {
    //    const elem = document.getElementById('moreData' + i);
    //    if(elem){
        //  elem.addEventListener('click', () => {
        //    document.getElementById('moreData' + i).previousSibling.style.display = "block"
        //    });
       }
   }
//    }
   
   function getPic(response, i){
   
     const picText = `<div> <img src="${response.results[0].picture.large}"/> `;
     
     const info = `${response.results[0].name.first}, ${response.results[0].name.last}  `;
     
    //  document.getElementById('picDiv').innerHTML += picText + info;
     
     const moreData = `<div id="moreData" style="display:none"> ${response.results[0].dob.date}, ${response.results[0].location.street.name}, ${response.results[0].location.street.number}</div>`;
     
    //  document.getElementById('picDiv').innerHTML += moreData;
     
     const button = `<button id=moreData${i}>More details</button> <br /><br />`;
     
    //  document.getElementById('picDiv').innerHTML += button;
   
     
     getMoreData();
    
   }
   
   
   
   for (let i = 1; i < 5; i++){
       oneUser(i);
   }
   

if (typeof describe === 'function'){

    describe('oneUser', () => {
      it('link works', () => {
        fetch('https://randomusegr.me/api/');
        })
    });

  }
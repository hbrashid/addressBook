
window.onload = function() {
    oneUser()
}
  

const oneUser = () => {
fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json();
})
.then((response) => {
    getPic(response);
})

}

for (let i = 1; i < 5; i++){
    oneUser();
}

const getPic = (response) => {
    // console.log(response.results.gender);
    let picText = `<div> <img src="${response.results[0].picture.large}"/> `;
    let info = `${response.results[0].name.first}, ${response.results[0].name.last}  `;
    let moreData = `${response.results[0].dob.date}, ${response.results[0].location.street.name}, ${response.results[0].location.street.number}</div>`;
    document.getElementById('picDiv').innerHTML += picText + info + moreData;
    


}
    

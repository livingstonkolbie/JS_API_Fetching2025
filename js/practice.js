

let genderBtn = document.getElementById("showGender");
genderBtn.addEventListener("click", showNameAndGender);
let genderBox = document.querySelector("#genderBox");
let counting = 1;
let charGender;


async function fetchGender(countATM) {


    await fetch(`https://swapi.info/api/people/${countATM}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.name, data.gender);

            charGender = data;
            console.log(charGender);
        })
        .catch((error) => {
            console.log(error);
        })
}

async function showNameAndGender() {

    await fetchGender(counting);

    counting++;

    let para = document.createElement("p");
    para.innerText = charGender.gender;

    genderBox.appendChild(para);

}
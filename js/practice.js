

let genderBtn = document.getElementById("showGender");
genderBtn.addEventListener("click", showNameAndGender);
let genderBox = document.querySelector("#genderBox");
let counting = 1;
let charGender;


let charizardBtn = document.getElementById("charizardGif");
charizardBtn.addEventListener("click", showCharizard);
let charizardBox = document.getElementById("charizardBox");
let charizard;

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
};

async function showNameAndGender() {

    await fetchGender(counting);

    counting++;

    // this method BELOW will replace the innerText area each time
    // genderBox.innerText = charGender.gender;

    // this method BELOW will ADD onto the last thing- make a list
    let para = document.createElement("p");
    para.innerText = charGender.gender;

    genderBox.appendChild(para);

};

function getCharizard() {
    fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/6.png")
    .then(res => res.json())
    .then(data => {
        charizard = data;
    })
    .catch((error) => {
        console.log(error)
    })
}


function showCharizard() {

    getCharizard();

    // charizardBox.innerText = charizard;
    let charizardPara = document.createElement("img");
    charizardPara.innerText = charizard;

    charizardBox.appendChild(charizardPara);
}

// ABOVE i did this all wrong lol... come back to getCharizard() and showCharizard() functions later...
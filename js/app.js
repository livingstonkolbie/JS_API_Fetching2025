// More API INFO = 

// JSON = Javascript Object Notation


// Fetching the information from this link below.
// using this method will handle all the Asynchronous parts of async/await/promises

let url = `https://swapi.info/api/people/1`;
let currentChar;
let counter = 1;
let button = document.querySelector("#showChar");
let charPlacement = document.querySelector(".characterTraits");
button.addEventListener("click", pasteDataToPage);



// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         currentChar = data;
//         console.log(currentChar);
//     })
//     .catch(error => {
//         console.log(error);
//     })



async function fetchData(currentCount) {

    let url = `https://swapi.info/api/people/${currentCount}`;


    await fetch(url)
            .then(res => res.json())
            .then(data => {

                // We are able to parse the data because it's an object (below)
                console.log(data.eye_color, data.birth_year);



                currentChar = data;

                //  below we recieved [object Object]
                // charPlacement.innerText = currentChar;

            })
            .catch(error => {
                console.log(error);
            })
}


async function pasteDataToPage() {
    // this is going to reference the fetch function above
    await fetchData(counter);

    console.log(currentChar);

    counter++;


    let paragraph = document.createElement("p");
    paragraph.innerText = currentChar.name;

    charPlacement.append(paragraph);

}
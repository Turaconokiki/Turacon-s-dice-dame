let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = (`dice${randomNumber1}.png`)
let randomImageSource1 = (`images/${randomDiceImage1}`);
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute ("src",randomImageSource1)

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = (`dice${randomNumber2}.png`)
let randomImageSource2 = (`images/${randomDiceImage2}`);
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute ("src",randomImageSource2)



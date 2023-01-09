const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById('password1')
let passwordTwo = document.getElementById('password2')
let characterLimit = 15

function generate() {
    let currentPassword = ''
    let randomNum

    for (let i = 0; i < characterLimit; i++) {
        randomNum = Math.floor(Math.random() * characters.length)
        currentPassword += characters[randomNum]
    }
    return currentPassword
}

function generatePasswords() {
    passwordOne.textContent = generate()
    passwordTwo.textContent = generate()
}
const noteC = new Audio('Assets/mp3 Notes/c3.mp3');
const noteD = new Audio('Assets/mp3 Notes/d3.mp3');
const noteE = new Audio('Assets/mp3 Notes/e3.mp3');
const noteF = new Audio('Assets/mp3 Notes/f3.mp3');
const noteG = new Audio('Assets/mp3 Notes/g3.mp3');
const noteA = new Audio('Assets/mp3 Notes/a4.mp3');
const noteH = new Audio('Assets/mp3 Notes/h4.mp3')

document.addEventListener('keydown', function(event) {
    pressedKey = event.key.toLowerCase();

    if (pressedKey === 'c') {
        console.log(document.getElementsByName(pressedKey + '-note')[0]);
        let cloneC = noteC.cloneNode();
        cloneC.play();
    }
    else if (pressedKey === 'd') {
        console.log(document.getElementsByName(pressedKey + '-note')[0]);
        let cloneD = noteD.cloneNode();
        cloneD.play();
    }
    else if (pressedKey === 'e') {
        console.log(document.getElementsByName(pressedKey + '-note')[0]);
        let cloneE = noteE.cloneNode();
        cloneE.play();
    }
    else if (pressedKey === 'f') {
        console.log(document.getElementsByName(pressedKey + '-note')[0]);
        let cloneF = noteF.cloneNode();
        cloneF.play();
    }
    else if (pressedKey === 'g') {
        console.log(document.getElementsByName(pressedKey + '-note')[0]);
        let cloneG = noteG.cloneNode();
        cloneG.play();
    }
    else if (pressedKey === 'a') {
        console.log(document.getElementsByName(pressedKey + '-note')[0]);
        let cloneA = noteA.cloneNode();
        cloneA.play();
    }
    else if (pressedKey === 'h') {
        console.log(document.getElementsByName(pressedKey + '-note')[0]);
        let cloneH = noteH.cloneNode();
        cloneH.play();
    }

});
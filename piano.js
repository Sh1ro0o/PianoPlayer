const noteC = new Audio('Assets/mp3 Notes/c3.mp3');
const noteD = new Audio('Assets/mp3 Notes/d3.mp3');
const noteE = new Audio('Assets/mp3 Notes/e3.mp3');
const noteF = new Audio('Assets/mp3 Notes/f3.mp3');
const noteG = new Audio('Assets/mp3 Notes/g3.mp3');
const noteA = new Audio('Assets/mp3 Notes/a4.mp3');
const noteH = new Audio('Assets/mp3 Notes/h4.mp3')

//plays sound based on pressed key and adds class which colors the key
document.addEventListener('keydown', function(event) {
    let pressedKey = event.key.toLowerCase();

    if (pressedKey === 'c') {
        document.getElementsByName(pressedKey + '-note')[0].classList.add('piano-button-pressed');
        let cloneC = noteC.cloneNode();
        cloneC.play();
    }
    else if (pressedKey === 'd') {
        document.getElementsByName(pressedKey + '-note')[0].classList.add('piano-button-pressed');
        let cloneD = noteD.cloneNode();
        cloneD.play();
    }
    else if (pressedKey === 'e') {
        document.getElementsByName(pressedKey + '-note')[0].classList.add('piano-button-pressed');
        let cloneE = noteE.cloneNode();
        cloneE.play();
    }
    else if (pressedKey === 'f') {
        document.getElementsByName(pressedKey + '-note')[0].classList.add('piano-button-pressed');
        let cloneF = noteF.cloneNode();
        cloneF.play();
    }
    else if (pressedKey === 'g') {
        document.getElementsByName(pressedKey + '-note')[0].classList.add('piano-button-pressed');
        let cloneG = noteG.cloneNode();
        cloneG.play();
    }
    else if (pressedKey === 'a') {
        document.getElementsByName(pressedKey + '-note')[0].classList.add('piano-button-pressed');
        let cloneA = noteA.cloneNode();
        cloneA.play();
    }
    else if (pressedKey === 'h') {
        document.getElementsByName(pressedKey + '-note')[0].classList.add('piano-button-pressed');
        let cloneH = noteH.cloneNode();
        cloneH.play();
    }

});

//removes pressed class for different key coloring
document.addEventListener('keyup', function(event) {
    let pressedKey = event.key.toLowerCase();

    if (pressedKey === 'c')
        console.log(document.getElementsByName(pressedKey + '-note')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'd') 
        console.log(document.getElementsByName(pressedKey + '-note')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'e') 
        console.log(document.getElementsByName(pressedKey + '-note')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'f') 
        console.log(document.getElementsByName(pressedKey + '-note')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'g') 
        console.log(document.getElementsByName(pressedKey + '-note')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'a') 
        console.log(document.getElementsByName(pressedKey + '-note')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'h') 
        console.log(document.getElementsByName(pressedKey + '-note')[0].classList.remove('piano-button-pressed'));
});
const characters = document.querySelectorAll('.character');

const buttons = document.querySelectorAll('.button');

buttons.forEach((element, index) => {
    element.addEventListener('click', () => {
        deselectedButton();
        deselectedCharacter();

        element.classList.add('selected');
        characters[index].classList.add('selected');
    })
});

function deselectedCharacter() {
    const characterSelected = document.querySelector('.character.selected');
    characterSelected.classList.remove('selected');
}

function deselectedButton() {
    const buttonSelected = document.querySelector('.button.selected');
    buttonSelected.classList.remove('selected');
}

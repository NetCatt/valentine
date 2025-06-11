const message = [
    "Are you sure?",
    "Really sure?",
    "Are you positive?",
    "pretty please",
    "Just think about it",
    "I'll be very sad :(",
    "I'll be very very sad",
    "Alringt I'll stop asking",
    "Just kidding, please say yes"
];
let messageIndex = 0;
function handleNoClick(){
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = message[messageIndex];
    messageIndex =(messageIndex+1)%message.length;
   const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

}
function handleYesClick(){
    window.location.href ="yespage.html";
}
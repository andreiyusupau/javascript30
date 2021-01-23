const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const offset=document.querySelector('.hand').style.rotate;

function setDate() {
    console.log(offset);
    // const offset = 90;

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = seconds / 60 * 360;
    turn(secondHand, secondsDegrees, offset);

    const minutes = now.getMinutes();
    const minuteDegrees = minutes / 60 * 360;
    turn(minuteHand, minuteDegrees, offset);

    const hours = now.getHours();
    const hourDegrees = hours % 12 / 12 * 360 + minuteDegrees / 12;
    turn(hourHand, hourDegrees, offset);
}

function turn(hand, degrees, offset) {
    hand.style.transform = `rotate(${degrees + offset}deg)`;
}

setInterval(setDate, 1000);

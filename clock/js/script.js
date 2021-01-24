const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = seconds / 60 * 360;
    turn(secondHand, secondsDegrees);

    const minutes = now.getMinutes();
    const minuteDegrees = minutes / 60 * 360;
    turn(minuteHand, minuteDegrees);

    const hours = now.getHours();
    const hourDegrees = hours % 12 / 12 * 360 + minuteDegrees / 12;
    turn(hourHand, hourDegrees);
}

function turn(hand, degrees) {
    hand.style.transform = `rotate(${degrees}deg)`;
}

setInterval(setDate, 1000);

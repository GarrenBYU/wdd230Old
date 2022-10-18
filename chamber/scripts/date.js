const dateField = document.querySelector('.date');

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

dateField.innerHTML = `<em>${fulldate}</em>`;

let weekday = now.getDay();
let chamberMessage = '';
console.log(weekday);
if(weekday === 1 || weekday === 2){
    chamberMessage = '🤝 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}

const chamberMeet = document.querySelector('.chamberMeet');
chamberMeet.innerHTML = `<h2>${chamberMessage}</h2>`;
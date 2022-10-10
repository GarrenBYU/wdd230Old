const dateField = document.querySelector('.date');

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

dateField.innerHTML = `<em>${fulldate}</em>`;
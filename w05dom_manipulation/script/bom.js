const input = document.querySelector('.input')
const button = document.querySelector('.submit')
const list = document.querySelector('.list')
button.addEventListener('click', () => {
    const myItem = input.ariaValueMax;
    input.value = '';
    const li = document.createElement('li')
    const text = document.createElement('span')
    const but = document.createElement('button')
    but.setAttribute('id', 'delete')
    but.textContent = 'Delete';
    li.setAttribute('id', 'inputs')
    li.appendChild(text);
    li.textContent = myItem;
    li.appendChild(but)
    list.appendChild(li)

    but.addEventListener('click', () => {
        list.removeChild(li);
    });

    input.focus();
})
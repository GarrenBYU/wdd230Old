const input = document.querySelector('input')
const button = document.querySelector('button');
const list = document.querySelector('ul')
button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';
    const li = document.createElement('li')
    const text = document.createElement('span')
    const but = document.createElement('button')
    but.setAttribute('id', 'delete')
    but.textContent = '❌';
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
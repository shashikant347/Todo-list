let input = document.querySelector('#input');
let add = document.querySelector('.add');
let ul = document.querySelector('.list');
let reset = document.querySelector('.reset');

// Add task
add.addEventListener('click', () => {
    let values = input.value.trim();
    if (values === '') {
        alert('Enter the task');
        input.value = '';
    } else {
        let li = document.createElement('li');
        li.innerText = values;

        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; // × symbol
        li.appendChild(span);

        ul.appendChild(li);
        input.value = '';
    }
});

// Reset button clears input and all tasks
reset.addEventListener('click', () => {
    input.value = '';
    ul.innerHTML = '';
});

// Delete individual task using event delegation
ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); // remove the <li>
    }
});

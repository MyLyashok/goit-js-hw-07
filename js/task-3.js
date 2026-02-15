const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', event => {
    const trimmedValue = event.currentTarget.value.trim();
    if (trimmedValue === '') {
        span.textContent = 'Anonymous';
    } else {
        span.textContent = input.value.trim();
    }
});


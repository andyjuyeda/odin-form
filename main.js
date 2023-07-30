let inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            input.classList.add('has-content');
        } else {
            input.classList.remove('has-content');
        }
    })
});
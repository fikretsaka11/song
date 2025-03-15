document.addEventListener('DOMContentLoaded', () => {
    const swingButton = document.getElementById('swingButton');
    let isSwinging = false;

    swingButton.addEventListener('click', () => {
        if (!isSwinging) {
            swingButton.classList.add('swing');
            swingButton.textContent = 'Stop Swing';
            isSwinging = true;
        } else {
            swingButton.classList.remove('swing');
            swingButton.textContent = 'Swing Effect';
            isSwinging = false;
        }
    });
});
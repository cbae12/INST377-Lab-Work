function mainEvent(event) {
    // console.log(event);
    const button = document.querySelector('.submit-button');
    button.addEventListener('click', () => {
        console.log('clicked');
        alert('clicked');
    })
}

document.addEventListener('DOMContentLoaded', async (event) => {
    console.log('script.loaded');
    mainEvent(event)
});

// console.log('end of file'); demo of race condition
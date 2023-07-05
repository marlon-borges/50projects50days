let figures = document.querySelectorAll('figure');

figures.forEach((figure) => {
    figure.addEventListener('click', (addactive) => {
        figures.forEach((removeactive) => {
            removeactive.classList.remove('active');
        })
        addactive.currentTarget.classList.add('active');
    })
})




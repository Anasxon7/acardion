const accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach( (item, index) => {
    let header = item.querySelector('header');
    header.addEventListener('click', () =>  {
        item.classList.toggle('open')

        let description = item.querySelector('.description')
        if(item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`
        } else {
            description.style.height = '0px';
        }
        console.log(description);

    })
})
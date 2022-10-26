function handleClick(evt) {
    const content = evt.target.nextElementSibling
    if (!evt.target.parentNode.classList.contains('open')) {
        content.style.height = `${content.scrollHeight}px`
        evt.target.parentNode.classList.add('open')
    } else {
        content.style.height = '0px'
        evt.target.parentNode.classList.remove('open')
    }
}
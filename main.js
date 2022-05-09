function onScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }
}

function clickMenu() {
    document.body.classList.add('menuExpanded')
}

function closeClick() {
    document.body.classList.remove('menuExpanded')
}
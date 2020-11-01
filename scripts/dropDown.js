document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.bl_headerUtils_navItem');

    items.forEach((item) => {
        
        if (item.children[1] !== undefined) {
            item.addEventListener('mouseover', () => {
                item.children[1].classList.add('is_open');
                item.children[1].setAttribute('aria-hidden', false);
            });
    
            item.addEventListener('mouseout', () => {
                item.children[1].classList.remove('is_open');
                item.children[1].setAttribute('aria-hidden', true);
            });
        }

    })
})

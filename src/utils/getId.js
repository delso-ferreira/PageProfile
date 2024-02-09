const getId = (el) => {
    const element = document.getElementById(el);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } 
}

export default getId;
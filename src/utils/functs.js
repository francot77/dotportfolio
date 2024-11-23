function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  
  function enableScroll() {
    document.body.style.overflow = 'smooth'; // Restaurar el scroll
  }
function scrollToElement(id) {
    const element = document.getElementById(id);
    setTimeout(() => {
        element.scrollIntoView({ behavior: 'instant' });
    }, 10);
  }

  export {disableScroll,enableScroll,scrollToElement}
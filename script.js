if(window.matchMedia("(max-width: 1024px)").matches){
   const heading= document.querySelector(".heading");
   heading.textContent = "Alejandro Viejo";

   const projectCardPreviews = document.querySelectorAll('.project-card--preview');
   const projectCardDescriptions = Array.from(document.querySelectorAll('.project-card--description'));

   projectCardPreviews.forEach((element, index) => {
      projectCardDescriptions[index].appendChild(element);
      element.querySelector('.project-card--img').setAttribute('height', '350');
   });
}
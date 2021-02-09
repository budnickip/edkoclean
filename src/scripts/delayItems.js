const delayItems = () =>{
    window.addEventListener('scroll',()=>{
        const informationPhoto = document.querySelector('.information-photo')
        const aboutPhotoPosition = informationPhoto.getBoundingClientRect().top
        let screenPosition = window.innerHeight
        if(aboutPhotoPosition < screenPosition){
            informationPhoto.classList.add('activePhoto')
        }

        const covidPhoto = document.querySelector('.covid-photo')
        const covidPhotoPosition = covidPhoto.getBoundingClientRect().top
        if(covidPhotoPosition < screenPosition){
            covidPhoto.classList.add('activePhoto')
        }

        const paperPlane = document.querySelector('.fa-paper-plane')

        if(paperPlane.getBoundingClientRect().top < window.innerHeight){
            paperPlane.classList.add('activePlane')
        }
       
    })  
}
export default delayItems;
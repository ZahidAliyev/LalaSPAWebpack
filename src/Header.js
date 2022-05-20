export default class Header {
    static template(logosource = "") {
        return `
        <header class="Header">
        <a class="Header-logo" href="/"><img src="${logosource}" alt="" /></a>
      
        <div class="Header-services">
            <a class="Header-services_services Link-Hover" href="/interior-design-section">Services</a>
            <a class="Header-services_services-service Link-Hover" href="/interior-design-section">Interior</a>
            <a class="Header-services_services-service Link-Hover" href="/exterior-design-section">Exterior</a>
            <a class="Header-services_services-service Link-Hover" href="/landscape-design-section">Landscape</a>
        </div>
        <a class="Header-about Link-Hover" href="/landscape-design-section/about">About</a>
        <a class="Header-contact Link-Hover" href="/landscape-design-section/contact">Contact</a>
        <svg class="Header-circle_svg">
          <circle class="Header-circle_itself" cx="0.5rem" cy="0.5rem" r="0.5rem"  />
        </svg> 
      </header>
        `
    }
    static addEvent() {
        let headerServices = document.querySelector(".Header-services_services");
        let headerServicesService =document.querySelectorAll(".Header-services_services-service");
        
        headerServices.addEventListener("mouseenter", (e)=>{
          headerServicesService[0].classList.add("Header-services_services-service--displayed");
          headerServicesService[1].classList.add("Header-services_services-service--displayed");
          headerServicesService[2].classList.add("Header-services_services-service--displayed");
      
        })
        headerServices.addEventListener("mouseleave", (e)=>{
          setTimeout(() => {
            headerServicesService[0].classList.remove("Header-services_services-service--displayed");
            headerServicesService[1].classList.remove("Header-services_services-service--displayed");
            headerServicesService[2].classList.remove("Header-services_services-service--displayed");
          }, 5000);
      
        })
    }
}
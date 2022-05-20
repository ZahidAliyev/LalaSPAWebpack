import Header from "./Header.js"
export default class Project {
    constructor(id, header=[], text, infoLocation, infoType, infoArea, images, sectionGallerylink){
        this.id = id;
        this.header = header;
        this.text = text;
        this.infoLocation = infoLocation;
        this.infoType = infoType;
        this.infoArea = infoArea;
        this.images = images;
        this.link = sectionGallerylink;
        this.middleItem = Math.round((this.images.length + 2)/2);
        this.pageClass = sectionGallerylink.concat("-project").replace("/", "");
    }
    htmlTemplate() {
        return `
        <div class="project-page-wrapper">
        <div class="project-page ${this.pageClass}">
            ${Header.template("/logodark.png")}
            <div class="project-image-wrapper"><img src="${this.images[0]}" alt=""></div>
            <div class="project-brief">
                <div class="project-brief_header">
                    <p>${this.header[0]}</>
                    <p>${this.header[1]}</p>
                </div>
                <p class="project-brief_text">${this.text}</p>
                <div class="project-brief_information">
                    <hr>
                    <div><p>Location:&nbsp</p><p>${this.infoLocation}</p></div>
                    <hr>
                    <div><p>Type:&nbsp</p><p>${this.infoType}</p></div>
                    <hr>
                    <div><p>Area in sq. m.:&nbsp</p><p>${this.infoArea}</p></div>
                    <hr>
                </div>
    
            </div>
        </div>
        <div class="project-carousel-page ${this.pageClass}">
            <div class="blank-space"></div>
            <div class="carousel-wrapper">
                <div class="carousel">
                </div>
                <button class="carousel-button carousel-button_left" id="carousel-shift_left"></button>

                <button class="carousel-button carousel-button_right" id="carousel-shift_right"></button>
            </div>
            <div class="go-back-wrapper Link-Hover">
                <a href="${this.link}" class="">Back to projects</a>
            </div>
            <nav class="footer"></nav>

        </div>
    </div>
        `
    }
    #createImageItem = (image, imageWrapperClass) => {
        let img = document.createElement("img");
        img.src = image;
        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add(imageWrapperClass);

        imageWrapper.appendChild(img);
        return imageWrapper;
    }
    #createAndIncertImages = (imageArray) => {
        let fragment = document.createDocumentFragment();
        let imagesBlockWrapper = document.querySelector(".carousel");

        imageArray.forEach(image => {
            let imageItem = this.#createImageItem(image, "carousel-item");
            fragment.appendChild(imageItem);
        })
        imagesBlockWrapper.appendChild(fragment);

    }
    #mixExtraFirstAndLastImages = (imageArray) => {
    let imageArrayCopy = [...imageArray];
    let arrayFirstAndLastElements = [imageArrayCopy.pop(), imageArrayCopy.shift()];
    arrayFirstAndLastElements.unshift(imageArrayCopy.pop());
    arrayFirstAndLastElements.push(imageArrayCopy.shift());
    let carousel = document.querySelector(".carousel");

        arrayFirstAndLastElements.forEach((image, index) =>{
        let imageItem = this.#createImageItem(image, "carousel-item");

        index === 0 ? carousel.insertAdjacentElement('afterbegin', imageItem) : carousel.insertAdjacentElement('beforeend', imageItem);
        switch (index) {
            case 0:
            carousel.insertAdjacentElement('afterbegin', imageItem)
                break;
            case 1:
            carousel.children[0].after(imageItem)
                break;
            case 2:
            carousel.children[carousel.children.length - 1].before(imageItem)

                break;
            case 3:
            carousel.insertAdjacentElement('beforeend', imageItem)
                break;      
            default:
                break;
        }
        })

    }
    // Need carousel element pass through property, to not query in method, because method will be called on events. So quering dom many times is bad.
    #carouselTranslateX = (carousel, carouselItem) => {
        let carouselGap = carousel.offsetWidth * 0.0802;
        let translateLength = carouselItem.offsetWidth * this.middleItem - carouselItem.offsetWidth/2 + carouselGap*(this.middleItem-1) - carousel.offsetWidth/2;
        carousel.style.transform = `translateX(-${translateLength}px)`;
    }

    #changeCarouselItemPosition = (transitionDuration, currentPosotion, carousel, carouselItem) => {
        carousel.classList.add(transitionDuration);
        this.middleItem = currentPosotion;
        this.#carouselTranslateX(carousel, carouselItem);
    }
    #carouselShifting = (scroll, carousel, carouselItem) => {
        
        this.middleItem += scroll;
        setTimeout(() => {
                carousel.classList.remove("carousel-transDuration--zero");
                this.#carouselTranslateX(carousel, carouselItem, this.middleItem);
            }, 20);

        
        if(this.middleItem === 2 && scroll < 0) {
            setTimeout(() => {         
            this.#changeCarouselItemPosition("carousel-transDuration--zero", this.images.length + 2, carousel, carouselItem)
            }, 650);
    
        }
        if(this.middleItem === this.images.length + 3  && scroll > 0) {
            setTimeout(() => { 
            this.#changeCarouselItemPosition("carousel-transDuration--zero", 3, carousel, carouselItem)
            }, 650);
        }
    }
    render(page) {
        page.innerHTML = '';
        let projectHTML = this.htmlTemplate();
        page.insertAdjacentHTML("afterbegin", projectHTML);
        this.#createAndIncertImages(this.images);
        this.#mixExtraFirstAndLastImages(this.images);
        let carousel = document.querySelector(".carousel");
        let carouselItem = document.querySelector(".carousel-item");
        this.#carouselTranslateX(carousel, carouselItem, this.middleItem);
        Header.addEvent();
    }
    carouselScrollingEvent(carouselPage, carousel, carouselItem) {
        let CarouselScrolled = false;
        let cursorOnCarousel = false;

        carouselPage.addEventListener("wheel", (e)=> {
            console.log(e);
            if(e.target.className == "Header") {
                console.log("header");
                carouselPage.scrollBy({
                    top: e.deltaY * 0.7,
                    behavior: 'smooth'
                });;
                
            }
            let scrollForCarousel = e.deltaY < 0 ? -1 : 1;
            if((e.target.parentNode.className === "carousel-item" || e.target.classList.contains("carousel-wrapper")) && !cursorOnCarousel) {
                console.log("Cursor on Carousel");
                carouselPage.classList.add("project-page-wrapper--overflow-none");
                cursorOnCarousel = true;
            }
            if(e.target.parentNode.className === "carousel-item" || e.target.classList.contains("carousel-wrapper")) {
                console.log("CarouselWheelfunction");
                if(CarouselScrolled === false) {
                    setTimeout(() => {
                    this.#carouselShifting(scrollForCarousel, carousel, carouselItem);
                        CarouselScrolled = false;
                    }, 700);
                }
                CarouselScrolled = true;
            }

            if((e.target.parentNode.className != "carousel-item" && !e.target.classList.contains("carousel-wrapper")) && cursorOnCarousel) {
                console.log("Cursor NOT on Carousel for class");
                carouselPage.classList.remove("project-page-wrapper--overflow-none");
                cursorOnCarousel = false;
            }            
        })
    }
    carouselClickEvent(carouselPage, carousel, carouselItem) {
        let scrolled = false;

        carouselPage.addEventListener("click", event => {
            if(event.target.id === "carousel-shift_left") {
                console.log("left");
                if(scrolled === false) {
                setTimeout(() => {
                    this.#carouselShifting(-1, carousel, carouselItem);
                    scrolled = false;
                }, 700);
                }
                scrolled = true;
            }
            if(event.target.id === "carousel-shift_right") {
                console.log("right");
                if(scrolled === false) {
                    setTimeout(() => {
                        this.#carouselShifting(1, carousel, carouselItem);
                        scrolled = false;
                }, 700);
                }
                scrolled = true;
            }
        })
    }
}
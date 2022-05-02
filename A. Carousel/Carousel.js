let ImageIndex = 0;
let ImageOffset = 0;

const ImageContainer = document.querySelector('#carousel-image-container');
const left = document.querySelector('#slide-left')
const right = document.querySelector('#slide-right')

right.addEventListener('click', (event) => {
    ImageIndex = ImageIndex - 1;

    ImageOffset = 400 * ImageIndex;

    if (ImageOffset === -1600) {
        ImageOffset = 0;
        ImageContainer.style.transform = `translateX(${ImageOffset}px)`

        ImageIndex = 0;
        ImageOffset = 0;

    } else {
        ImageContainer.style.transform = `translateX(${ImageOffset}px)`
    }
    console.log(ImageIndex);
    console.log(ImageOffset);

    ImageContainer.style.transform = `translateX(${ImageOffset}px)`
})

left.addEventListener('click', (event) => {
    ImageIndex = ImageIndex + 1;

    ImageOffset = 400 * ImageIndex;

    if (ImageOffset === 400) {
        ImageOffset = -1200;
        ImageContainer.style.transform = `translateX(${ImageOffset}px)`
        ImageIndex = -3
    } else {
        ImageContainer.style.transform = `translateX(${ImageOffset}px)`
    }
    console.log(ImageIndex);
    console.log(ImageOffset);

    ImageContainer.style.transform = `translateX(${ImageOffset}px)`
})

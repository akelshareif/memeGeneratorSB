const memeSpace = document.querySelector('#memeSpace');
const form = document.querySelector('form');

//imageContainer classes: relative position
//image classes: set width
//text classes: absolute position and place accordingly on image

const createMeme = (imgURL, textInputs) => {
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const topText = document.createElement('div');
    const bottomText = document.createElement('div');
    topText.innerText = textInputs[0].value;
    bottomText.innerText = textInputs[1].value;

    imgContainer.setAttribute('class', 'imgContainer');

    img.setAttribute('src', imgURL);
    img.setAttribute('class', 'imgSize');

    topText.setAttribute('class', 'topTextPlacement');
    bottomText.setAttribute('class', 'bottomTextPlacement');

    imgContainer.appendChild(topText);
    imgContainer.appendChild(img);
    imgContainer.appendChild(bottomText);
    memeSpace.appendChild(imgContainer);
};

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const imgURL = document.querySelector('input[type="url"]');
    const textInputs = document.querySelectorAll('input[type="text"]');

    createMeme(imgURL.value, textInputs);

    imgURL.value = '';
    textInputs.forEach((input) => {
        input.value = '';
    });
});

import { fetchBreeds, fetchCatByBreed } from './cat-api';


const selectors = {
    select: document.querySelector('.breed-select'),
    loading: document.querySelector('.loader'),
    mistake: document.querySelector('.error'),
    catcontainer: document.querySelector('.cat-info')
    };

document.addEventListener('DOMContentLoaded', () => {

fetchBreeds()
.then(breeds => {
    // hideError();
    selectors.mistake.style.display = 'none'; 
    // showLoading();
    selectors.loading.style.display = 'block';


breeds.forEach(breed => {
const option = document.createElement('option');
option.value = breed.id;
option.textContent = breed.name;
selectors.select.appendChild(option);
})
    // hideLoading();
    selectors.loading.style.display = 'none'; 
})
.catch((error ) => {
    // showError(error);
    // selectors.mistake.textContent = `${selectors.mistake.textContent}`;

    
    selectors.mistake.style.display = 'block';  

    //   hideLoading();
    selectors.loading.style.display = 'none'; 
});



selectors.select.addEventListener('change', () => {
const selectedBreedId = selectors.select.value;

// showLoading();
selectors.loading.style.display = 'block';

fetchCatByBreed(selectedBreedId)
.then(catData => {
    // hideError();
    selectors.mistake.style.display = 'none'; 


      

    selectors.catcontainer.innerHTML = `
    <img src="${catData.url}" alt="Cat" width=600>
    <div class="cat-text">
    <h2>${catData.breeds[0].name}</h2>
    <p>${catData.breeds[0].description}</p>
    <p><b>Temperament:</b> ${catData.breeds[0].temperament}</p></div>
        `;
        // hideLoading();
        selectors.loading.style.display = 'none';
})
.catch(( ) => {
    // showError(error);
    selectors.mistake = `${selectors.mistake.textContent}`;
    selectors.mistake.style.display = 'block';  

    // hideLoading();
    selectors.loading.stylle.display = 'none'; 
});
})
})
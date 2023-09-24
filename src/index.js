import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';

new SlimSelect({
  select: '#selectElement'
})



const selectors = {
    select: document.querySelector('.breed-select'),
    loading: document.querySelector('.loader'),
    mistake: document.querySelector('.error'),
    catcontainer: document.querySelector('.cat-info')
    };

    function showLoading() {
        selectors.loading.style.display = 'block';    }
    function hideLoading() {
        selectors.loading.style.display = 'none';    }
    
    function showError () {
        selectors.mistake.textContent = `Dumn ${selectors.mistake}`
        selectors.mistake.style.display = 'block';    }
    function hideError() {
        selectors.mistake.style.display = 'none';      }


document.addEventListener('DOMContentLoaded', () => {

fetchBreeds()
.then(breeds => {
    hideError();
    showLoading();

breeds.forEach(breed => {
const option = document.createElement('option');
option.value = breed.id;
option.textContent = breed.name;
selectors.select.appendChild(option);
})
    hideLoading();
})
.catch((error ) => {
    showError(error);
      hideLoading();
});



selectors.select.addEventListener('change', () => {
const selectedBreedId = selectors.select.value;

showLoading();

fetchCatByBreed(selectedBreedId)
.then(catData => {
    hideError();

    selectors.catcontainer.innerHTML = `
    <img src="${catData.url}" alt="Cat">
    <h2>${catData.breeds[0].name}</h2>
    <p>${catData.breeds[0].description}</p>
    <p>${catData.breeds[0].temperament}</p>
        `;
        hideLoading();
})
.catch((error ) => {
    showError(error);
    hideLoading();
});
})
})
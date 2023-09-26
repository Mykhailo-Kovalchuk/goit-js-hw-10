import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';



const API_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY = "live_HgDkXwnDoC1nYgOYwMvyw8sz3SXrfNKGcXoHyaWqZ7cKjzY5EEkt4g7hCXzQWfca";
const BASE_URL = "https://api.thecatapi.com/v1/images/search"


import axios from "axios";
axios.defaults.headers.common["x-api-key"] = API_KEY;

export async function fetchBreeds() {
    try {
        const response = await axios.get(API_URL);

        return response.data;
    } catch (error) {
        throw error;
    }
}

// export function fetchBreeds() {
// const errors = document.querySelector('.error')
//    return axios.get(API_URL)
// .then(response => {
//     return response.data.map((breed) => ({
//         id: breed.id,
//         name: breed.name
//     }));
// })
// .catch(() => { 
//     Notify.failure(errors.textContent)})
// }


export async function fetchCatByBreed(breedId) {
    try {
        const response = await axios.get(
            `${BASE_URL}?breed_ids=${breedId}`
        );
        return response.data[0];
    } catch (error) {
throw error;
    }
}


// export function fetchCatByBreed(breedId) {
//    return axios.get(`${BASE_URL}?breed_ids=${breedId}`)
// .then(response => {
//     return response.data[0]
// })
// .catch(() => {
//     Notify.failure('Ой лишенько! Щось пішло не так:(');
// console.log("erorrrrrrr");
// });
// }
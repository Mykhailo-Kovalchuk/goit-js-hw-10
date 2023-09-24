const API_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY = "live_HgDkXwnDoC1nYgOYwMvyw8sz3SXrfNKGcXoHyaWqZ7cKjzY5EEkt4g7hCXzQWfca";



import axios from "axios";
axios.defaults.headers.common["x-api-key"] = API_KEY;

export function fetchBreeds() {
   return axios.get(API_URL)
.then(response => {
    return response.data.map((breed) => ({
        id: breed.id,
        name: breed.name
    }));
})
.catch(() => { 
console.log("ERRRRRROOOORRRR")})
}


export function fetchCatByBreed(breedId) {
   return axios.get(API_URL)
.then(response => {
    return response.data[0]
})
.catch(() => {
console.log("erorrrrrrr");
});
}
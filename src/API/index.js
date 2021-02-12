import axios from "axios";

const URL_API = "https://pokeapi.co/api/v2";

// call Api
class AP {
    async GET(link, config = {}) {
        let pet;
        if (link[0].length > 1) {
            pet = [];
            link.forEach(link => {
                pet.push(axios.get(`${URL_API}/${link}`));
            });
        } else {
            pet = await axios.get(`${URL_API}${link}`, config)
                .then((resp) => {
                    return resp;
                });
        }
        return pet;
    }
}

const API = new AP();

export {
    API,
    URL_API
}
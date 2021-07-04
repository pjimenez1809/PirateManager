import axios from 'axios';

export default class PirateServices {

    constructor() {}
   
    async createPirate(pirate) {
        try {
            const newPirate = await axios.post('http://localhost:8000/api/pirates/new', pirate);
            return newPirate.data;

        } catch(err) { 
            // console.log(err.response);
            console.log('error ingreso',err.response.data.errors.name.message);
            return err.response.data.errors.name.message;
        }
    }
   
   
   
    async getOneSinglePirate(id) {
        try {
            console.log(id)
            const pirate = await axios.get(`http://localhost:8000/api/pirates/${id}`)
            return pirate.data.pirate;
        } catch(err) {
            return err;
        }
    };

    async getAllPirates() {
         try {
            const pirateList = await axios.get('http://localhost:8000/api/pirates');
            return pirateList.data.pirates;

        } catch (error) {
            return error;
        }
    }

    async updatePirate(id, pirate) {
        try {
            const updatePirate = await axios.put(`http://localhost:8000/api/pirates/update/${id}`, pirate)
            return updatePirate.data.pirate;
        } catch(err) {
            return err;
        }
    }

    async deletePirate(id) {
        try{
            const deletePirate = await axios.delete(`http://localhost:8000/api/pirates/delete/${id}`)
            return deletePirate.data.response;
        } catch(err) {
            return err;
        }
    }

    async registerUser(user) {
        try {
            const response = await axios.post('http://localhost:8000/api/users/new', user);
            return response.data.user;

        } catch(err) {
            return err;
        }
    }

    async loginUser(user) {
        try {
            const response = await axios.post('http://localhost:8000/api/users/login', user);
            return response.data.user;

        } catch(err) {
            return err;
        }
    }

};
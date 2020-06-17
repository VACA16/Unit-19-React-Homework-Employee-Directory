import axios from "axios";

export default {
    getRandomUser: function() {
        // gets random user from api
        return axios.get("https://randomuser.me/api")
    }
};
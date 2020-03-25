const axios = require("axios");

require("dotenv").config();

const api = {
  getUser(username) {

    const url = `https://api.github.com/graphql`
    const oauth = {Authorization: 'bearer ' + process.env.GH_TOKEN};
    return axios.post(
      url,
      {query: `{user(login: "${username}"){
        email
        avatarURL
      }
    }`
  },
  {headers: oauth});
  }
};

module.exports = api;

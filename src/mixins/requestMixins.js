const APIURL = "https://api.dsen.tech";
const axios = require("axios");

export const requestsMixin = {
  methods: {
    async getUrl(id) {
      var response = await axios.get(`${APIURL}/${id}`);
      return response.data;
    },
    addUrl(url) {
      return axios.post(`${APIURL}/url/add`, { main_url: url });
    }
    // editUrl(data) {
    //   return axios.put();
    // },
    // toggleUrlActive(id) {
    //   return axios.delete();
    // }
  }
};

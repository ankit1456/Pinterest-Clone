import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID W0RHR7oic9VVov93mDP3AIyfdx9tf7vw3ygX1ckJS-Q",
  },
});

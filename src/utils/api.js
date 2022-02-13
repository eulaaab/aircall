import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";

export const API_URL = "https://aircall-job.herokuapp.com";

export function getCalls() {
  const calls = axios
    .get(`${API_URL}/activities`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return calls;
}

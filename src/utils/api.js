import axios from "axios";

const API_URL = "https://aircall-job.herokuapp.com";

export function getCalls() {
  const calls = axios
    .get("https://aircall-job.herokuapp.com/activities")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return calls;
}

// export function getCallDetails(id) {
//   axios
//     .get(`${API_URL}/activities:id`)
//     .then(function (response) {
//       console.log("response", response);
//       return response.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

export function updateCall(id) {
  axios
    .post(`${API_URL}/activities:id`, {
      data: JSON.stringify({
        is_archived: true,
      }),
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

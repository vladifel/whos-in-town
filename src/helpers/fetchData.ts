import axios from "axios";

export const fetchData = (url: string) => {
  const options: any = {
    method: "GET",
    url,
  };

  return axios
    .request(options)
    .then(response => response.data)
    .catch(error => console.error(error));
};

import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse } from 'axios';

const getBranch = async () => {
axios.get('https://api.github.com/repos/pabal1708/docs-content/branches/main')
  .then(function (response) {
    console.log("exito!");
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

export default apiBranch;
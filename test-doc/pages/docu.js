import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Markdown from 'markdown-to-jsx';

function Docu() {

    const [conte, setConte] = useState("");
    const [markdown, setMarkdown] = useState("");
    const header = 'Accept: application/vnd.github.VERSION.raw';
    const token= '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';

    const myHeaders = new Headers();
myHeaders.append("Accept", "application/vnd.github.v3.raw+json");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const pepe = () => {
    fetch("https://api.github.com/repos/pabal1708/docs-content/contents/src/docs/test.md", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const config = {
    method: 'get',
    url: 'https://api.github.com/repos/pabal1708/docs-content/contents/src/docs/test.md',
    headers: { 
      'Accept': 'application/vnd.github.V3.raw'
    }
  };
  const test2 = () => {
  axios(config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
  

        useEffect(() => {
            axios.get('https://api.github.com/repos/pabal1708/docs-content/contents/src/docs/test.md')
            .then((response) => {setConte(response.data.content)})
            .then(setMarkdown(atob(conte)));
            }, [conte]);

            useEffect(() => {
              pepe();
              test2();
                }, []);
           
  return (
    <div>
    <div>docu</div>
    <Markdown children={markdown} />
    </div>
)}

export default Docu
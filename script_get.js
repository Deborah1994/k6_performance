import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 50,
    duration: '60s'
}

//Performance de uma requisição GET
export default function () {
    http.get('https://jsonplaceholder.typicode.com/posts');
    sleep(1);
}
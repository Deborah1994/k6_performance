import http from 'k6/http';
import {check} from 'k6';

export let options = {
    vus: 1,
    duration: '30s'
};

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const usernames = ['Bret', 'Antonette', 'Samantha', 'Karianne', 'Kamren'];

export default function () {
    for (let i = 0; i < usernames.length; i++) {
        let username = usernames[i];
    
        let url = `${baseURL}?username=${username}`;
        let res = http.get(url);
    
        check(res, {
            'status is 200': (r) => r.status === 200
        });
    }
}

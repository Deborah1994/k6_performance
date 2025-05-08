import http from 'k6/http';
import {check, sleep} from 'k6';

export const options = {
    vus: 1,
    duration: '30s'
};

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const usernames = ['Bret', 'Antonette', 'Samantha', 'Karianne', 'Kamren'];

export default function () {
    for (let i = 0; i < usernames.length; i++) {
        let username = usernames[i];
    
        let url = `${baseURL}?username=${username}`;
        let startTime = new Date();
        let res = http.get(url);
        let endTime = new Date();
    
        check(res, {
            'status is 200': (r) => r.status === 200
        });

        let duration = endTime - startTime;
        console.log(`Transaction ${i + 1} took ${duration} ms`);

        //Add a 5 second pacing
        sleep(5);

        //Add a 5 second think time
        if(i !== usernames.length - 1) {
            sleep(5);
        }
    }
}
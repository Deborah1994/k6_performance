import http from 'k6/http';
import {check, sleep} from 'k6';

export default function () {

    //Define the payload data

    let formData = {
        username: 'one',
        password: 'one',
        signon: 'Login',
        _sourcePage: '4NZoRZNnUzO1hSdqPM3ROKEGl8mkpGzTZq5Cv1EqVXmyqr06YKAlonCu-Us9jU-rmAGg7pouWR-KkWP0YjL8JVinFpaxqzCYFIJsiQVP3X8=',
        __fp: 'GL4YD5DuunNbi3awQPPtTBw5R0n4FKj3IO39M8n0ZCXWZc2rq_qVPRwmEUsllJGV'
    };

    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    let res = http.post('https://petstore.octoperf.com/actions/Account.action', formData, { headers: headers});

    console.log(res.body);

    check(res, {
        'Logged is successfully': (r) => r.body.includes('Welcome')
    });

    sleep(3);
}
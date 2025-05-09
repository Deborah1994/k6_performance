import http from 'k6/http';
import {check} from 'k6';

const options = {
    vus: 1,
    duration: '10s'
};

export default function () {
    const res = http.get('https://jsonplaceholder.typicode.com/posts/1/comments');

    const comment = res.json()[2];

    check(comment, {
        'Comment has correct email': (c) => c.email === 'Nikita@garfield.biz',
        'Comment has correct name': (c) => c.name === 'odio adipisci rerum aut animi'
    })
}
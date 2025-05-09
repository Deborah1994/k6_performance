import http from 'k6/http';
import {sleep} from 'k6';

export let options = {
    vus: 1,
    duration: '10s'
};

export default function () {
    for(let i = 1; i <= 6; i++) {
        let url = `https://petstore.octoperf.com/actions/Cart.action?addItemToCart=&workingItemId=EST-${i}`;
        let res = http.get(url);

        console.log(`Item EST-${i} was added to the cart. Status code: ${res.status}`);

        sleep(2);
    }
}
const axios = require('axios'); 

const requestRandomJoke = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random')

    if(response.status >= 200 && response.status < 400) {
        console.log("Success");
        console.log(response.data.value);
    } else {
        console.log("Response Error");
    }
};


const getRandomJoke = () => {
    try {
        requestRandomJoke();
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Promise done");
    }
}

getRandomJoke();

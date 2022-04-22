const fetch = require('node-fetch');

const API_VERSION = 'v1';

exports.getDataFromAPI = async function (baseurl) {
    const url = `${baseurl}/${API_VERSION}/someurl`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    } catch (e) {
        /* eslint-disable no-console */
        console.error(`Could not reach API : "${url}"`);
    }
    return {};
};
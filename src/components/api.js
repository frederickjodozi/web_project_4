export default class Api {
    constructor({baseUrl, authToken}) {
        this._baseUrl = baseUrl;
        this._authToken = authToken
    }
    
    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._authToken
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Err: ${res.status}`))
            .catch((err) => {
                console.log(err);
            });
    }
}
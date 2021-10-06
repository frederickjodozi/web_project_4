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
    
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._authToken
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Err: ${res.status}`))
        .catch((err) => {
            console.log(err);
        });
    }

    editUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Err: ${res.status}`))
        .catch((err) => {
            console.log(err);
        });
    }

    addCard({name, link}) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                link
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Err: ${res.status}`))
        .catch((err) => {
            console.log(err);
        });
    }
}
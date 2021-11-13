export default class Api {
    constructor({baseUrl, authToken}) {
        this._baseUrl = baseUrl;
        this._authToken = authToken
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

    editUserAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH", 
            headers: {
                authorization: this._authToken,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Err: ${res.status}`))
        .catch((err) => {
            console.log(err);
        });
    }
    
    addCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Err: ${res.status}`))
        .catch((err) => {
            console.log(err);
        });
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Err: ${res.status}`))
        .catch((err) => {
            console.log(err);
        });
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Err: ${res.status}`))
        .catch((err) => {
            console.log(err);
        });
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Err: ${res.status}`))
        .catch((err) => {
            console.log(err);
        });
    }
}
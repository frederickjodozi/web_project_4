export default class UserInfo {
    constructor(profileName, profileProfession) {
        this._profileName = document.querySelector(profileName);
        this._profileProfession = document.querySelector(profileProfession);
    }

    getUserInfo() {
        return {
            name: this._profileName,
            profession: this._profileProfession
        }
    }

    setUserInfo(data) {
        this._profileName.textContent = data.name;
        this._profileProfession.textContent = data.profession;
    }
}
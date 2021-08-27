export default class UserInfo {
    constructor(profilename, profileprofession) {
        this._profileName = document.querySelector(profilename);
        this._profileProfession = document.querySelector(profileprofession);
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
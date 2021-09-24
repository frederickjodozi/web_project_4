export default class UserInfo {
    constructor(profileName, profileProfession, profileImage) {
        this._profileName = document.querySelector(profileName);
        this._profileProfession = document.querySelector(profileProfession);
        this._profileImage = document.querySelector(profileImage)
    }

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            profession: this._profileProfession.textContent
        }
    }

    setUserInfo(data) {
        this._profileName.textContent = data.name;
        this._profileProfession.textContent = data.about;
        this._profileImage.src = data.avatar;
    }
}
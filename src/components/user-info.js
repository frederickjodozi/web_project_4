export default class UserInfo {
    constructor(profileName, profileProfession, profileAvatar) {
        this._profileName = document.querySelector(profileName);
        this._profileProfession = document.querySelector(profileProfession);
        this._profileAvatar = profileAvatar;
    }

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            profession: this._profileProfession.textContent
        }
    }

    setUserInfo(data) {
        this._profileName.textContent = data.name,
        this._profileProfession.textContent = data.about,
        this._profileAvatar.style.backgroundImage = `url(${data.avatar})`
    }

    setUserAvatar(data) {
        this._profileAvatar.style.backgroundImage = `url(${data.avatar})`;
    }
}
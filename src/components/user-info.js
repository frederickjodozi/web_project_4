export default class UserInfo {
    constructor(profilename, profileprofession) {
        this._profileName = profilename;
        this._profileProfession = profileprofession;
    }

    getUserInfo() {
        this._userInfo = {
            name: this._profileName,
            profession: this._profileProfession
        }
        return this._userInfo; 
    }

    setUserInfo(data) {
        this._profileName.textContent = data.name;
        this._profileProfession.textContent = data.profession;
    }
}
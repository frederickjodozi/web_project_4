export default class UserInfo {
    constructor(name, profession, profilename, profileprofession) {
        this._username = name;
        this._userprofession = profession;
        this._profileName = profilename;
        this._profileProfession = profileprofession;
    }

    getUserInfo() {
        this._username.value = this._profileName.textContent;
        this._userprofession.value = this._profileProfession.textContent;
    }

    setUserInfo({data}) {
        this._profileName.textContent = data.name;
        this._profileProfession.textContent = data.profession;
    }
}
export default class UserInfo {
    constructor(name, profession, profilename, profileprofession) {
        this._username = name;
        this._userprofession = profession;
        this._profileName = profilename;
        this._profileProfession = profileprofession;
    }

    getUserInfo() {
        this._userinfo = {name: this._username, profession: this._userprofession}
        return this.userinfo;
    }

    setUserInfo({data}) {
        this._profileName.textContent = data.Name;
        this._profileProfession.textContent = data.Profession;
    }
}
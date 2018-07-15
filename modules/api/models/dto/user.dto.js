class UserDto {

    constructor() {
        this.name = null;
        this.username = null;
        this.avatar = null;
        this.company = null;
        this.blog = null;
    };

    getName() {
        return this.name;
    };

    setName(name) {
        return this.name = name;
    };

    getUsername() {
        return this.username;
    };

    setUsername(username) {
        return this.username = username;
    };

    getAvatar() {
        return this.avatar;
    };

    setAvatar(avatar) {
        return this.avatar = avatar;
    };

    getCompany() {
        return this.company;
    };

    setCompany(company) {
        return this.company = company;
    };

    getBlog() {
        return this.blog;
    };

    setBlog(blog) {
        return this.blog = blog;
    };

    toObject() {
        return {
            name: this.getName(),
            username: this.getUsername(),
            avatar: this.getAvatar(),
            company: this.getCompany(),
            blog: this.getBlog()
        };
    }

}

module.exports = UserDto;
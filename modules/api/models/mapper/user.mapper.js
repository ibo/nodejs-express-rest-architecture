var UserDto = require('../dto/user.dto');

class UserMapper {

    user(data) {
        var User = new UserDto();
        User.setName(data.name);
        User.setUsername(data.login);
        User.setAvatar(data.avatar_url);
        User.setCompany(data.company);
        User.setBlog(data.blog);
        return User.toObject();
    }

}

module.exports = new UserMapper();
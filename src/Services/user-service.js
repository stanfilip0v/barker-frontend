import { get } from './requester';

class UserService {
    constructor() {
        this.baseUrl = 'http://localhost:1337/user';
    }

    getUser(userId) {
        return get(`${this.baseUrl}/${userId}`);
    }
}

export default UserService;
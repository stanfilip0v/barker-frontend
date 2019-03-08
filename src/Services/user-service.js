import { get, post } from './requester';

class UserService {
    constructor() {
        this.baseUrl = 'http://localhost:1337/user';
    }

    getUser(userId) {
        return get(`${this.baseUrl}/${userId}`);
    }

    followUser(userId) {
        return post(`${this.baseUrl}/follow/${userId}`);
    }
}

export default UserService;
import { get, post } from './requester';

class UserService {
    constructor() {
        this.baseUrl = 'http://localhost:1337/user';
    }

    getSuggested = () => {
        return get(`${this.baseUrl}/suggested`);
    }

    getFollowing = (username) =>  {
        return get(`${this.baseUrl}/following/${username}`);
    }

    getFollowers = (username) =>  {
        return get(`${this.baseUrl}/followers/${username}`);
    }

    getUser = (userId) => {
        return get(`${this.baseUrl}/profile/${userId}`);
    }

    followUser = (userId) => {
        return post(`${this.baseUrl}/follow/${userId}`);
    }
}

export default UserService;
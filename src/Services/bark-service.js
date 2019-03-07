import { get, post } from './requester';

class BarkService {
    constructor() {
        this.baseUrl = 'http://localhost:1337/bark';
        this.followingBarks = `${this.baseUrl}/getBarksByFollowing`;
        this.createNewBark = `${this.baseUrl}/create`;
    }

    getBarksByFollowing() {
        return get(this.followingBarks);
    }

    createBark(content) {
        return post(this.createNewBark, content);
    }
}

export default BarkService;
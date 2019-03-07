import { get } from './requester';

class BarkService {
    constructor() {
        this.baseUrl = 'http://localhost:1337/bark';
        this.loginUrl = `${this.baseUrl}/signin`
    }

    getBarksByFollowers(credentials) {
        return get(this.loginUrl, credentials);
    }
}

export default BarkService;
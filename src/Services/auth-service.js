import { post } from './requester';

class AuthSerice {
    constructor() {
        this.baseUrl = 'http://localhost:1337/user';
        this.loginUrl = `${this.baseUrl}/signin`
    }

    login(credentials) {
        return post(this.loginUrl, credentials);
    }
}

export default AuthSerice;
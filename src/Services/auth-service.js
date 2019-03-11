import { post } from './requester';

class AuthSerice {
    constructor() {
        this.baseUrl = 'http://localhost:1337/user';
        this.loginUrl = `${this.baseUrl}/signin`;
        this.registerUrl = `${this.baseUrl}/signup`;
    }

    login(credentials) {
        return post(this.loginUrl, credentials);
    }

    register(credentials) {
        return post(this.registerUrl, credentials);
    }
}

export default AuthSerice;
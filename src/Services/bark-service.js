import { get, post, remove } from './requester';

class BarkService {
    constructor() {
        this.baseUrl = 'http://localhost:1337/bark';
        this.followingBarks = `${this.baseUrl}/getBarksByFollowing`;
        this.createNewBark = `${this.baseUrl}/create`;
        this.details = `${this.baseUrl}/details`;
        this.like = `${this.baseUrl}/like`
    }

    getBarksByFollowing() {
        return get(this.followingBarks);
    }

    createBark(content) {
        return post(this.createNewBark, content);
    }

    getBarkById(barkId) {
        return get(`${this.details}/${barkId}`);
    }

    deleteBark(barkId) {
        return remove(`${this.baseUrl}/${barkId}/delete`)
    }

    likeBark(barkId) {
        return post(`${this.like}/${barkId}`);
    }
}

export default BarkService;
import { post } from './requester';

class CommentService {
    constructor() {
        this.baseUrl = 'http://localhost:1337/comment';
        this.create = `${this.baseUrl}/create`
    }

    createComment(barkId, comment) {
        return post(`${this.create}/${barkId}`, comment);
    }
}

export default CommentService;
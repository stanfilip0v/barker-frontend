import { post, get, remove } from './requester';

class ReportService {
    constructor() {
        this.baseUrl = 'http://localhost:1337/report';
        this.create = `${this.baseUrl}/create`
    }

    createReport(barkId, content) {
        return post(`${this.create}/${barkId}`, content);
    }
}

export default ReportService;
import { post, get, remove } from './requester';

class ReportService {
    constructor() {
        this.baseUrl = 'http://localhost:1337/report';
        this.create = `${this.baseUrl}/create`;
        this.get = `${this.baseUrl}/getall`;
        this.delete = `${this.baseUrl}/delete`
    }

    createReport(barkId, content) {
        return post(`${this.create}/${barkId}`, content);
    }

    getReports() {
        return get(this.get);
    }

    discardReport(reportId) {
        return remove(`${this.delete}/${reportId}`);
    }
}

export default ReportService;
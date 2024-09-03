export class PageRequest {
    page: number = 1;
    limit: number = 10;
    constructor(page: number = 1, limit: number = 10) {
        this.page = page;
        this.limit = limit;
    }
}

class HEADERS {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }

    static HOME_PAGE = new HEADERS('إضافة منتج جديد');

}
export default HEADERS;

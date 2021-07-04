class AppURL {

    static ApiBaseURL = "http://127.0.0.1:8000/api/";
    static ServerBaseURL = "http://127.0.0.1:8000";

    static visitorDetails = this.ApiBaseURL+'getVisitorDetails';
    static postContactDetails = this.ApiBaseURL+'postContactDetails';
    static getSiteInfo = this.ApiBaseURL+'getSiteInfo';
    static getAllCategories = this.ApiBaseURL+'getAllCategories';
    static getProductByRemark = this.ApiBaseURL+'getProductByRemark';
    static getCategoryAndProductByCategory(category_slug) {
        return this.ApiBaseURL+'getCategoryAndProductByCategory/'+category_slug;
    }
    static getFeaturedCategory = this.ApiBaseURL+'getFeaturedCategory';
    static productSearch = this.ApiBaseURL+'productSearch';
    static getProductDetails (slug) {
        return this.ApiBaseURL+'getProductDetails/'+slug;
    }
    static getNotifications = this.ApiBaseURL+'getNotifications';

}

export default AppURL;

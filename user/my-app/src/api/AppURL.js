class AppURL {

    static BaseURL = "http://127.0.0.1:8000/api/";
    static ServerBaseURL = "http://127.0.0.1:8000";

    static visitorDetails = this.BaseURL+'getVisitorDetails';
    static postContactDetails = this.BaseURL+'postContactDetails';
    static getSiteInfo = this.BaseURL+'getSiteInfo';
    static getAllCategories = this.BaseURL+'getAllCategories';
    static getProductByRemark = this.BaseURL+'getProductByRemark';

}

export default AppURL;

class AppURL {

    static BaseURL = "http://127.0.0.1:8000/api/";

    static visitorDetails = this.BaseURL+'getVisitorDetails';
    static postContactDetails = this.BaseURL+'postContactDetails';
    static getSiteInfo = this.BaseURL+'getSiteInfo';
    static getAllCategories = this.BaseURL+'getAllCategories';

}

export default AppURL;

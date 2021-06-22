class Validation {
    static NameRegx=/^[A-Za-z\'\s\.\:\-]+$/;
    static MobileRegx=/^(?:\+?88|0088)?01[15-9]\d{8}$/;
    static EmailRegx = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
}

export default Validation;

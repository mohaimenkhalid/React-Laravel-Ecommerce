class AppStorage {

     static store(token, user) {
         this.setToken(token)
         this.setUser(user)
     }

    static setToken(token) {
        localStorage.setItem('token', token)
     }

    static setUser(user) {
        localStorage.setItem('user_details', user)
    }

    static clear() {
         localStorage.removeItem(['token', 'user_details'])
    }

    static getToken() {
        localStorage.getItem("token");
    }

    static getUser(){
        localStorage.getItem("user_details");
    }
}

export default AppStorage;

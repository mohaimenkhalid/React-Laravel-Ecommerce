class AppStorage {

     store(token, user) {
         this.setToken(token)
         this.setUser(user)
     }
     setToken(token) {
        localStorage.setItem('token', token)
     }
     setUser(user) {
        localStorage.setItem('user_details', user)
    }

    clear() {
         localStorage.removeItem('token');
         localStorage.removeItem('user_details');
    }

    getToken() {
        return JSON.parse(localStorage.getItem("token"));
    }

    getUser(){
        return JSON.parse(localStorage.getItem("user_details"));
    }
}

export default new AppStorage();

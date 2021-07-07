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
         localStorage.removeItem(['token', 'user_details'])
    }

    getToken() {
        localStorage.getItem("token");
    }

    getUser(){
        localStorage.getItem("user_details");
    }
}

export default new AppStorage();
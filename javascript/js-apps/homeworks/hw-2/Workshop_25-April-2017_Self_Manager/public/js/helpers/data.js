let data = (function() {

  let user = {
    login: function(userData) {
      let user = {
        username: userData.username,
        passHash: CryptoJS.SHA1(userData.username + userData.password).toString()
      };

      return jsonRequester.put("/api/users/auth", {
        data: user
      })
    },
    register: function(userData) {
      let user = {
        username: userData.username,
        passHash: CryptoJS.SHA1(userData.username + userData.password).toString()
      };

      return jsonRequester.post("/api/users", {
        data: user
      })
    }
  };

  let todo = {
    all: function() {
      return jsonRequester.get("/api/todos", {
        headers: {
          "x-auth-key": localStorage.getItem("LOGIN_AUTHKEY")
        }
      });
    },
    create: function(todoData) {
      return jsonRequester.post("/api/todos", {
        data: todoData,
        headers: {
          "x-auth-key": localStorage.getItem("LOGIN_AUTHKEY")
        }
      });
    }
  };

  let event = {
    all: function() {
      return jsonRequester.get("/api/events", {
        headers: {
          "x-auth-key": localStorage.getItem("LOGIN_AUTHKEY")
        }
      });
    },
    create: function(todoData) {
      return jsonRequester.post("/api/events", {
        data: todoData,
        headers: {
          "x-auth-key": localStorage.getItem("LOGIN_AUTHKEY")
        }
      });
    }
  };

  return {
    user,
    todo,
    event
  }
}());
let apiUser = "http://localhost:3000/user";

//login
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const bntLogin = document.querySelector(".button");

// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  console.log(data);
  return data;

};


// login
bntLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "" || password.value == "") {
    alert("Không được để trống tài khoản or mật khẩu")
  }
  else {

    getUser().then((data) => {
      const user = data.find((item) =>
      

        item.username == username.value && item.password == password.value
        


      )
      if (user) {

        alert(`Đăng nhập thành công `)

        window.location.href = "index.html"

      }
      else {
        alert("Kiểm tra lại tài khoản or mật khẩu")
      }





    }
    )

  }
}

)




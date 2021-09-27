window.addEventListener("load", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuChild = document.querySelectorAll(".has-child > a");
  menuChild?.forEach((el) =>
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const subMenu = e.target?.nextElementSibling?.classList.toggle(
        "show"
      );
    })
  );
  menuToggle?.addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show");
  });
});


function sayYes() {
  var Username = document.getElementById("Uname").value;
  var Password = document.getElementById("Pass").value;

  if(Username =="" && Password=="") 
    alert("Đừng ngu như vậy! \nHãy nhập Username và Password như một người đàn ông!");
  else if(Username =="") alert("Chưa nhập Username");
  else if(Password == "") alert("Chưa nhập Password");
  else{

    document.getElementById("Nofication").innerHTML = 
    "<em>Thanks for Register!!</em> <br><br> Username: " 
    + Username +"<br>Password: "+Password +"<br> HaHa <em>Tao lừa mày đó!</em>"; 
  }

  

  
}
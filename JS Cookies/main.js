// Set Cookie
function setCookie(name, value, days) {
    let d = new Date();
 d.setTime(d.getTime() + (days*24*60*60*1000));
 let expires = "expires="+ d.toUTCString();
 document.cookie = name + "=" + value + ";" + expires + ";path=/";
};


// Get Cookie
function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let c of cookies) {
    let [key, value] = c.split("=");
    if (key === name) return value;
  }
  return "";
};

// Check Cookie
function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:");
    if (user != "" && user != null) {
      setCookie("username", user, 7);
    }
  }
}
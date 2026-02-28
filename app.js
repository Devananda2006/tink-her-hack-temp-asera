let users = JSON.parse(localStorage.getItem("users")) || [];
let posts = JSON.parse(localStorage.getItem("posts")) || [];

/* SAVE */
function saveUsers(){ localStorage.setItem("users",JSON.stringify(users)); }
function savePosts(){ localStorage.setItem("posts",JSON.stringify(posts)); }

/* AUTH */
function register(){
if(!regUser.value || !regPass.value){alert("Fill details");return;}
if(users.find(u=>u.username===regUser.value)){alert("Username exists");return;}
users.push({username:regUser.value,password:regPass.value});
saveUsers();
alert("Registered! Login now.");
}

function login(){
let found = users.find(u=>u.username===logUser.value && u.password===logPass.value);
if(found){
localStorage.setItem("currentUser",found.username);
window.location.href="dashboard.html";
}else alert("Invalid credentials");
}

function logout(){
localStorage.removeItem("currentUser");
window.location.href="index.html";
}

function checkLogin(){
let user = localStorage.getItem("currentUser");
if(!user) window.location.href="index.html";
return user;
}

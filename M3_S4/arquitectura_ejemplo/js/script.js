import {get, post, deletes} from "./service"

const urlUsers = 'http://localhost:3000/users'
const routes = {
  "/": "/html/users.html",
  "/users": "/html/users.html",
  "/new": "/html/newUser.html"
};

document.body.addEventListener("click", (e) => {
     console.log("click detectado en:", e.target);
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

async function navigate(pathname) {
  const route = routes[pathname];
  console.log("Navigating to:", pathname, "→", route);

  const html = await fetch(route).then((res) => res.text());
  document.getElementById("content").innerHTML = html;

if (pathname === "/users") {
    setupUsers();
    renderUsers()
  }
  else if(pathname === "/newuser"){
    createUser()
  }

  history.pushState({}, "", pathname);
}

window.addEventListener("popstate", () =>
  navigate(location.pathname)
);

async function renderUsers(){
  let containerUsers = document.getElementById('users')
  let usersData = await get(urlUsers)
  usersData.forEach(user => {
    containerUsers.innerHTML += 
    `<div style = "border:black 1px solid">
      <p> ${user.name}</p>
      <p> ${user.email}</p>
      <p> ${user.id}</p>
      <button class ="delete-btn" data-id = ${user.id}> Delete</button>
    </div>
    `
    
  });
  let buttons = document.querySelectorAll('.delete-btn')
  buttons.forEach(btn => {
    btn.addEventListener('click', async (e) =>{
      e.preventDefault()
      let id = btn.dataset.id;
      let deleteUser = await deletes(urlUsers, id)
      if(deleteUser){
        alert('Eliminado correctamente')
        location.reload()
      }
      else{
        alert('No fue eliminado correctamente')
      }
  
    })
  })
  console.log(usersData)
}
 function createUser(){
  let form = document.getElementById('new-user-form')
  form.addEventListener('submit',async (e) => {
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let newUser = {
    "name": name,
    "email": "jpjenz@outlook.com",
    "phone":"10293844593889"
  }
  let createUser = await post()
  })
}
function setupUsers() {
    console.log("ola")
  const containerUser = document.getElementById("users");
  if (containerUser) {
    containerUser.innerHTML = `<h1>Hola</h1>`;
  }
}
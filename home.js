const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

const loginButton = document.getElementById('login_button');

loginButton.addEventListener('click', (event) => logar(event));

//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'; 
})

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'; 
})

//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span').classList.toggle('active');

})
Orders.forEach(order=> {
    const tr = document.createElement ('tr');
    const trContent = `
                    <td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td>${order.paymentStatus}</td>
                    <td class="${order.shipping ==='Declined' ? 'danger' : order.
                    shipping === 'pending' ? 'warning' 
                    : 'primary'}">${order.shipping}</td>
                    <td class="primary">Details</td>`;
    

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);


})

/*
function modal_1(){
let modal = document.querySelector('.modal_1')
modal.style.display = 'block';
}
function remover_modal_1(){
    let fechar = document.querySelector('.modal_1')
    fechar.style.display = 'none';
}
function modal_2(){
    let modal = document.querySelector('.modal_2')
    modal.style.display = 'block';
    }
    function remover_modal_2(){
        let fechar = document.querySelector('.modal_2')
        fechar.style.display = 'none';
    }
function modal_3(){
    let modal = document.querySelector('.modal_3')
    modal.style.display = 'block';
    }
    function remover_modal_3(){
        let fechar = document.querySelector('.modal_3')
        fechar.style.display = 'none';
    }    
*/

    // login // 


function logar(event){
  event.preventDefault()
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;
  
  if(login === "admin" && senha === "admin"){
      alert('Bem-vindo');
      window.location.href = window.location.href + "home.html";
  }else{
      alert('Usuário ou senha incorretos');
  }
}

function logout () {

  window.location.href = "index.html";

}

// manipulação dom //

const dash = document.querySelectorAll ('.dash');
const users= [
  {username: 'Aurelio', password:'aurelio1', balance:50 },
  {username: 'Charlie', password:'charlie1', balance:100},
  {username: 'Olga', password:'olga1', balance:150},
];

function Login(username, password){ 
  const user = users.find(user => user.username === username && user.password === password);
 if (user){
  console.log("El usuario es correcto")
  showMenu(user);
 } else{
  console.log("Usuario o contraseña incorrectos")
 }
}

function showMenu(user){
  console.log("Bienvenido" + user.username + ".");
  console.log("1. Consultar saldo.");
  console.log("2. Retirar saldo");
  console.log("3. Depositar saldo");

  const option = prompt("Ingrese el numero de opcion:");
  switch (option){
    case "1":
      consultarSaldo(user);
      break;

    case "2":
      retirar(user);
      break;
      
    case "3":
      depositar(user);
      break;
      
      default:
      console.log("Opcion no válida");
  }
}

function ConsultarSaldo(user){
  console.log("El saldo actual es" + user.balance);
}

function retirar(user){
  const amount = parseFloat(prompt("Ingrese la cantidad a retirar"))
  if (isNaN(amount)){
    console.log("Cantidad no válida");
    return;
  }
  if(amount > user.balance){
    console.log("Saldo insuficiente.");
  } else {
    user.balance -= amount;
    console.log("Retiro exitoso. Saldo restante:" + user.balance);
  }
  }

function Depositar(user){
const amount = parseFloat(prompt("Ingrese la cantidad a depositar"));
  if isNaN(amount){
    console.log("Ingrese una cantidad valida");
    return
  }
  
  user.balance += amount;
  console.log("Deposito exitoso. Su saldo actual es:" + user.balance);
}

const username = prompt("Ingrese su usuario:");
const password = prompt("Ingrese su contraseña:");

Login(username,password);
let number = 0;
let type = "Weird Salvy";


document.getElementById("number").textContent = number;
document.getElementById("type").textContent = type;

function count() {
  
  number++;

  
  const img = document.getElementById("salvy-pic");

  if (number === 40) { 
    alert("Leveled Up To Normal Salvy");
    type = "Normal Salvy"; 
    img.src = "https://i.ibb.co/v4VwpJtr/20250819-092053.jpg";
  }
  
  if (number === 90) {
    alert("Leveled Up To Classy Salvy");
    type = "Classy Salvy";
    img.src = "https://i.ibb.co/vCxwzt9z/Snapchat-225034590.jpg";
  }
  
  if (number === 140) {
    alert("Leveled Up To Body Builder Salvy");
    type = "Body Builder Salvy";
    img.src = "https://i.ibb.co/DgCZpCqY/unnamed.jpg";
  }
  
  if (number === 180) {
    alert("Leveled Up To Cyborg Salvy");
    type = "Cyborg Salvy";
    img.src = "https://i.ibb.co/qMJZDpj6/unnamed.jpg";
  }
  
  if (number === 210) {
    alert("Salvy Suffered A Tragic Death By A Rouge Killer Robot");
    type = "Salvy Suffered A Tragic Death By A Rouge Killer Robot";
    img.src = "https://i.ibb.co/m5pmNGPr/449ffc8e-927a-4936-a976-e2bd041cd781.jpg";
  }
  
  if (number === 211) { 
    alert("You Won!");
    alert("You Can Keep Clicking But There Is No More Story Line");
    type = "You Won!";
    img.src = "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6ec9fad35b462b18de661e3bb5b341134d321740e5967071eeb946e7414cdad3264b2297fe135e7f2400a9cfb2700ec192"
  }

  
  document.getElementById("number").textContent = number;
  document.getElementById("type").textContent = type;
}

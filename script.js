/*function multiplyByTwo() {
  const number = document.getElementById("number").value;
  const result = number * 5;
  document.getElementById("result").innerHTML = "Resultado es: " + result;
}


function division() {
  const numbers = document.getElementById("divi").value;
  const results = numbers / 2;
  document.getElementById("resultado").innerHTML = "Resultado es: " + results;
}

function aritmetica()
{

}
*/


function calculate() {
  const operation = document.getElementById("operation").value;
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  let result;
  if (operation === "add") 
  {
      result = parseInt(num1) + parseInt(num2);
      document.getElementById("result").innerHTML = "Resultado de : "+num1+ " + " + num2+ " = "+ result;

  } else if (operation === "subtract") 
  {
      result = parseInt(num1) - parseInt(num2);
      document.getElementById("result").innerHTML = "Resultado de : "+num1+ " - " + num2+ " = "+ result;

  } else if (operation === "multiply")
   {
      result = parseInt(num1) * parseInt(num2);
      document.getElementById("result").innerHTML = "Resultado de : "+num1+ " * " + num2+ " = "+ result;

  } else if (operation === "divide") 
  {
      result = parseInt(num1) / parseInt(num2);
      document.getElementById("result").innerHTML = "Resultado de : "+num1+ " / " + num2+ " = "+ result;

  } else if (operation === "power") 
  {
      result = Math.pow(parseInt(num1), parseInt(num2));
      document.getElementById("result").innerHTML = "Resultado de : "+num1+ " ^ " + num2+ " = "+ result;

  }else 
  {
      result = "Operación no válida";
  }
}

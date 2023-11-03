
// IPO Calculator


// button event listener


document.getElementById("btn").addEventListener("click", btnClicked);


// Setting Variable Values


function btnClicked() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let h = +document.getElementById("h").value;


  // Calculating Area of Trapezoid


  let area = 0.5 * (a + b) * h;


  // Output


  document.getElementById("area1").innerHTML = area;
}

let result = "";
function submitButton(value) {
  document.getElementById("test").value += value; 
}

function Equalator() {
  let finalResult = document.getElementById("test").value;
  result = eval(finalResult);
  document.getElementById("test").value = result;
}
function deleteButton() {
  let currentTest = document.getElementById("test").value;
  if (currentTest.length > 0) {
    let newText = currentTest.substring(0, currentTest.length - 1);
    document.getElementById("test").value = newText;
  }
}

function ClearButton() {
  document.getElementById("test").value = "";
  result = "";
}
ClearButton();

function displayButton() {
    var buttonDiv = document.querySelector('.Buttons');
    if (buttonDiv.style.display === 'none') {
        buttonDiv.style.display = 'grid';
        buttonDiv.classList.toggle('animated'); // Add or remove 'animated' class

    } else {
        buttonDiv.style.display = 'none';
    }
}
document.getElementById("ButtonClick").addEventListener("click", displayButton);

 OnclickButton(() => {
    document.getElementById("ButtonClick");
    displayButton();
})



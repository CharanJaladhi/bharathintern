function convert() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
    var kelvin = document.getElementById("kelvin").value;

    if (celsius !== "") {
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = parseFloat(celsius) + 273.15;
      document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
      document.getElementById("kelvin").value = kelvin.toFixed(2);
    } else if (fahrenheit !== "") {
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = (parseFloat(fahrenheit) + 459.67) * 5/9;
      document.getElementById("celsius").value = celsius.toFixed(2);
      document.getElementById("kelvin").value = kelvin.toFixed(2);
    } else if (kelvin !== "") {
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin * 9/5) - 459.67;
      document.getElementById("celsius").value = celsius.toFixed(2);
      document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    } else {
      alert("Please enter a temperature value.");
      return;
    }

    
  }
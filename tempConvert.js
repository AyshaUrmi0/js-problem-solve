function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


let celsiusTemp = 25;
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp}°F`);

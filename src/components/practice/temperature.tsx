import { useEffect, useState } from "react";


// export const TemperatureConverter = () => {
//   const [celsius, setCelsius] = useState<number>(0);
//   const [fahrenheit, setFahrenheit] = useState<number>(0);

//     const handleCelsiusChange = (value: number) => {
//         if (isNaN(value)) {
//             setCelsius(0);
//             setFahrenheit(0);
//             return;
//         }

//         setCelsius(value);
//         setFahrenheit((value * 9) / 5 + 32);
//     };

//     const handleFahrenheitChange = (value: number) => {
//         if (isNaN(value)) {
//             setCelsius(0);
//             setFahrenheit(0);
//             return;
//         }

//         setFahrenheit(value);
//         setCelsius(((value - 32) * 5) / 9);
//     };

//     return(
//             <div className="temperature-converter">
//                 <h2>Temperature Converter</h2>
//                 <div className="input-group">
//                     <label>Celcious</label>
//                     <input type="number" value={celsius} onChange={(e)=>handleCelsiusChange(Number(e.target.value))} placeholder="Celsius"/>
//                     <label>Fahrenheit</label>
//                     <input type="number" value={fahrenheit} onChange={(e)=>handleFahrenheitChange(Number(e.target.value))} placeholder="Fahrenheit"/>
//                 </div>
//             </div>
//     )
// }

export const TemperatureConverter = () => {
    // const [celsius, setCelsius] = useState<number>(0);
    // const [fahrenheit, setFahrenheit] = useState<number>(0);
const [input, setInput] = useState<number>(1);
const [output, setOutput] = useState<number>(1);
const [temperatureTarget, setTemperatureTarget] = useState<"celsius" | "fahrenheit">("celsius");

const handleInputChange = (input: string) => {
    const value = parseFloat(input);
    if (isNaN(value)) {
        setInput(0);
        return;
    }
    setInput(value);
   if(temperatureTarget === "celsius"){
    setInput(value);
    const fahrenheit = (value * 9) / 5 + 32;
    setOutput(fahrenheit);
   } else {
    setInput(value);
    const celsius = ((value - 32) * 5) / 9;
    setOutput(celsius);
   }
}
useEffect(() => {handleInputChange(input.toString())},[temperatureTarget])
    return (
        <div className="temperature-converter">
            <h2>Temperature Converter</h2>
            <select value={temperatureTarget} onChange={(e)=>setTemperatureTarget(e.target.value as "celsius" | "fahrenheit")} className="temperature-select">   
                <option value="celsius">Celsius to Fahrenheit   </option>
                <option value="fahrenheit">Fahrenheit to Celsius</option>
            </select>
            <input type="number" className="input" placeholder ="Enter temperature" value={input} onChange={(e)=>handleInputChange(e.target.value)} />
            <div className="output">Output: {output}</div>
        </div>
    )
}
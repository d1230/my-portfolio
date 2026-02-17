import "./currency.css";
import { useEffect, useState } from "react";

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const amountNum = parseFloat(amount);

    if (isNaN(amountNum)) {
      setResult(null);
      return;
    }


    const convertedAmount = () =>{

        let exchangeRate = 1;
        if(fromCurrency === 'USD'){
            exchangeRate = 1;
        }else if(fromCurrency === 'EUR'){   
            exchangeRate = 0.85;
        }else if(fromCurrency === 'KRW'){
            exchangeRate = 1100;
        }
        return amountNum / exchangeRate;
    }
    setResult(convertedAmount);
  };
  useEffect(() => {
    handleConvert();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-group">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="currency-select"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="KRW">KRW</option>
        </select>
        <input
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <div className = "output-group">
        USD:{result !== null && <p>{result.toFixed(2)}</p>}
      </div>
    </div>
  );
};

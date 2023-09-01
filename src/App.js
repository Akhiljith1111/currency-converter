import React , { useEffect, useState }from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=596360a91ec89e25c3cda95d8475aa1d&symbols=USD,AUD,INR,CAD'
// const BASE_URL = 'https://api.api-ninjas.com/v1/exchangerate?access_key=EBzdsp7v5MFiVx9HDnz2uQ==qvSc9FHGQMfm6FNs'


function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  

  let toAmount, fromAmount
  if(amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount =Math.floor(amount / exchangeRate)
  }

useEffect(() => {
fetch(BASE_URL)
.then(res => res.json())
.then(data => {
  console.log(data);
  const firstCurrency = Object.keys(data.rates)[0];
 setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
 setFromCurrency(data.base) ;
 setToCurrency(firstCurrency);
 setExchangeRate(data.rates[firstCurrency]);
});
  }, []);

  useEffect(() => {
    if(fromCurrency != null && toCurrency != null){
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res => res.json())
      .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }


  return (
    <div className="App">
  <h1>Converter</h1>
  <CurrencyRow 
  currencyOptions={currencyOptions}
  selectedCurrency={fromCurrency}
  onChangeCurrency={e => setFromCurrency(e.target.value)}
  onChangeAmount={handleFromAmountChange}
  amount={fromAmount}
  />
     <div>=</div>
  <CurrencyRow 
  currencyOptions={currencyOptions}
  selectedCurrency={toCurrency}
  onChangeCurrency={e => setToCurrency(e.target.value)}
  onChangeAmount={handleToAmountChange}
  amount={toAmount}

  />
    </div>
  );
}

export default App;


// import React, { useEffect, useState } from 'react';
// import './App.css';
// import CurrencyRow from './CurrencyRow'

// const BASE_URL = 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_NmwYqf6ZPmvaSJcLmDUWNveBYKg6x53zawLJU1xM'

// function App() {
//   const [currencyOptions, setCurrencyOptions] = useState([])
//   const [fromCurrency, setFromCurrency] = useState()
//   const [toCurrency, setToCurrency] = useState()
//   const [exchangeRate, setExchangeRate] = useState()
//   const [amount, setAmount] = useState(1)
//   const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

//   let toAmount, fromAmount
//   if (amountInFromCurrency) {
//     fromAmount = amount
//     toAmount = amount * exchangeRate
//   } else {
//     toAmount = amount
//     fromAmount = amount / exchangeRate
//   }

//   useEffect(() => {
//     fetch(BASE_URL)
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         const firstCurrency = Object.keys(data.rates)[0]
//         setCurrencyOptions([data.base, ...Object.keys(data.rates)])
//         setFromCurrency(data.base)
//         setToCurrency(firstCurrency)
//         setExchangeRate(data.rates[firstCurrency])
//       })
//   }, [])

//   useEffect(() => {
//     if (fromCurrency && toCurrency && fromCurrency !== toCurrency) {
//       fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
//         .then(res => res.json())
//         .then(data => setExchangeRate(data.rates[toCurrency]))
//     }
//   }, [fromCurrency, toCurrency])

//   function handleFromAmountChange(e) {
//     setAmount(e.target.value)
//     setAmountInFromCurrency(true)
//   }

//   function handleToAmountChange(e) {
//     setAmount(e.target.value)
//     setAmountInFromCurrency(false)
//   }

//   return (
//     <>
//       <h1>Convert</h1>
//       <CurrencyRow
//         currencyOptions={currencyOptions}
//         selectedCurrency={fromCurrency}
//         onChangeCurrency={e => setFromCurrency(e.target.value)}
//         onChangeAmount={handleFromAmountChange}
//         amount={fromAmount}
//         key="from"
//       />
//       <div className="equals">=</div>
//       <CurrencyRow
//         currencyOptions={currencyOptions}
//         selectedCurrency={toCurrency}
//         onChangeCurrency={e => setToCurrency(e.target.value)}
//         onChangeAmount={handleToAmountChange}
//         amount={toAmount}
//         key="to"
//       />
//     </>
//   );
// }

// export default App;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const apiUrl = 'https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR';
//   const apiKey = 'EBzdsp7v5MFiVx9HDnz2uQ==qvSc9FHGQMfm6FNs';

//   const [exchangeRate, setExchangeRate] = useState(null);
//   const [fromCurrency, setFromCurrency] = useState('USD');
//   const [toCurrency, setToCurrency] = useState('EUR');
//   const [amount, setAmount] = useState(1);
//   const [convertedAmount, setConvertedAmount] = useState(null);

//   useEffect(() => {
//     axios.get(apiUrl, {
//       headers: {
//         'X-Api-Key': apiKey
//       }
//     })
//     .then(response => {
//       setExchangeRate(response.data.rate);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//   }, []);

//   useEffect(() => {
//     if (exchangeRate !== null) {
//       const converted = amount * exchangeRate;
//       setConvertedAmount(converted);
//     }
//   }, [amount, exchangeRate]);

//   const handleAmountChange = (e) => {
//     const inputAmount = parseFloat(e.target.value);
//     // setAmount(newAmount);
//     if (!isNaN(inputAmount)) {
//       setAmount(inputAmount);
//     } else {
//       setAmount();
//     }

//   };

//   return (
//     <div className="App">
//       <h1>Currency Converter</h1>
//       <div>
//         <label>From Currency:</label>
//         <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
//           <option value="USD">USD</option>
//           {/* Add more currency options here */}
//         </select>
//       </div>
//       <div>
//         <label>To Currency:</label>
//         <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
//           <option value="EUR">EUR</option>
//           {/* Add more currency options here */}
//         </select>
//       </div>
//       <div>
//         <label>Amount:</label>
//         <input type="number" value={amount} onChange={handleAmountChange} />
//       </div>
//       <div>
//         <p>Converted Amount: {convertedAmount}</p>
//       </div>
//     </div>
//   );
// }

// export default App;


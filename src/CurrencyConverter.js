// import React from 'react'

// export default function CurrencyRow(props) {
//     const {
//         currencyOptions,
//         selectedCurrency,
//         onChangeCurrency,
//         onChangeAmount,
//         amount
//     } = props
//   return (
//     <div>
//      <input type="number" value={amount} onChange={onChangeAmount}/>
//      <select value={selectedCurrency} onChange={onChangeCurrency}>
//         {currencyOptions.map((option, index) => (
//              <option key={index} value={option}>{option}</option>
//         ))}
//      </select>
//         </div>
//   )
// }

// ExchangeRates.js
// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';

// const ExchangeRates = ({ baseCurrency, setInfo }) => {
//   useEffect(() => {
//     Axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=596360a91ec89e25c3cda95d8475aa1d&base=${baseCurrency}`)
//       .then((res) => {
//         setInfo(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching exchange rates:', error);
//       });
//   }, [baseCurrency]);

//   return null;
// };

// export default ExchangeRates;



// // CurrencyConverter.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CurrencyConverter = () => {
//   // State variables
//   const [amount, setAmount] = useState(1);
//   const [fromCurrency, setFromCurrency] = useState('USD');
//   const [toCurrency, setToCurrency] = useState('EUR');
//   const [exchangeRate, setExchangeRate] = useState(null);
//   const [convertedAmount, setConvertedAmount] = useState(null);
//   const [currencyOptions, setCurrencyOptions] = useState([]);

//   // Fetch currency exchange rate data from API
//   useEffect(() => {
//     axios.get('https://api.api-ninjas.com/v1/exchangerate?pair=USD_INR', {
//       headers: {
//         'X-Api-Key': '73PZqIDB6eX4ZdylwgkRMA8y7nS2ddYhsSHuWfNv', 
//       },
//     })
//     .then((response) => {
//       const rate = response.data.rate;
//       setExchangeRate(rate);
//     })
//     .catch((error) => {
//       console.error('Error fetching exchange rates:', error);
//     });
//   }, []);

//   // Update converted amount when input values change
//   useEffect(() => {
//     if (exchangeRate !== null) {
//       const converted = amount * exchangeRate;
//       setConvertedAmount(converted);
//     }
//   }, [amount, exchangeRate]);

//   // Handle input changes
//   const handleAmountChange = (e) => {
//     const newAmount = parseFloat(e.target.value);
//     setAmount(newAmount);
//   };

//   const handleFromCurrencyChange = (e) => {
//     setFromCurrency(e.target.value);
//   };

//   const handleToCurrencyChange = (e) => {
//     setToCurrency(e.target.value);
//   };

//   return (
//     <div>
//       <h2>Currency Converter</h2>
//       <div>
//         <input
//           type="number"
//           value={amount}
//           onChange={handleAmountChange}
//         />
//         <select
//           value={fromCurrency}
//           onChange={handleFromCurrencyChange}
//         >
//           <option value="USD">USD</option>
//           <option value="INR">INR</option>
//           <option value="EUR">EUR</option>
//         </select>
//         <span>to</span>
//         <select
//           value={toCurrency}
//           onChange={handleToCurrencyChange}
//         >
//           <option value="EUR">EUR</option>
//           <option value="USD">USD</option>
//           <option value="INR">INR</option>
//         </select>
//       </div>
//       <div>
//         <p>Converted Amount: {convertedAmount !== null ? convertedAmount.toFixed(2) : ''}</p>
//       </div>
//     </div>
//   );
// };

// export default CurrencyConverter;






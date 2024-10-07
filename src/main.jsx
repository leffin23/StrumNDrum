import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './stores/index.js'

// const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
// console.log('PayPal Client ID:', paypalClientId);
// const script = document.createElement('script');
// script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=EUR`;
// script.async = true;
// document.head.appendChild(script);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

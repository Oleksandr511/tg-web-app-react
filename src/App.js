import { useEffect } from 'react';
import './App.css';

//  window.Telegram.WebApp
let tg = window.Telegram.WebApp
function App() {

  useEffect(() => {
    tg.ready()
  },[])

const onClose = () => {
  tg.close()
}

  return (
    <div className="App">
      work
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;

// import React, { useEffect } from 'react';
// import './App.css';

// function App() {
//   useEffect(() => {
//     // Ensure Telegram is loaded and available
//     if (window.Telegram && window.Telegram.data) {
//       console.log(this.window.Telegram)
//       // Access the Telegram WebApp functionality
//       const tg = window.Telegram.data;
//       console.log('hi')
//       // Call the ready method
//       tg.ready();

//       // Define a function to close the Telegram WebApp
//       const onClose = () => {
//         tg.close();
//       };

//       // Attach an event listener to the close button
//       document.getElementById('closeButton').addEventListener('click', onClose);

//       // Clean up event listener when component unmounts
//       return () => {
//         document.getElementById('closeButton').removeEventListener('click', onClose);
//       };
//     } else {
//       console.log(this.window.Telegram.data)
//       console.log('Telegram WebApp is not available');
//     }
//   }, []);

//   return (
//     <div className="App">
//       <p>Work</p>
//       <button id="closeButton">Close</button>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [isTelegramAvailable, setIsTelegramAvailable] = useState(false);

//   useEffect(() => {
//     // Check if Telegram WebApp is available
//     if (window.Telegram && window.Telegram.WebApp) {
//       console.log('Telegram WebApp is available');
//       setIsTelegramAvailable(true);

//       // Access the Telegram WebApp functionalities
//       const tg = window.Telegram.WebApp;
//       tg.ready();

//       // You can define more Telegram WebApp interactions here
//     } else {
//       console.log('Telegram WebApp is not available');
//     }
//   }, []); // Empty dependency array to run the effect only once after component mount

//   const onClose = () => {
//     if (window.Telegram && window.Telegram.WebApp) {
//       window.Telegram.WebApp.close();
//     }
//   }

//   return (
//     <div className="App">
//       {isTelegramAvailable ? (
//         <div>
//           <p>Telegram WebApp is working</p>
//           <button onClick={onClose}>Close</button>
//         </div>
//       ) : (
//         <p>Telegram WebApp is not available</p>
//       )}
//     </div>
//   );
// }

// export default App;


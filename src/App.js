import React from 'react';

// function App() {
//   return (
//     <div>
//       <header>
//         <p>Hello React</p>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Maw!</div>
}

export default App;

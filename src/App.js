import React from 'react';
import ColorPicker from './components/ColorPicker'; 

function App() {
  
  const colors = ['red', 'lightgreen', 'blue', 'yellow','pink','lightblue','beige', 'purple','lightpink','green','orange','skyblue','brown','magenta','cyan','antiquewhite'];

  return (
    <div className="App">
    
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;

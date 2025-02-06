import React from 'react';
import './App.css';
import Welcome1 from './components/welcome1';
function App() {
  return (
   
    <div>
      <Welcome1 name ="thirmal" greeting="hello"></Welcome1>
      <Welcome1 name ="raj" greeting="hii"></Welcome1>
    </div>
    
  );
};
export default App;
import React from 'react';


const Welcome1=(props)=>{
    const{name, greeting}=props;

    return(
        <h1 className="message">{greeting},{name}</h1>
    )
}
export default Welcome1;

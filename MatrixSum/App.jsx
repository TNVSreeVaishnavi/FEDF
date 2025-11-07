import React from "react"; 
import MatrixSumCalculator from "./MatrixSumCalculator"; // Ensure correct path 
import "./Styles.css"; // Import the CSS file 
 
const App = () => { 
  return ( 
    <div className="container"> 
      <h2>Matrix Sum Calculator</h2> 
      <MatrixSumCalculator /> 
    </div> 
  ); 
}; 
 
export default App;
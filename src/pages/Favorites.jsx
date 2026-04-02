 
 
 import { useEffect, useState } from "react"; 
  
function Favorites (){
    return (
    <>
      <section className="favorites">
      <h1 className="mine">My Favorites ❤️</h1>

      <div className="card-container">
        <div className="card">
          <h2  className="mine">My Parents </h2>
          <p  className="mine">
            My parents are my biggest inspiration. They have always supported me
            in my studies and encouraged me to never give up.
          </p>
          <p  className="mine">
            Thanks to them, I learned the value of hard work, patience and
            determination.
          </p>
        </div>
      </div>
    </section>
    
    
    </>
    );
}
export default Favorites;
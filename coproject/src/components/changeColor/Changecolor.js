// import { useState } from "react";


function Changecolor(){
    return(
        <div>
            <label className="text">enter a color</label>
            <input id="color" type="text" onChange={()=>{
                 document.getElementById("square").style.background=document.getElementById("color").value;
            }}/>
            <div id="square" className="square" >
                
            </div>
        </div>
    );
}
export default Changecolor;
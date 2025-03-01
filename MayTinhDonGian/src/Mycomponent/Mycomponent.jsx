import React from "react";
import './Mycomponent.css'
import { useState } from "react";

const Mycomponent=()=>{
        const [kq,setKq]= useState("0");
        const [bt,setBt]= useState("");

    return(
        <div className="d1">
            <div className="d2">
                <p>{kq}</p>
            </div> 
            <div className="d3">
            <table>
                <tr>
                <td><button data-key='AC' >AC</button></td>
                <td><button data-key='+'>+/-</button></td>
                <td><button data-key='%'>%</button></td>
                <td><button className="operator" data-key='/'>÷</button></td>
                </tr>

                <tr>
                <td><button data-key='7'>7</button></td>
                <td><button data-key='8'>8</button></td>
                <td><button data-key='9'>9</button ></td>
                <td><button data-key='*' className="operator">×</button></td>
                </tr>

                <tr>
                <td><button data-key='4'>4</button></td>
                <td><button data-key='5'>5</button></td>
                <td><button data-key='6'>6</button></td>
                <td><button data-key='-' className="operator">−</button></td>
                 </tr>

                 <tr>
                 <td><button data-key='1'>1</button></td>
                <td><button data-key='2'>2</button></td>
                <td><button data-key='3'>3</button></td>
                <td><button data-key='+' className="operator">+</button></td>
                 </tr>

                 <tr>
                <td data-key='0'colspan="2"><button>0</button></td>
                <td><button data-key='.'>.</button></td>
                <td><button data-key='=' className="operator">=</button></td>
            </tr>

            </table>

            </div>
            <div className="d4">

            </div>
        </div>
    );
};
export default Mycomponent;
import React from "react";
import './reord.css';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import Store from "../../store/store";


export default function Transactions_History(){

    const [isHovering, setIsHovering] = useState(false);
    let props = useSelector((store) => {
        return store.desposit;
      })


    function handleousein(e) {
        setIsHovering(true);
        e.target.parentElement.style.backgroundColor='skyblue';
        // e.target.parentElement.children[0].className='icon';
    }
    function handlemouseout(e) {
        setIsHovering(false);
        e.target.parentElement.style.backgroundColor='transparent';   
        // e.target.parentElement.children[0].className='hidden';
    }

    function deletetransaction(e){

        let history_to_delete=e.target.parentElement.children[1].innerText;
        let amount_to_delete=e.target.parentElement.children[2].innerText;
        Store.dispatch({
            type:"deletehistory",
            desc:history_to_delete,
            amount:amount_to_delete
          });
    }

    return<div className="mainhistory">
            <h2>Transaction History</h2>
            <hr/>
            <table>
            {
                props.history.map((transaction,index)=>{
                    return  <tr className="tablereow" onMouseOver={handleousein} onMouseOut={handlemouseout}> <td className="icon" onClick={deletetransaction}>x</td><td>{transaction.desc}</td><td>{transaction.amount}</td> </tr>
                })
            }
            </table>

            {/* {isHovering && <span className="icon">x</span>} */}
       
    </div>
}
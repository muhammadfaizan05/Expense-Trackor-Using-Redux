import React from "react";
import { useState } from "react";
import { useRef } from "react";
// import meraStore from "../../store/store";
import './main.css';


export default function Main(props) {

    let [totalamount, setamount] = useState(0);

    let amount =useRef();
    let tracnsactiontype =useRef();
    let description =useRef();

    function addmoney() {
        let amountoadd =+amount.current.value;
        if(amountoadd<=0 ||  description.current.value==""){
            alert("Enter Proper Input");
            return;
        }
        if(!isNaN(amountoadd)){
            setamount(totalamount + amountoadd);  
            let transaction= {
                type:'Deposit',
                amount:+amount.current.value,
                desc: description.current.value
            }
            props.history.push(transaction);
            props.sethistory([...props.history])
        }
        else{
            alert("Invalid Input");
        }
       
    }

    function withdrawmoney() {
        let amountowithdraw = +amount.current.value;
        if(amountowithdraw<=0 ||  description.current.value==""){
            alert("Enter Proper Input");
            return;
        }
        if(!isNaN(amountowithdraw)){
            if (totalamount > 0 && amountowithdraw < totalamount) {
                setamount(totalamount - amountowithdraw); 
                let transaction= {
                    type:'Withdraw',
                    amount:+amount.current.value,
                    desc: description.current.value
                }
                props.history.push(transaction)
                props.sethistory([...props.history])
            }
            else {
                alert("Low Balance! Your Total Credit is Rs:" + totalamount);
            }    
        }
        else{
            alert("Invalid Input")
        }
       
    }

       
   

    function transaction() {
            if(tracnsactiontype.current.value=='Deposit'){
                addmoney();  
            }
            else if(tracnsactiontype.current.value=='Withdraw'){
                withdrawmoney();
            }
    }

    

    return <>
        <h2>Current Balance</h2>
        <h3>{totalamount}</h3>
        <div id="transaction_tab">
            <h2>Add New Transaction</h2>
            <hr />
        <input type='number' placeholder="Amount" ref={amount}></input><br></br>
        <input type='text' placeholder="Description" ref={description}></input><br></br>
      
        <select ref={tracnsactiontype}>
            <option>Deposit</option>
            <option>Withdraw</option>
        </select><br></br>
        <button onClick={transaction}>Make Transaction</button>
        </div>

      
    </>


}

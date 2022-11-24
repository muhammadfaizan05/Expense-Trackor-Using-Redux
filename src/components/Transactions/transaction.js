import React from "react";
import './transaction.css';
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Store from "../../store/store";


export default function Transaction(){

        let desc=useRef();
        let amount=useRef();


        function dotransaction(){
            if(amount.current.value==''||desc.current.value==''){
               {toast.error("Provide Values")}
                return;
            }

            if (amount.current.value>1) {
                let income=+amount.current.value;
                // props.setbalance(props.balance+income);
                // props.setincome(props.income+income);
                let tranaction={
                    type:'income',
                    amount:income,
                    desc:desc.current.value
                }
                Store.dispatch({
                    type:"incomeadded",
                    history:tranaction,
                    amount:income
                  });
                // props.history.push(tranaction);
                // props.sethistory([...props.history]);
                amount.current.value='';
                desc.current.value='';
                {toast.success('Income Successfully')}
            }
            else{
                let kharcha=-(+amount.current.value);
                // props.setbalance(props.balance+kharcha);
                // props.setexpense(props.expense-kharcha);
                let tranaction={
                    type:'expense',
                    amount:kharcha,
                    desc:desc.current.value
                }
                // props.history.push(tranaction);
                // props.sethistory([...props.history]);
                Store.dispatch({
                    type:"expenseadded",
                    amount:kharcha,
                    history:tranaction,
                  });
                amount.current.value='';
                desc.current.value='';
                {toast.warn('Expense!')}
            }
           
           


        }

    return <div id="transactionsdiv">
        <h2>Add New Transaction</h2>
        <hr />
        <div className="form">
        <label>Description &nbsp;&nbsp;&nbsp;</label>
        <input type="text" placeholder="Detail of tranaction" ref={desc}/>
        <label >Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="number"  ref={amount} placeholder='"+" for_income "-" for_expense'/>
        <button onClick={dotransaction}>Make Transaction</button>
        </div>
        </div>
  
}
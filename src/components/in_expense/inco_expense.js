import React from "react";
import './income.css';
import { useSelector } from "react-redux";


export default function Inco_Expense(){

    let income = useSelector((store) => {
        return store.desposit.income;
      })

      let expense = useSelector((store) => {
        return store.desposit.expense;
      })

     
   

    return<>

        <div id="container">
        <div id="inome">
            <h3>Income</h3>
            <span id="incomeamount">{income}</span>
        </div>
        <hr/>
        <div id="expense">
        <h3>Expense</h3>
        <span id="expenseamount">{expense}</span>
        </div>
        </div>
    </>
}
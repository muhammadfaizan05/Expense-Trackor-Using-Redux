import React from "react";
import { useState } from "react";
import './header.css';
import { useSelector } from "react-redux";

export default function Header(props) {
   
    let balance = useSelector((store) => {
        return store.desposit.balance;
      })

    return<>
    <h2>Expense Trackor By Muhammad Faizan </h2>
    <h2 className="currntinfo"> Current Balance</h2>
    <h2 id="balance">${balance}</h2>
    </>
}
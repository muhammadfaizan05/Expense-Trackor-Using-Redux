import { createStore, combineReducers } from 'redux';

let meraOlDData = {
    balance: 0,
    income: 0,
    expense: 0,
    history: []
}


function desposit(olddata = meraOlDData, newdata) {

    if (newdata.type == "incomeadded") {
        olddata.balance += newdata.amount;
        olddata.income += newdata.amount;
        olddata.history.push(newdata.history);
    }
    else if (newdata.type == "expenseadded") {
        olddata.balance = (olddata.balance - newdata.amount);
        olddata.expense += newdata.amount;
        olddata.history.push(newdata.history);
    }
    else if (newdata.type == 'deletehistory') {

        olddata.history.find((tranaction,index)=>{
                if(tranaction.amount==newdata.amount && tranaction.desc==newdata.desc){
                    if(tranaction.type=="income"){
                        olddata.balance=(olddata.balance-(+newdata.amount));
                        olddata.income=(olddata.income-(+newdata.amount));
                    }
                    else{
                        olddata.balance=(olddata.balance+(+newdata.amount));
                        olddata.expense=(olddata.expense-(+newdata.amount));
                    }
                    olddata.history.splice(index,1);
                }
        })
    }
    return { ...olddata };
}

let root = combineReducers({ desposit });

let Store = createStore(root);

export default Store;
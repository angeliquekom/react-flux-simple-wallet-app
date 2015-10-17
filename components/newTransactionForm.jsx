// NewItemForm.jsx
import React from 'react';
import TransactionStore from '../stores/TransactionStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

class NewTransactionForm extends React.Component {

  createTransaction(e){

    // so we don't reload the page
    e.preventDefault();

    // this gets the value from the input
    let transaction_value = React.findDOMNode(this.refs.transaction_value).value.trim();

    // get all transactions to find the last
    let transactions = TransactionStore.getTransactions();

    let last_transaction = transactions[transactions.length-1];

    let total_amount = parseInt(last_transaction.total_amount)+parseInt(transaction_value);

    var transaction_type = '';

    if (parseInt(transaction_value) < 0){
        transaction_type = 'Ebgala';
    } else {
        transaction_type = 'Evala';
    }

    // create ID
    let id = return_id(last_transaction);

    // this removes the value from the input
    React.findDOMNode(this.refs.transaction_value).value = 0;

    if (total_amount >= 0 ) {
        // This is where the magic happens,
        // no need to shoot this action all the way to the root of your application to edit state.
        // AppDispatcher does this for you.
        AppDispatcher.dispatch({
          action: 'add-transaction',
          new_transaction: {
            date: '02/01/2015',
            transaction_amount: transaction_value,
            transaction_type: transaction_type,
            total_amount: total_amount,
            id: id
          }
        });

      }
    }



    render(){

        return <form onSubmit={ this.createTransaction.bind(this) }>
            <input type="number" ref="transaction_value"/>
            <button>Submit Transaction</button>
        </form>;
    }
}

function return_id(last_transaction) {
  return parseInt(last_transaction.id) + 1
}

export default NewTransactionForm;
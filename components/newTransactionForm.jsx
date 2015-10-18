// NewTransactionForm.jsx
import React from 'react';
import TransactionStore from '../stores/TransactionStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
var moment = require('moment');

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
            transaction_type = 'Withdraw';
        } else if (parseInt(transaction_value) == 0){
            transaction_type = 'No transaction';
        } else {
            transaction_type = 'Save';
        }

        // create ID
        let id = return_id(last_transaction);

        // this removes the value from the input
        React.findDOMNode(this.refs.transaction_value).value = '';

        if (total_amount >= 0 ) {
            AppDispatcher.dispatch({
              action: 'add-transaction',
              new_transaction: {
                date: moment().format('llll'),
                transaction_amount: transaction_value,
                transaction_type: transaction_type,
                total_amount: total_amount,
                id: id
              }
            });
        } else {
            AppDispatcher.dispatch({
              action: 'add-transaction',
              new_transaction: {
                date: moment().format('llll'),
                transaction_amount: transaction_value,
                transaction_type: 'Error',
                total_amount: parseInt(last_transaction.total_amount),
                id: id
              }
            });
        }
    }

    render(){

        return <form onSubmit={ this.createTransaction.bind(this) }>
            <input type="number" ref="transaction_value"/><br/>
            <button className="btn btn-success btn-xs">Submit</button>
        </form>;
    }
}

function return_id(last_transaction) {
  return parseInt(last_transaction.id) + 1
}

export default NewTransactionForm;
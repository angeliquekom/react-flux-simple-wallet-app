// AppRoot.jsx
import React from 'react';
var Header = require('./Header');
var NewTransactionForm = require('./newTransactionForm');
import TransactionStore from '../stores/TransactionStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

// Method to retrieve state from Stores
let getTransactionsState = () => {
  return {
    transactions: TransactionStore.getTransactions()
  };
}

class AppRoot extends React.Component {

  // Method to setState based upon Store changes
  _onChange() {
    this.setState(getTransactionsState());
  }

  constructor() {
    super();
    this.state = getTransactionsState();
  }

  // Add change listeners to stores
  componentDidMount() {
    TransactionStore.addChangeListener(this._onChange.bind(this));
  }

  render(){

    let transactions = TransactionStore.getTransactions();

    let last_transaction = transactions[transactions.length-1];

    let transactionTable = transactions.map(( transactionItem ) => {

      return <tr>
                <td>  { transactionItem.id } </td>
                <td>  { transactionItem.date } </td>
                <td>  { transactionItem.transaction_amount } </td>
                <td>  { transactionItem.transaction_type } </td>
                <td>  { transactionItem.total_amount } </td>

             </tr>;

    });


    return <div className="container">
                <Header />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="col-md-6">
                            <img src="img/wallet_512.png" className="img-responsive center-block" alt="Responsive image"/>
                        </div>
                        <div className="col-md-6 text-center align-middle">
                            <div className="span12">
                                <h2>Balance </h2>
                                <span className="currency">{ last_transaction.total_amount } &pound;</span>
                            </div>
                            <NewTransactionForm />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <td> # </td>
                                    <td> Date </td>
                                    <td> Transaction Amount </td>
                                    <td> Transaction Type </td>
                                    <td> Final Amount </td>
                                </tr>
                            </thead>
                            <tbody>
                                { transactionTable }
                            </tbody>
                        </table>
                    </div>
                </div>
           </div>;
  }

}

export default AppRoot;

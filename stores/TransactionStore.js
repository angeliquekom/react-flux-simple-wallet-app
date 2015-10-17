// TransactionStore.js
import {EventEmitter} from 'events';
import _ from 'lodash';

let TransactionStore = _.extend({}, EventEmitter.prototype, {

  // Mock default data
  transactions: [
    {
      date: '01/01/2015',
      transaction_amount: 0,
      transaction_type:'none',
      total_amount: 0,
      id: 1
    }
  ],

  getTransactions: function(){
    return this.transactions;
  },

  // Add item
  addTransaction: function(new_transaction){
    this.transactions.push(new_transaction);
  },

  // Emit Change event
  emitChange: function(){
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback){
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }

});

export default TransactionStore
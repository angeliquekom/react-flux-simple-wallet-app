// AppDispatcher.js
import {Dispatcher} from 'flux';
let AppDispatcher = new Dispatcher();

import TransactionStore from '../stores/TransactionStore';

// Register callback with AppDispatcher
AppDispatcher.register((payload) => {

  let action = payload.action;
  let new_transaction = payload.new_transaction;
  let id = payload.id;

  switch(action) {

    // Respond to add-item action
    case 'add-transaction':
      TransactionStore.addTransaction(new_transaction);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  TransactionStore.emitChange();

  return true;

});

export default AppDispatcher;

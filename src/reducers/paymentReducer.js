export const addPayment =  (
    state={
      addPaymentResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "ADD_PAYMENT":
            return({
                addPaymentResp:action.payload
            })
          case "ADD_PAYMENT_ERR":
          return({
            addPaymentResp:action.payload
          })
          case "RESET":
          return({
            addPaymentResp:""
          })
          default:
            return state;
        }
  };

  export const getPayment =  (
    state={
      getPaymentResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_PAYMENT":
            return({
                getPaymentResp:action.payload
            })
          case "GET_PAYMENT_ERR":
          return({
            getPaymentResp:action.payload
          })
          case "RESET":
          return({
            getPaymentResp:""
          })
          default:
            return state;
        }
  };

  export const deletePayment =  (
    state={
      deletePaymentResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_PAYMENT":
            return({
                deletePaymentResp:action.payload
            })
          case "DELETE_PAYMENT_ERR":
          return({
            deletePaymentResp:action.payload
          })
          case "RESET":
          return({
            deletePaymentResp:""
          })
          default:
            return state;
        }
  };
  
  export const updatePayment =  (
    state={
      updatePaymentResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_PAYMENT":
            return({
                updatePaymentResp:action.payload
            })
          case "UPDATE_PAYMENT_ERR":
          return({
            updatePaymentResp:action.payload
          })
          case "RESET":
          return({
            updatePaymentResp:""
          })
          default:
            return state;
        }
  };
export const addOrder =  (
    state={
      addOrderResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "ADD_ORDER":
            return({
                addOrderResp:action.payload
            })
          case "ADD_ORDER_ERR":
          return({
            addOrderResp:action.payload
          })
          case "RESET":
          return({
            addOrderResp:""
          })
          default:
            return state;
        }
  };

  export const getOrders =  (
    state={
      getOrderResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_ORDER":
            return({
                getOrderResp:action.payload
            })
          case "GET_ORDER_ERR":
          return({
            getOrderResp:action.payload
          })
          case "RESET":
          return({
            getOrderResp:""
          })
          default:
            return state;
        }
  };

  export const deleteOrders =  (
    state={
      deleteOrderResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_ORDER":
            return({
                deleteOrderResp:action.payload
            })
          case "DELETE_ORDER_ERR":
          return({
            deleteOrderResp:action.payload
          })
          case "RESET":
          return({
            deleteOrderResp:""
          })
          default:
            return state;
        }
  };
  
  export const updateOrder =  (
    state={
      updateOrderResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_ORDER":
            return({
                updateOrderResp:action.payload
            })
          case "UPDATE_ORDER_ERR":
          return({
            updateOrderResp:action.payload
          })
          case "RESET":
          return({
            updateOrderResp:""
          })
          default:
            return state;
        }
  };
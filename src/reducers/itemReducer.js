export const addItem =  (
    state={
      addItemResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "ADD_ITEM":
            return({
                addItemResp:action.payload
            })
          case "ADD_ITEM_ERR":
          return({
            addItemResp:action.payload
          })
          case "RESET":
          return({
            addItemResp:""
          })
          default:
            return state;
        }
  };

  export const getItems =  (
    state={
      getItemResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_ITEM":
            return({
                getItemResp:action.payload
            })
          case "GET_ITEM_ERR":
          return({
            getItemResp:action.payload
          })
          case "RESET":
          return({
            getItemResp:""
          })
          default:
            return state;
        }
  };

  export const deleteItems =  (
    state={
      deleteItemResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_ITEM":
            return({
                deleteItemResp:action.payload
            })
          case "DELETE_ITEM_ERR":
          return({
            deleteItemResp:action.payload
          })
          case "RESET":
          return({
            deleteItemResp:""
          })
          default:
            return state;
        }
  };
  
  export const updateItem =  (
    state={
      updateItemResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_ITEM":
            return({
                updateItemResp:action.payload
            })
          case "UPDATE_ITEM_ERR":
          return({
            updateItemResp:action.payload
          })
          case "RESET":
          return({
            updateItemResp:""
          })
          default:
            return state;
        }
  };
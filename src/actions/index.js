
export const addItem = feature => {
    console.log('action creator was invoked');
    return { type: 'ADD_ITEM', payload: feature };
  };
  
  export const removeItem = feature => {
    return {
      type: 'REMOVE_ITEM',
      payload: feature
    };
  };
  
  

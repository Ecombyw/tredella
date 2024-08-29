const localStorageUtils = {
    setItem: (key, value) => {
      try {
        if (typeof window !== "undefined" && key && value !== undefined) {
          window.localStorage.setItem(key, JSON.stringify(value));
        }
      } catch (error) {
        console.log(error, "Error while setting the value in local storage");
      }
    },
  
    getItem: (key) => {
      try {
        if (typeof window !== "undefined" && key) {
          const item = window.localStorage.getItem(key);
          return item ? JSON.parse(item) : undefined;
        }
      } catch (error) {
        console.log(error, "Error while getting the value from local storage");
      }
    },
  
    removeItem: (key) => {
      try {
        if (typeof window !== "undefined" && key) {
          window.localStorage.removeItem(key);
        }
      } catch (error) {
        console.log(error, "Error while removing the value from local storage");
      }
    },
  };
  
  export default localStorageUtils;
  
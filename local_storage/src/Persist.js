import React, { useState } from "react";

// ステートフックの永続化

function usePersist(ky, intVal) {
  const key = "hooks:" + ky;
  const value = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : intVal;
    } catch (err) {
      console.log(err);
      return intVal;
    }
  };

  const setValue = (val) => {
    try {
      setSavedValue(val);
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch (err) {
      console.log(err);
    }
  };

  const [savedValue, setSavedValue] = useState(value);

  return [savedValue, setValue];
}

export default usePersist;

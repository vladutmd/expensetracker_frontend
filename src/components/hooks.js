import { useState, useEffect } from 'react';


export const useStateOrLocalStorage = (stateName, initialValue) => {
    const [value, setValue] = useState(
        localStorage.getItem(stateName) || initialValue
    );

    useEffect(() => {
        localStorage.setItem(stateName, value);
    }, [value, stateName]);

    return [value, setValue];
};



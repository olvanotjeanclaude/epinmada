import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);

        if (storedValue) {
            return JSON.parse(storedValue);
        }

        return initialValue??null;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    const handleStorageChange = (event) => {
        if (event.storageArea === localStorage && event.key === key) {
            setValue(event.newValue ? JSON.parse(event.newValue ?? "{}") : null);
        }
    };

    useEffect(() => {
        // Listen for changes from other tabs/windows
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return [value, setValue];
};

export default useLocalStorage;

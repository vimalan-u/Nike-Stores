export const setItemLocal = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data));
};

export const getItemLocal = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    return undefined;
};

export const removeItemLocal = (key)=>{
    return localStorage.removeItem(key);
};
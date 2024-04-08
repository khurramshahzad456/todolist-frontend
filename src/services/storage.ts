import secureLocalStorage from 'react-secure-storage';

const setItem = <T>(key: string, value: T) => {
  const stringValue = JSON.stringify(value);
  secureLocalStorage.setItem(key, stringValue);
};

const getItem = <T>(key: string): T | null => {
  const item = secureLocalStorage.getItem(key);
  if (item) {
    return JSON.parse(item as string) as T;
  }
  return null;
};

const removeItem = (key: string) => {
  secureLocalStorage.removeItem(key);
};

export const storageService = {
  setItem,
  getItem,
  removeItem,
};

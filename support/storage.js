export function getStore(key) {
  if (process.client) {
    return localStorage.getItem(key);
  }

  return null;
}

export function setStore(key, value) {
  if (process.client) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

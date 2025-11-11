const saveStorage = (name, data) => {
  const JSONdata = JSON.stringify(data); //a string
  localStorage.setItem(name, JSONdata); //guardamos
}

const getStorage = (name) => {
  const JSONdata = localStorage.getItem(name); //obtenemos como json
  const data = JSON.parse(JSONdata); //convertimos a js
  return data;
}

const removeStorage = (name) => {
  localStorage.removeItem(name); //eliminamos por el nombre
}

export {
  saveStorage,
  getStorage,
  removeStorage
}

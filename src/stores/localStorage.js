// Importamos la función de Pinia para definir el store
import { defineStore } from "pinia";

export const ctrlUser = defineStore("ctrlUser",()=> {
  //Obtener el usuario del localstorage
  const getUser = () => JSON.parse(localStorage.getItem('user')) 

  function singOut() {localStorage.removeItem('user')}

  function singIn(user) {
    /*
    user = {
      email,
      password,
      rol
    }
    */
    localStorage.setItem('user', JSON.stringify(user))
  }

  return {getUser,singOut,singIn}

});

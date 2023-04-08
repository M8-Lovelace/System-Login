// Importamos la función de Pinia para definir el store
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";


export const ctrlUser = defineStore("ctrlUser", () => {
  //Obtener el usuario del localstorage
  const getUser = () => JSON.parse(localStorage.getItem("user"));

  const signOut = ()=> {
    localStorage.removeItem("user");
  }

  const signIn = async(user) => {
    const users = await JSON.parse(localStorage.getItem("users") || '[{ "email": "admin", "password": "admin", "rol": "admin" }]');

    const userValid = users.find((userItem) => userItem.email == user.mail && userItem.password == user.password );
    
    if (userValid != undefined) {
      localStorage.setItem("user", JSON.stringify(userValid));
      return true;
    }

    return false;
  };
  

const setUser = async (user) =>{
    console.log('setUser', user);
    const { name, email, password, rol,avatar } = user;
    const id = uuidv4();
    const newUser = {
      id,
      name,
      email,
      password,
      rol,
      avatar
    };

    //obtener el archivo de usuarios
    const users = await JSON.parse(localStorage.getItem("users"));
    //verificar si el usuario ya existe
    const userExist = users.find((user) => user.email == email);
    if (userExist) {
      return false;
    }
    //guardar el nuevo usuario
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    return true;
  }



  return { getUser, signOut, signIn , setUser};
});

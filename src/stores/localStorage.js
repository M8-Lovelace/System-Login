// Importamos la función de Pinia para definir el store
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const ctrlUser = defineStore("ctrlUser", () => {
  //Obtener el usuario del localstorage
  const getUser = () => JSON.parse(localStorage.getItem("user"));

  //cerrar sesion
  const signOut = ()=> {
    localStorage.removeItem("user");
  }

  //iniciar sesion
  const signIn = async(user) => {

    let users = await JSON.parse(localStorage.getItem("users"));

   if (users == null) {
      localStorage.setItem("users", JSON.stringify([{"id":"sdf1","name":"admin","email": "admin", "password": "admin", "rol": 0, "avatar": "/images/avatar1.png"}]));
      users = await JSON.parse(localStorage.getItem("users"));
    }

    const userValid = users.find((userItem) => userItem.email == user.mail && userItem.password == user.password );
    
    if (userValid != undefined) {
      localStorage.setItem("user", JSON.stringify(userValid));
      return true;
    }

    return false;
  };
  
//guardar el usuario
const setUser = async (user) =>{
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
    const users = await JSON.parse(localStorage.getItem("users") || "[]");
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

  //actualizar el usuario
  const updateUser = async (user) => {
    const {id, name, email, password, rol,avatar } = user;
    const newUser = {
      id,
      name,
      email,
      password,
      rol,
      avatar
    };

    //obtener el archivo de usuarios
    const users = await JSON.parse(localStorage.getItem("users") || "[]");
    //verificar si el usuario ya existe
    const userExist = users.find((user) => user.email == email && user.id != id);
    if (userExist) {
      return false;
    }
    //actualizar el usuario
    const index = users.findIndex((user) => user.id == id);
    users[index] = newUser;
    localStorage.setItem("users", JSON.stringify(users));

    return true;

  }





  return { getUser, signOut, signIn , setUser, updateUser };
});

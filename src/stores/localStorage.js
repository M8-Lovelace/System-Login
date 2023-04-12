// Importamos la función de Pinia para definir el store
import {
  getUsers,
  setUser,
  validateUser,
  updateInfoUser,
} from "../service/firebase";
import { defineStore } from "pinia";

export const ctrlUser = defineStore("ctrlUser", () => {
  //Obtener el usuario del localstorage
  const getUser = () => JSON.parse(localStorage.getItem("user"));

  //cerrar sesión
  const signOut = () => {
    localStorage.removeItem("user");
  };

  //iniciar sesión
  const signIn = async (credentials) => {
    const users = await getUsers();

    const userValid = users.find(
      (userItem) =>
        userItem.email == credentials.email &&
        userItem.password == credentials.password
    );

    if (userValid != undefined) {
      localStorage.setItem("user", JSON.stringify(userValid));
      return true;
    }

    return false;
  };

  //update user
  const updateUser = async (user) => {
    if (!(await updateInfoUser(user))) {
      return false;
    }
    return true;
  };

  //set new User to data base
  const addUser = async (user) => {
    const { name, email, password, rol, avatar } = user;
    const newUser = {
      name,
      email,
      password,
      rol,
      avatar,
    };

    const userExist = await validateUser(newUser);

    if (userExist) {
      return false;
    }

    await setUser(newUser);
    return true;
  };

  return { getUser, signOut, signIn, addUser, updateUser };
});

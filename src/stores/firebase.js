// Importamos la función de Pinia para definir el store
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { auth } from "../services/configFirebase";
import { defineStore } from "pinia";
import { ref } from "vue";

const validateUser = async (email) => {
  
  }


export const ctrlUser = defineStore("ctrlUser", () => {

  const userData = ref({});

  //cerrar sesión
  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
    userData.value = {};
  };

  //iniciar sesión
  const signIn = async (credentials) => {
    const { email, password } = credentials;
    try {
        const { user } = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        userData.value = {
            token: user.refreshToken,
            email: user.email,
            id: user.uid,
        }

        return true;
    } catch (error) {
      console.log(error);
        return false;

    }
}



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
      rol,
      avatar,
    };

    /*
    const userExist = await validateUser(newUser);

    if (userExist) {
      return false;
    }

    await setUser(newUser);
    */
    const q = query(
          collection(db, "users"),
          where("email", "==", newUser.email)
      );

      console.log(q);


   /*  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return true; 
    } catch (error) {
      
    }
 */

  };

  return { userData,signIn,signOutUser,addUser,updateUser };
},
{
  persist: true,
}
);

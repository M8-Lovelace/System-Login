// Importamos la función de Pinia para definir el store
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,updateEmail,updatePassword } from "firebase/auth";
import { collection, getDocs, query, where,addDoc,updateDoc,doc } from "firebase/firestore";
import { auth,db } from "../services/configFirebase";
import { defineStore } from "pinia";
import { ref } from "vue";

//variable para acceder a la colección de usuarios
const usersRef = collection(db, 'users');

//validate if user exist with mail 
const validateUser = async (email) => {
  const q = query(usersRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size > 0;
};

//validate if user exist with mail different to id of user
const validateUserWithIdAndEmail = async (id,email) => {
  const q = query(usersRef, where("email", "==", email && "id", "!==", id));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size > 0;
};
  


export const ctrlUser = defineStore("ctrlUser", () => {

  const userData = ref({});

  //get user data 
  const getUser = async (email)=>{
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      userData.value = {
        id: doc.id,
        ...doc.data(),
      };
    });
  };

  //logout
  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
    userData.value = {};
  };

  //login
  const signIn = async (credentials) => {
    const { email, password } = credentials;
    try {
        const { user } = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        await getUser(email);
        userData.value.token = user.refreshToken;

        return true;
    } catch (error) {
      console.log(error);
        return false;
    }
}

  //update user
  const updateUser = async (user) => {
    const { name, email, password, rol, avatar } = user;
    const newUser = {
      name,
      email,
      rol,
      avatar,
    };

    const userExist = await validateUserWithIdAndEmail(userData.value.id,email);
    if(userExist > 0){
      return false;
    }

    //update user in the database and in the auth of firebase
    try {
      //Update info of the user en la database
      console.log(userData.value.id)
      await updateDoc(doc(usersRef, userData.value.id), newUser); //reference to on document for id and update info

      await updatePassword(auth.currentUser, password);
      email !== userData.value.email && await updateEmail(auth.currentUser, email);



    }catch(err){
      console.log(err)
      return false
    }
    return true
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

    const userExist = await validateUser(email);
    if(userExist > 0){
      console.log("usuario ya existe");
      return false;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      //guardar en la base de datos un nuevo usuario
      await addDoc(usersRef, newUser);
    } catch (error) {
      console.log(error)
      return false;
    }
    return true 
  };

  return { userData,signIn,signOutUser,addUser,updateUser };
},
{
  persist: true,
}
);

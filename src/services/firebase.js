import firebase from "../boot/axios";

//format json from firebase realtime
function formatJsonFirebase(json) {
  const data = [];
  for (let key in json.data) {
    data.push({
      id: key,
      ...json.data[key],
    });
  }
  return data;
}

//get all users from database
async function getUsers() {
  const users = await firebase.get("/users/user.json");
  return formatJsonFirebase(users);
}

//getUser for id
async function getUserId(id) {
  const user = await firebase.get(`/users/user/${id}.json`)
  return  user.data;
}

//set new user in the database
async function setUser(data) {
  await firebase.post("/users/user.json", data);
}

//validate exist of one user
async function validateUser(newUser) {
  const users = await getUsers();

  const userExist = users.find((user) => user.email == newUser.email);

  return userExist;
}

//update user in the database
async function updateInfoUser(infoUser) {
  const users = await getUsers();

  const userExist = users.find(
    (user) => user.email == infoUser.email && user.id != infoUser.id
  );
  console.log(userExist);

  if (userExist) {
    return false;
  }

  await firebase.patch(`users/user/${infoUser.id}.json`, infoUser);

  return true;
}

export { getUserId, setUser, getUsers, validateUser, updateInfoUser };

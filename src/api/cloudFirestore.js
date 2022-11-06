import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc } from "firebase/firestore";
import firebaseConfig from "./configFireBase";
import {
  collection,
  query,
  where,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

/**
 * cria novo usuario na coleção users.
 * coleção utilizada para logins realizados somente com EMAIL/SENHA
 * @param {[{}]} data
 * @param {String} collect
 * @returns String uid
 */
const createNewUser = async (data, collect) => {
  try {
    const idDocument = doc(collection(db, `${collect}`));
    const docRef = await setDoc(doc(db, `${collect}`, `${data.name}`), data);

    return idDocument.id;
  } catch (e) {
    return [{ errorMessage: e }];
  }
};

const updateSituationTask = async ({ title, situation }) => {
  const reference = doc(db, "tasks", `${title}`);
  await updateDoc(reference, {
    situation: !situation,
  });
};

const updateTask = async (dataTask, id) => {
  let idTask = '';
  const q = query(collection(db, "tasks"), where("id", "==", `${id}`));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    idTask = doc.id;
  });
  const washingtonRef = doc(db, "tasks", `${idTask}`);

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    title: dataTask.title,
    taskDate: dataTask.taskDate,
    timeInitial: dataTask.timeInitial,
    timeEnd: dataTask.timEnd,
    description: dataTask.description,
    situation: dataTask.situation,
  });
};

const SetNewTask = async (
  title,
  taskDate,
  timeInitial,
  timeEnd,
  descrition,
  situation,
  uid
) => {
  try {
    const idDocument = doc(collection(db, "tasks"));
    const docRef = await setDoc(doc(db, "tasks", `${title}`), {
      title: title,
      taskDate: taskDate,
      timeInitial: timeInitial,
      timEnd: timeEnd,
      description: descrition,
      id: idDocument.id,
      situation: situation,
      uidUser: uid,
    });

    return idDocument.id;
  } catch (e) {
    return [{ errorMessage: e }];
  }
};

/**
 * recupera uma lista de objetos com as tarefas do
 * usuario logado
 * @returns querySnapshot[]
 */
const getListaTasks = async () => {
  const uid = JSON.parse(sessionStorage.getItem("data"));

  const q = query(
    collection(db, "tasks"),
    where("uidUser", "==", `${uid.uid}`)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

/**
 * recupera informações de um usuario cadastrado por EMAIL/SENHA
 * @param {String} uidUser
 * @returns {}
 */
const getInfoUser = async (uidUser) => {
  const q = query(
    collection(db, "users"),
    where("uidEmail", "==", `${uidUser}`)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

const searchTaskById = async (id) => {
  const q = query(collection(db, "tasks"), where("id", "==", `${id}`));
  const querySnapshot = await getDocs(q);

  return querySnapshot;
};

const arrayListTasks = async () => {
  let arrayTasks = [];
  let list = await getListaTasks();

  list.forEach((doc) => {
    arrayTasks.push(doc.data());
  });
  return arrayTasks;
};

const deleteTask = async (title) => {
  const taskRemoved = await deleteDoc(doc(db, "tasks", `${title}`));
};
export {
  SetNewTask,
  arrayListTasks,
  deleteTask,
  createNewUser,
  getInfoUser,
  searchTaskById,
  updateSituationTask,
  updateTask,
};

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './configFireBase';
import { collection, query, where, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
    const idDocument = doc(collection(db, 'tasks'));
    const docRef = await setDoc(doc(db, 'tasks', `${title}`), {
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
  let uid = JSON.parse(sessionStorage.getItem('data'));

  const q = query(collection(db, "tasks"), where("uidUser", "==", `${uid.uid}`));
  const querySnapshot = await getDocs(q);  
  return querySnapshot;
};

/**
 * recupera informações de um usuario cadastrado por EMAIL/SENHA
 * @param {String} uidUser 
 * @returns {}
 */
const getInfoUser = async (uidUser) => {
  
  const q = query(collection(db, "users"), where("uidEmail", "==", `${uidUser}`));
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

const deleteTask= async (title)=>{
  const taskRemoved = await deleteDoc(doc(db, "tasks", `${title}`));
}
export { SetNewTask, arrayListTasks, deleteTask, createNewUser, getInfoUser};

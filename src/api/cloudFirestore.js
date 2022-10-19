import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './configFireBase';
import { collection, query, where, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

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
  
  const q = query(collection(db, "tasks"), where("uidUser", "==", `${sessionStorage.getItem('data')}`));
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
  console.log(taskRemoved)
}
export { SetNewTask, arrayListTasks, deleteTask };

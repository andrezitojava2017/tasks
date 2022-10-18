import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './configFireBase';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const SetNewTask = async (
  title,
  taskDate,
  timeInitial,
  timeEnd,
  descrition
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
    });

    return idDocument.id;
  } catch (e) {
    return [{ errorMessage: e }];
  }
};

const getListaTasks = async () => {
  const querySnapshot = await getDocs(collection(db, 'tasks'));
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

export { SetNewTask, arrayListTasks };

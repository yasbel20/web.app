import { db } from './firebase';  // Asegúrate de tener la importación correcta de db
import { collection, getDocs, query, where } from 'firebase/firestore';

// Función para validar el usuario
export const validateUser = async (email, contraseña) => {
  try {
    const colRef = collection(db, 'Camilomemes'); // El nombre de tu colección
    const q = query(colRef, where('email', '==', email)); // Filtra por el email

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error('Usuario no encontrado');
    }

    const userDoc = querySnapshot.docs[0]; // Obtén el primer usuario que coincida con el email
    const userData = userDoc.data();

    // Verifica la contraseña
    if (userData.contrasena === contraseña) {
      return { success: true, userId: userDoc.id }; // Retorna el ID de usuario si la contraseña es correcta
    } else {
      throw new Error('Contraseña incorrecta');
    }
  } catch (error) {
    return { success: false, message: error.message }; // Si hubo un error, devuelve el mensaje
  }
};

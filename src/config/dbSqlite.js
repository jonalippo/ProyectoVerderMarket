import * as SQLite from "expo-sqlite";

//funcion para iniciar la bas de datos
export const init = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("session.db");
    const createTable = await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, idToken TEXT NOT NULL);
          `);

    return createTable;
  } catch (error) {
    return error;
  }
};

//funcion para insertar una sesion(datos del usuario). Agregar a la tabla una fila con datos del usuario (localId, tocken, id)
export const insertSession = async (localId, email, idtoken) => {
  try {
    const db = await SQLite.openDatabaseAsync("session.db");
    const newSession = await db.runAsync(
      `INSERT INTO sessionUser (localId, email,idToken) VALUES (?,?,?)`,
      [localId, email, idtoken]
    );
    return newSession;
  } catch (error) {
    return error;
  }
};

//funcion para traer la fila que agrego el usuario
export const fetchSession = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("session.db");
    const sessionUser = await db.getFirstAsync(`SELECT * FROM sessionUser`);
    return sessionUser;
  } catch (error) {
    return error;
  }
};

//funcion para eliminar
export const deleteSession = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("session.db");
    const deleteSession = await db.runAsync(`DELETE FROM sessionUser `);
    return deleteSession;
  } catch (error) {
    return error;
  }
};

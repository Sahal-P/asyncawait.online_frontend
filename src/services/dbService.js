import { openDB } from 'idb';


export async function openDatabase() {
    return openDB("messageDB", 1, {
      upgrade(db) {
        const store = db.createObjectStore("message", { keyPath: "ChatId" });
        store.createIndex("id_message", ["ChatId"], { unique: true });
      },
    });
  }
  
  export async function addMessage(db, chatId, message) {
    const transaction = db.transaction("message", "readwrite");
    const msg_store = transaction.objectStore("message");
    await msg_store.put({
      ChatId: chatId,
      message: message,
      isReaded: true,
    });
  }
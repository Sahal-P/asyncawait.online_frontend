import { openDB } from "idb";
import { useEffect } from "react";

const useOpenIndexedDb = () => {
    useEffect(() => {
        openDatabase();
      }, []);
    async function openDatabase() {
        const db = await openDB("messageDB", 1, {
          upgrade(db) {
            // Create object stores or perform any necessary database upgrades
            // Example:
            const store = db.createObjectStore("message", { keyPath: "ChatId" });
            store.createIndex("id_message", ["ChatId"], { unique: true });
                  },
        });
        db.onerror = (event) => {
          console.log("error occured", event);
        };
        const transaction = db.transaction("message", "readwrite");
        const msg_store = transaction.objectStore("message");
        const messageIndex = msg_store.index("id_message");
        await msg_store.put({
          ChatId: "sdiufv89u9efvh8ydbvfv",
          message: [{'hiii':'1'},{'helo':'2'},{'bye':'3'}],
          isReaded: true,
        });
        await msg_store.put({
          ChatId: "sdfsdjbsdibvdsjbd",
          message: [{'dat':'1'},{'jio':'2'},{'lic':'3'}],
          isReaded: true,
        });
        // const data = msg_store.get("fvjdnfuijkkvv9876chhv");
        // const msgindxdata = messageIndex.getAll(["i am here"]);
        const msgindxdata = messageIndex.get("sdfsdjbsdibvdsjbd");
        // data.then((data)=>console.log(data))
        // msgindxdata.then((data)=> console.log(data))
        transaction.oncomplete = () => {
          db.close();
        };
      }
}

export default useOpenIndexedDb

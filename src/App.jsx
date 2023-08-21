import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SET_LOADING } from "./redux/sagas/types";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import CircularIndeterminate from "./components/CircularIndeterminate";
import { ToastContainer, toast } from "react-toastify";
import Verify from "./pages/Verify";
import { openDB } from "idb";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SET_LOADING, payload: false });
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
    msgindxdata.then((data)=> console.log(data))
    transaction.oncomplete = () => {
      db.close();
    };
  }

  return (
    //BEM naming convention
    <>
      <CircularIndeterminate />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

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
    const db = await openDB("Message_volume_db", 1, {
      upgrade(db) {
        // Create object stores or perform any necessary database upgrades
        // Example:
        const store = db.createObjectStore("message", { keyPath: "id" });
        store.createIndex("message_message", ["message"], { unique: false });
        store.createIndex("id_and_message", ["id", "message"], {
          unique: false,
        });
      },
    });
    db.onerror = (event) => {
      console.log("error occured", event);
    };
    const transaction = db.transaction("message", "readwrite");
    const msg_store = transaction.objectStore("message");
    const messageIndex = msg_store.index("message_message");
    msg_store.put({
      id: "sdiufv89u9efvh8ydbvfv",
      message: "hi hellloo!",
      isReaded: true,
    });
    msg_store.put({
      id: "dfkvnkdafknjfdajvjsjf",
      message: "i am here",
      isReaded: false,
    });
    msg_store.put({
      id: "ttuysvducuycubububhui",
      message: "i am here",
      isReaded: false,
    });
    msg_store.put({
      id: "adfkjvnadkfnvkadsnvak",
      message: "where are you",
      isReaded: true,
    });
    msg_store.put({
      id: "afkjvaksnaksdkjankasn",
      message: "bye bye",
      isReaded: false,
    });
    msg_store.put({
      id: "fvjdnfuijkkvv9876chhv",
      message: "not now",
      isReaded: false,
    });
    // const data = msg_store.get("fvjdnfuijkkvv9876chhv");
    const msgindxdata = messageIndex.getAll(["i am here"]);
    // data.then((data)=>console.log(data))
    // msgindxdata.then((data)=> console.log(data))
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

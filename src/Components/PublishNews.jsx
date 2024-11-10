import React, { useContext, useEffect, useState } from "react";
import FireBaseData from "../Context/FireBaseData";
import { auth } from "../FIREBASE/__fireBaseApi";
import { db } from "../FIREBASE/__fireBaseApi";
import { getDocs, collection, addDoc } from "firebase/firestore";
export default function PublishNews() {
  const { user } = useContext(FireBaseData);

  const [newsData, setNewsData] = useState(null);

  const collectionRef = collection(db, "AllNews");
  useEffect(() => {
    getDocs(collectionRef)
      .then((res) => {
        const filterData = res.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filterData);
        setNewsData(filterData);
      })
      .catch((err) => console.log(err));
  }, []);

  function handelNewsSubmit(e) {
    // const collectionRef = collection(db, "AllNews");

    e.preventDefault();
    let userName = e.target.userName.value;
    let imgUrl = e.target.imgUrl.value;
    let newsTitle = e.target.newsTitle.value;
    let newsThumbnil = e.target.newsThumbnil.value;
    let description = e.target.description.value;
    addDoc(collectionRef, {
      userId: auth?.currentUser?.uid,
      userName,
      imgUrl,
      newsTitle,
      newsThumbnil,
      description,
    });
  }
  console.log(user);
  return (
    <>
      <form
        onSubmit={handelNewsSubmit}
        className="flex flex-col mx-auto gap-3 border-2 p-5 mt-6 max-w-[500px]"
      >
        <input
          name="userName"
          type="text"
          placeholder="user Name"
          className="pl-3 border-2"
        />
        <input
          name="imgUrl"
          type="text"
          placeholder="img url"
          className="pl-3 border-2"
        />
        <hr />
        <input
          name="newsTitle"
          type="text"
          placeholder="news title"
          className="pl-3 border-2"
        />
        <input
          name="newsThumbnil"
          type="text"
          placeholder="news thumbnil"
          className="pl-3 border-2"
        />
        <input
          name="description"
          type="text"
          placeholder="description"
          className="pl-3 border-2"
        />
        <button className="bg-slate-200 border-2">News Submit</button>
      </form>
    </>
  );
}

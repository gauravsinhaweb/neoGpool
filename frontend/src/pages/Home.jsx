import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import axios from "axios";
import { Tweet } from "react-twitter-widgets";
import { v4 as uuid } from "uuid";
import firebase from "firebase";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

export const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const handleClick = () => {
    axios
      .get("http://localhost:4000/api/tweets")
      .then((res) => {
        setTweets(res.data.statuses);
      })
      .catch((error) => console.log(error.message));
  };

  const getData = () => {
    db.collection("posts")
      .orderBy("timestamp")
      .get()
      .then((snapshot) => {
        const documents = [];
        snapshot.forEach((doc) => {
          documents.push({
            id: doc.id,
            ...doc.data(),
          });
          setData(documents);
          console.log(documents);
        });
      });
  };

  const addHandler = (e) => {
    // e.preventDefault();

    db.collection(`posts`).add({
      id: uuid(),
      links: inputValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInputValue("");
    getData();
    setData((prev) => [...prev, { links: inputValue }]);
  };

  useEffect(() => {
    console.log("potatata");
    getData();
    handleClick();
  }, []);
 
  return (
    <>
      <div className="flex flex-col max-w-4xl mx-auto my-8 space-y-4 ">
        <div className="bg-gray-100 flex justify-center items-center  border-2 border-gray-900 rounded-lg py-6 p-3">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className=" bg-transparent border-b-2  border-gray-500 text-gray-400  font-medium text-lg w-4/5 "
            rows="2"
            cols="50"
            placeholder="What's cooking in the camp ?"
          ></textarea>

          <button
            disabled={!inputValue}
            onClick={addHandler}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Post
          </button>
        </div>
        <div className="flex gap-4 flex-row flex-wrap">
          {data.length > 0 ? (
            data.map(({ id, links }) => (
              <div key={id}>
                {links}
                {/* {console.log(links)} */}
              </div>
            ))
          ) : (
            <div>nothing...</div>
          )}
        </div>

        <div
          className="flex gap-4 flex-col  w-4/5 flex-wrap pt-12"
          style={{ height: "220rem" }}
        >
          {tweets &&
            tweets.map((tweet, ind) => (
              <div className="w-72" key={ind}>
                <Tweet tweetId={tweet.id_str} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

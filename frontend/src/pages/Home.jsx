import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import axios from "axios";
import { Tweet } from "react-twitter-widgets";
import { v4 as uuid } from "uuid";
import firebase from "firebase";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import "./Home.css";

export const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [text, setText] = useState([]);
  const [category, setCategory] = useState("");
  useState();

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
        });
      });
  };

  const addHandler = (e) => {
    e.preventDefault();
    setText((prev) => [...prev, { links: inputValue, category: category }]);
    db.collection(`posts`).add({
      id: uuid(),
      links: inputValue,
      category: category,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInputValue("");
    getData();
  };

  useEffect(() => {
    getData();
    handleClick();
  }, []);
  return (
    <>
      <div class="sidebar">
        <div class="sidebar-list">
          <div class="sidebar-heading">
            <span class="title">FILTERS</span>
          </div>
          <div class="filter-container">
            <div class="filter-list">
              <label>
                {" "}
                <input type="checkbox" /> Tweets
              </label>
              <label>
                {" "}
                <input type="checkbox" /> Tech Blog
              </label>
              <label>
                {" "}
                <input type="checkbox" /> Internship Opening
              </label>
              <label>
                {" "}
                <input type="checkbox" /> YouTube Tutorial
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-4xl mx-auto my-8 space-y-4 ">
        <div className="bg-gray-100 flex justify-center items-center  border-2 border-gray-900 rounded-lg py-6 p-3">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className=" bg-transparent border-b-2  border-gray-500 text-gray-400  font-medium text-lg w-4/5 "
            rows="2"
            cols="50"
            placeholder="What's cooking in the camp ?"
          />
          <div className="p-10">
            <div className="flex justify-center">
              <div className="mb-3 xl:w-46">
                <select
                  className="form-select appearance-none block w-64 py-1.5 text-base font-normaltext-gray-700
                       bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="tweets">📌 Select type of post</option>
                  <option value="tweets">Tweets</option>
                  <option value="blogs">Tech Blogs</option>
                  <option value="csb">CodeSandBox</option>
                  <option value="internship">Internship Oppurtunity</option>
                </select>
              </div>
            </div>
          </div>
          <button
            disabled={!inputValue}
            onClick={(e) => addHandler(e)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Post
          </button>
        </div>

        <div className="flex gap-4 flex-row flex-wrap">
          {text &&
            text.map(({ id, links }) => (
              <div key={id}>
                {" "}
                <div key={id}>
                  <LinkPreview margin="30px auto" width="280px" url={links} />
                </div>
              </div>
            ))}
        </div>
        <div className="flex gap-4 flex-row flex-wrap">
          {data &&
            data.map(({ id, links }) => (
              <div key={id}>
                <LinkPreview margin="30px auto" width="280px" url={links} />
              </div>
            ))}
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

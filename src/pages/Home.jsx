import React from "react";
// import { LinkPreview } from "@dhaiwat10/react-link-preview";
import "./Home.css";
export const Home = () => {
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
                <input type="checkbox" /> Tweets
              </label>
              <label>
                <input type="checkbox" /> Tech Blog
              </label>
              <label>
                <input type="checkbox" /> Internship Opening
              </label>
              <label>
                <input type="checkbox" /> YouTube Tutorial
              </label>
              <label>
                <input type="checkbox" /> GitHub Repo
              </label>
              <label>
                <input type="checkbox" /> Stackoverflow
              </label>
              <label>
                <input type="checkbox" /> React
              </label>
              <label>
                <input type="checkbox" /> CSS
              </label>
              <label>
                <input type="checkbox" /> JavaScript
              </label>
              <label>
                <input type="checkbox" /> JavaScript
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-4xl mx-auto my-8 space-y-4 ">
        <div className="bg-gray-100 flex justify-center items-center  border-2 border-gray-900 rounded-lg py-6 p-3">
          <textarea
            className=" bg-transparent border-b-2  border-gray-500 text-gray-400  font-medium text-lg w-4/5  "
            rows="2"
            cols="50"
            placeholder="What's cooking in the camp ?"
          ></textarea>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Post
          </button>
        </div>

        <div class="cards-list">
          <div class="card">blank</div>
          
          <div class="card">blank</div>
        </div>

        {/* <div className="flex justify-between space-x-5">
          <div className="bg-yellow-500 rounded-lg sm:h-[70vh] py-6 w-full h-[80vh] p-3">
            card 2
          </div>
          <div className="bg-red-500 rounded-lg py-6 w-full p-3">card 3</div>
          <div className="hidden md:inline-block bg-purple-500 rounded-lg py-6 w-full p-3">
            card 4
          </div>
        </div>
        <div className=" md:hidden bg-purple-500 rounded-lg py-6 w-full p-3">
          card 4
        </div>
      </div> */}
      </div>
      
    </>
  );
};

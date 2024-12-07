import React from "react";
import "./style.scss";

const Modal = ({ isModal, setIsModal }) => {
  return (
    <div className="Modal">
      <div className="Modal_insideBox">
        <div className="Modal_insideBox_header">
          <h1>{isModal.title} Note</h1>
          <span onClick={() => setIsModal({ isActive: false })}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                fill="#757575"
              />
            </svg>
          </span>
        </div>
        <form action="" className="Modal_insideBox_body">
          <div className="Modal_insideBox_body_top">
            <div className="Modal_insideBox_body_top_inputTitle">
              <label htmlFor="">Title</label>
              <input type="text" placeholder="Add title" />
            </div>
            <div className="Modal_insideBox_body_top_inputCategory">
              <label htmlFor="">Category</label>
              <select>
                <option>Personal</option>
                <option>Home</option>
                <option>Business</option>
              </select>
            </div>
          </div>
          <div className="Modal_insideBox_body_bottom">
            <label htmlFor="">
              <p>
                Description <span>(optional)</span>
              </p>
              <h5>0/200</h5>
            </label>
            <textarea name="" id="" placeholder="Add description"></textarea>
          </div>
        </form>
        <div className="Modal_insideBox_footer">
          <button onClick={() => setIsModal({ isActive: false })}>
            Cancel
          </button>
          <button>{isModal.title}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

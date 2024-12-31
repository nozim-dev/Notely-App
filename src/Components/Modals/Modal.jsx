import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { NotesContext } from "./../../Context/NotesProvider";

const Modal = () => {
  const { isModal, setIsModal, setNotes, notes } = useContext(NotesContext);
  const [inputValues, setInputValues] = useState({
    title: "",
    category: "",
    description: "",
  });

  function PostData(e) {
    e.preventDefault();
    if (isModal.title === "Add") {
      try {
        fetch("http://localhost:1337/api/notes", {
          method: "POST",
          body: JSON.stringify({
            data: {
              category: e?.target.category.value,
              title: e?.target.title.value,
              description: e?.target.description.value,
            },
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((message) => {
            setNotes((prev) => [...prev, message.data]);
          });
      } catch (error) {
        console.log(error);
      }
      setIsModal((prev) => ({ ...prev, isActive: false }));
    } else if (isModal.title === "Edit") {
      try {
        fetch(`http://localhost:1337/api/notes/${isModal.id}`, {
          method: "PUT",
          body: JSON.stringify({
            data: {
              category: e?.target.category.value,
              title: e?.target.title.value,
              description: e?.target.description.value,
            },
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
      } catch (error) {
        console.log(error);
      }
      setNotes(
        notes.map((note) => {
          if (note.documentId === isModal.id) {
            return {
              ...note,
              category: e.target.category.value,
              title: e.target.title.value,
              description: e.target.description.value,
              isCompleted: false,
            };
          }
          return note;
        })
      );
      setIsModal((prev) => ({ ...prev, isActive: false }));
    }
  }

  async function fetchData() {
    try {
      const response = await fetch(
        `http://localhost:1337/api/notes/${isModal.id}`
      );
      const note = await response.json();
      console.log(note.data);
      setInputValues({
        title: note.data.title,
        category: note.data.category,
        description: note.data.description,
      });
      console.log(inputValues);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isModal.isActive) {
      fetchData();
    }
  }, [isModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return isModal.isActive ? (
    <div className="Modal">
      <form action="" onSubmit={PostData} className="Modal_insideBox">
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
        <div className="Modal_insideBox_body">
          <div className="Modal_insideBox_body_top">
            <div className="Modal_insideBox_body_top_inputTitle">
              <label htmlFor="title">Title</label>
              <input
                name="title"
                id="title"
                type="text"
                placeholder="Add title"
                defaultValue={inputValues.title}
                onChange={handleChange}
              />
            </div>
            <div className="Modal_insideBox_body_top_inputCategory">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={inputValues.category}
                onChange={handleChange}
              >
                <option value="Personal">Personal</option>
                <option value="Home">Home</option>
                <option value="Business">Business</option>
              </select>
            </div>
          </div>
          <div className="Modal_insideBox_body_bottom">
            <label htmlFor="description">
              <p>
                Description <span>(optional)</span>
              </p>
              <h5>0/200</h5>
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Add description"
              defaultValue={inputValues.description}
              maxLength={200}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="Modal_insideBox_footer">
          <button onClick={() => setIsModal({ isActive: false })}>
            Cancel
          </button>
          <button>{isModal.title}</button>
        </div>
      </form>
    </div>
  ) : null;
};

export default Modal;

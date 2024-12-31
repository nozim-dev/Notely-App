import React, { useContext } from "react";
import "./style.scss";
import { NotesContext } from "../../Context/NotesProvider";

const ModalDel = () => {
  const { isModalDel, setIsModalDel, setNotes } = useContext(NotesContext);

  const DeleteNote = async () => {
    try {
      await fetch(`http://localhost:1337/api/notes/${isModalDel.id}`, {
        method: "DELETE",
      });
      setIsModalDel({ isActive: false });
      setNotes((prev) =>
        prev.filter((note) => note.documentId !== isModalDel.id)
      );
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return isModalDel.isActive ? (
    <div className="Modal">
      <div className="Modal_insideBoxDel">
        <div className="Modal_insideBox_header">
          <h1>{isModalDel.title} Note</h1>
          <span onClick={() => setIsModalDel({ isActive: false })}>
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
          <p>Are you sure you want to delete this note?</p>
        </div>
        <div className="Modal_insideBox_footer">
          <button onClick={() => setIsModalDel({ isActive: false })}>
            Cancel
          </button>
          <button onClick={DeleteNote}>{isModalDel.title}</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ModalDel;

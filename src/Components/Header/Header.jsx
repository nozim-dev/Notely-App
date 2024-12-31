import React, { useContext, useState } from "react";
import "./style.scss";
import { NotesContext } from "../../Context/NotesProvider";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const [originalNotes, setOriginalNotes] = useState([]); // Asl notelarni saqlash uchun

  // Qidiruv inputi o'zgarganda ishlaydigan funksiya
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    if (originalNotes.length === 0) {
      setOriginalNotes(notes); // Asl notelarni saqlash (birinchi marta)
    }

    if (value.trim() === "") {
      setNotes(originalNotes); // Agar input bo'sh bo'lsa, asl notelarni tiklash
    } else {
      const filtered = originalNotes.filter(
        (note) => note.title.toLowerCase().includes(value) // bu inputga kiritgan textimizni notelarning titleni ichidan qidiradi.
      );
      setNotes(filtered);
    }
  };

  function handleChangeOpen() {
    document
      .querySelector(".menu_content")
      .classList.add("menu_content_active");
  }
  function handleChangeClose() {
    document
      .querySelector(".menu_content")
      .classList.remove("menu_content_active");
  }

  return (
    <header>
      <div className="header_inside">
        <div className="menu">
          <div className="menu_icon" onClick={handleChangeOpen}>
            <svg
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.827637 2.40881C0.827637 1.4496 1.60524 0.671997 2.56445 0.671997H25.722C26.6812 0.671997 27.4588 1.4496 27.4588 2.40881C27.4588 3.36803 26.6812 4.14563 25.722 4.14563H2.56445C1.60524 4.14563 0.827637 3.36803 0.827637 2.40881ZM0.827637 11.6716C0.827637 10.7124 1.60524 9.9348 2.56445 9.9348H25.722C26.6812 9.9348 27.4588 10.7124 27.4588 11.6716C27.4588 12.6308 26.6812 13.4084 25.722 13.4084H2.56445C1.60524 13.4084 0.827637 12.6308 0.827637 11.6716ZM2.56445 19.1983C1.60524 19.1983 0.827637 19.9759 0.827637 20.9351C0.827637 21.8943 1.60524 22.6719 2.56445 22.6719H25.722C26.6812 22.6719 27.4588 21.8943 27.4588 20.9351C27.4588 19.9759 26.6812 19.1983 25.722 19.1983H2.56445Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="menu_content">
            <div className="menu_content_header">
              <div
                className="menu_content_header_icon"
                onClick={handleChangeClose}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2427 7.75738L7.75739 16.2427M16.2427 16.2426L7.75739 7.75732"
                    stroke="#28303F"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <NavLink to="/">All</NavLink>
            <NavLink to="/personal">Personal</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/business">Business</NavLink>
            <NavLink to="/completed">Completed notes</NavLink>
          </div>
        </div>
        <form action="">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.1665 1.6665C13.3065 1.6665 16.6665 5.0265 16.6665 9.1665C16.6665 13.3065 13.3065 16.6665 9.1665 16.6665C5.0265 16.6665 1.6665 13.3065 1.6665 9.1665C1.6665 5.0265 5.0265 1.6665 9.1665 1.6665ZM9.1665 14.9998C12.389 14.9998 14.9998 12.389 14.9998 9.1665C14.9998 5.94317 12.389 3.33317 9.1665 3.33317C5.94317 3.33317 3.33317 5.94317 3.33317 9.1665C3.33317 12.389 5.94317 14.9998 9.1665 14.9998ZM16.2373 15.059L18.5948 17.4157L17.4157 18.5948L15.059 16.2373L16.2373 15.059Z"
                fill="#212121"
                fillOpacity="0.87"
              />
            </svg>
          </span>
          <input
            placeholder="Search"
            type="search"
            name="search"
            onChange={handleSearch} // Qidiruv funskiyasi
          />
        </form>
        <button
          onClick={() => data.setIsModal({ isActive: true, title: "Add" })}
        >
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 14.25V9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75H9.75V14.25H8.25Z"
                fill="white"
              />
            </svg>
          </span>
          Add
        </button>
      </div>
    </header>
  );
};

export default Header;

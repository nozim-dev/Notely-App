import React from "react";
import "./style.scss";

const Cart = ({ category, isCompleted, title, text, date, setIsModal }) => {
  return (
    <div className="Cart">
      <div className="Cart_header">
        <div
          className={`Cart_header_category ${
            category == "Business"
              ? "business"
              : category == "Home"
              ? "home"
              : category == "Personal"
              ? "personal"
              : ""
          }`}
        >
          {category}
        </div>
        <div className="Cart_header_options">
          <input type="checkbox" />
          <div
            className="Cart_header_options_edit"
            onClick={() => setIsModal({ isActive: true, title: "Edit" })}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.421 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.65433 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z"
                fill="#757575"
              />
            </svg>
          </div>
          <div className="Cart_header_options_delete">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.196 20.021 5 19.55 5 19V6C4.71667 6 4.479 5.90433 4.287 5.713C4.09567 5.521 4 5.28333 4 5C4 4.71667 4.09567 4.479 4.287 4.287C4.479 4.09567 4.71667 4 5 4H9C9 3.71667 9.096 3.479 9.288 3.287C9.47933 3.09567 9.71667 3 10 3H14C14.2833 3 14.521 3.09567 14.713 3.287C14.9043 3.479 15 3.71667 15 4H19C19.2833 4 19.5207 4.09567 19.712 4.287C19.904 4.479 20 4.71667 20 5C20 5.28333 19.904 5.521 19.712 5.713C19.5207 5.90433 19.2833 6 19 6V19C19 19.55 18.8043 20.021 18.413 20.413C18.021 20.8043 17.55 21 17 21H7ZM9 16C9 16.2833 9.096 16.5207 9.288 16.712C9.47933 16.904 9.71667 17 10 17C10.2833 17 10.521 16.904 10.713 16.712C10.9043 16.5207 11 16.2833 11 16V9C11 8.71667 10.9043 8.479 10.713 8.287C10.521 8.09567 10.2833 8 10 8C9.71667 8 9.47933 8.09567 9.288 8.287C9.096 8.479 9 8.71667 9 9V16ZM13 16C13 16.2833 13.096 16.5207 13.288 16.712C13.4793 16.904 13.7167 17 14 17C14.2833 17 14.521 16.904 14.713 16.712C14.9043 16.5207 15 16.2833 15 16V9C15 8.71667 14.9043 8.479 14.713 8.287C14.521 8.09567 14.2833 8 14 8C13.7167 8 13.4793 8.09567 13.288 8.287C13.096 8.479 13 8.71667 13 9V16Z"
                fill="#757575"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="Cart_body">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="Cart_footer">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Cart;

import React, { createContext, useState, useEffect } from "react";

// Create a context for the fetched data
export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isModal, setIsModal] = useState({
    isActive: false,
    title: "Add",
    id: "",
  });
  const [isModalDel, setIsModalDel] = useState({
    isActive: false,
    title: "Delete",
    id: "",
  });

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/notes");
      const data = await response.json();
      setNotes(data.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes,
        isModal,
        isModalDel,
        setIsModal,
        setIsModalDel,
        setNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

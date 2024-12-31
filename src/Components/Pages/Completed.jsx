import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import NotFound from "../NotFound/NotFound";
import { NotesContext } from "../../Context/NotesProvider";
import "../../style/style.scss";

const Completed = () => {
  const { notes, setIsModal, setIsModalDel } = useContext(NotesContext);
  const [dataCart, setDataCart] = useState([]);

  useEffect(() => {
    if (notes) {
      setDataCart(notes.filter((cart) => cart.isCompleted == true));
    }
  }, [notes]);
  return dataCart.length > 0 ? (
    <div className="cart_row">
      {dataCart.map((cart, id) =>
        cart.isCompleted == true ? (
          <Cart
            setIsModal={setIsModal}
            setIsModalDel={setIsModalDel}
            key={id}
            isCompleted={cart.isCompleted}
            title={cart.title}
            description={cart.description}
            date={cart.updatedAt}
            category={cart.category}
            id={cart.documentId}
          />
        ) : null
      )}
    </div>
  ) : (
    <NotFound />
  );
};

export default Completed;

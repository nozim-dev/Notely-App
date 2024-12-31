import React, { useContext } from "react";
import Cart from "../Cart/Cart";
import NotFound from "../NotFound/NotFound";
import "../../style/style.scss";
import { NotesContext } from "../../Context/NotesProvider";
import { useState, useEffect } from "react";

const All = () => {
  const { notes, setIsModal, setIsModalDel } = useContext(NotesContext);
  const [dataCart, setDataCart] = useState([]);

  useEffect(() => {
    if (notes) {
      setDataCart(notes.filter((cart) => cart !== null && cart !== undefined));
    }
  }, [notes]);

  return (
    <>
      {dataCart.length > 0 ? (
        <div className="cart_row">
          {dataCart.map(
            (cart, id) =>
              cart && (
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
              )
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default All;

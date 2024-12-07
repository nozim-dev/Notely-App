import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Tab from "./Components/Header/Tab";
import NotFound from "./Components/NotFound/NotFound";
import Cart from "./Components/Cart/Cart";
import "./style/style.scss";
import Modal from "./Components/Modals/Modal";

const App = () => {
  let isData = true;
  const [isModal, setIsModal] = useState({
    isActive: false,
    title: "Add",
  });

  const data = [
    {
      isCompleted: false,
      category: "Business",
      title: "Finish the task on the board",
      text: "Remember to finish task on the board. After finishing give for evaluation Matt.",
      date: "22.01.2023",
    },
    {
      isCompleted: false,
      category: "Home",
      title: "Buy a new tea cup",
      text: "Remember to buy a new tea cup. ",
      date: "21.01.2023",
    },
    {
      isCompleted: false,
      category: "Personal",
      title: "Hang out with Marry",
      text: "Hang out with Marry, friday at 7 pm in Blue Wolf Café",
      date: "20.01.2023",
    },
    {
      isCompleted: false,
      category: "Business",
      title: "Business meeting",
      text: "Business meeting at 1 pm!",
      date: "19.01.2023",
    },
    {
      isCompleted: false,
      category: "Home",
      title: "Bake a birthday cake",
      text: "Remember to bake a chocolate brithday cake for Nany.",
      date: "17.01.2023",
    },
    {
      isCompleted: false,
      category: "Personal",
      title: "Sign up for a Spanish course",
      text: "Start to learn Spanish.",
      date: "17.01.2023",
    },
  ];

  return (
    <div className="Container">
      <Header setIsModal={setIsModal} />
      <main>
        <Tab />
        {isData ? (
          <div className="cart_row">
            {data.map((cart, id) => (
              <Cart
                setIsModal={setIsModal}
                key={id}
                isCompleted={cart.isCompleted}
                title={cart.title}
                text={cart.text}
                date={cart.date}
                category={cart.category}
              />
            ))}
          </div>
        ) : (
          <NotFound />
        )}
      </main>
      {isModal.isActive ? (
        <Modal isModal={isModal} setIsModal={setIsModal} />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;

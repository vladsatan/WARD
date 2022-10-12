import "./ClientsSay.scss";
import client1 from "../../photos/client1.svg";
import client2 from "../../photos/client2.svg";
import client3 from "../../photos/client3.png";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

const ClientsSay = () => {
  const [clientsArray, setClients] = useState([
    {},
    {
      active: false,
      image: client1,
      p: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien blandit purus bibendum quis massa lectus. Duis sed dictumst laoreet duis aliquam augue facilisi blandit imperdiet."',
      span: "Baby John - Head of Artur Ravlyk HUI",
    },
    {
      active: false,
      image: client2,
      p: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien blandit purus bibendum quis massa lectus. Duis sed dictumst laoreet duis aliquam augue facilisi blandit imperdiet."',
      span: "Baby John - Head of Artur Ravlyk HUI",
    },
    {
      active: false,
      image: client3,
      p: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien blandit purus bibendum quis massa lectus. Duis sed dictumst laoreet duis aliquam augue facilisi blandit imperdiet."',
      span: "Baby John - Head of Artur Ravlyk HUI",
    },
    {},
  ]);

  const [page, setPage] = useState(2);
  const back = useRef();
  const slidebur = useRef();
  const block = useRef();
  const prev = (number) => {
    setPage((page) => page + number);

    setClients([
      ...clientsArray.slice(0, page),
      {
        ...clientsArray[page],
        active: false,
      },
      ...clientsArray.slice(page + 1, clientsArray.length),
    ]);
  };

  const scrolled = (e) => {
    const clientWidth = e.target.clientWidth / 2;
    const scrollPosition = e.target.scrollLeft;
    const children = back.current.children;

    [...children].forEach((el, index) => {
      if (
        Math.abs(el.offsetLeft - scrollPosition) < clientWidth + 50 &&
        Math.abs(el.offsetLeft - scrollPosition) > clientWidth - 300
      ) {
        if (index !== 0 && index !== children.length - 1) {
          const clases = el.classList;
          el.classList.remove([...clases]);
          el.classList.add("client_primary");
        }
      } else {
        if (index !== 0 && index !== children.length - 1) {
          const clases = el.classList;
          el.classList.remove([...clases]);
          el.classList.add("client_secondary");
        }
      }
    });
  };

  useEffect(() => {
    setClients([
      ...clientsArray.slice(0, page),
      {
        ...clientsArray[page],
        active: true,
      },
      ...clientsArray.slice(page + 1, clientsArray.length),
    ]);
  }, [page]);

  return (
    <div className="clients_container">
      <h1>
        what our <span>clients</span> say
      </h1>
      <div
        ref={slidebur}
        className="slidebur_container"
        onScroll={(e) => scrolled(e)}
      >
        <div className="clients_slider" ref={back}>
          {clientsArray.map((el) => (
            <>
              {el.p ? (
                <div
                  key={nanoid()}
                  className={
                    el.active === true ? "client_primary" : "client_secondary"
                  }
                >
                  <img src={el.image} />
                  <p>{el.p}</p>
                  <span>{el.span}</span>
                </div>
              ) : (
                <div className="clients_transpareny"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSay;

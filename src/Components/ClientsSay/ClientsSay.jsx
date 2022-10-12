import "./ClientsSay.scss";
import client1 from "../../photos/client1.svg";
import client2 from "../../photos/client2.svg";
import client3 from "../../photos/client3.png";
import before from "../../photos/before.png";
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
      active: true,
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
      <div onClick={() => page !== 1 && prev(-1)} className="before" />

      <div className="clients_slider" ref={back}>
        {clientsArray.slice(page - 1, page + 2).map((el) => (
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
                <spn>{el.span}</spn>
              </div>
            ) : (
              <div className="clients_transpareny"></div>
            )}
          </>
        ))}
      </div>
      <div
        onClick={() => clientsArray.length - 2 !== page && prev(1)}
        className="after"
      />
    </div>
  );
};

export default ClientsSay;

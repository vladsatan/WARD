import "./ClientsSay.scss";
import client1 from "../../photos/client1.svg";
import client2 from "../../photos/client2.svg";
import client3 from "../../photos/client3.png";
import client4 from "../../photos/client4.png";
import client5 from "../../photos/client5.png";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

const ClientsSay = () => {
  const [clientsArray, setClients] = useState([
    {},
    {
      active: true,
      image: client1,
      p: '"Working with this team is a pleasure and our project was very successful. Since I had no experience with web development and a good constructive plan for its implementation, Arthur helped me quickly and efficiently solve these issues. I will recommend them to everyone!"',
      span: "Founder of Week",
    },
    {
      active: false,
      image: client2,
      p: '"Great experience working with this company.Our collaboration always had quick feedback and offered cool ideas with their experienced expert in my industry.The marketing department did a great job on my rebranding and design. I will definitely contact them again next time."',
      span: "Co-founder  of MOYO",
    },
    {
      active: false,
      image: client3,
      p: '"Very professional treatment and approach to the work. They were very careful with my idea and implementation. We will keep in touch with Ward in the future."',
      span: "Co-founder of SteamPay",
    },
    {
      active: false,
      image: client5,
      p: '"Artur was a pleasure to work with.He felt my vision and was able to clearly ask leading questions that accelerated the process of our work. It was awesome!"',
      span: "Founder of GGSEL",
    },
    {
      active: false,
      image: client4,
      p: '"From the first call we found a common language and were on the same page with Vladislav. Very good price and top quality development. I think no one will regret cooperating with them.I was glad to meet Vladislav and Artur, we will continue to work with them!"',
      span: "Co-founder of Carveli",
    },
    {},
  ]);

  const [page, setPage] = useState(2);
  const back = useRef();
  const slidebur = useRef();

  const scrolled = (e) => {
    const clientWidth = e.target.clientWidth / 2;
    const scrollPosition = e.target.scrollLeft;
    const children = back.current.children;

    [...children].forEach((el, index) => {
      if (
        Math.abs(el.offsetLeft - scrollPosition) < clientWidth + 50 &&
        Math.abs(el.offsetLeft - scrollPosition) > clientWidth - 270
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
    const scrollWidth =
      (slidebur.current.offsetWidth / back.current.offsetWidth) *
      slidebur.current.offsetWidth;

    var middle =
      back.current.children[Math.floor((back.current.children.length - 1) / 2)];
    console.log(back.current.offsetWidth);
    slidebur.current.scrollLeft =
      back.current.offsetWidth / 2 - slidebur.current.offsetWidth / 2 + 10;
    console.log(back.current.offsetWidth);
  }, []);

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
                <div key={nanoid()} className="clients_transpareny"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSay;

// import Close from "../../../assets/images/close.svg"
// import {useState} from "react"

// const PortfolioItem = ({ title, details}) => {
//     const [modal, setModal] = useState(false)

//     const toggleModal = () => {
//         setModal(!modal)
//     }
//   return (
//     <div className="portfolio__item">
//      <img src="" alt="backend img" className="portfolio__img" />
//      <div className="portfolio__hover" onClick={toggleModal}>
//         <h3 className="portfolio__title">
//             {title}
//         </h3>

//      </div>
//      {modal && (
//         <div className="portfolio__modal">
//         <div className="portfolio__modal-content">
//             <img src={Close} alt="" className="modal__close" onClick={toggleModal} />
//             <h3 className="modal__title">
//                 {title}
//             </h3>
//             <ul className="modal__list grid">
//                 {details.map(({icon, title, desc}, i) => {
//                     return (
//                         <li className="modal__item" key={i}>
//                             <span className="item__icon">
//                                 {icon}
//                             </span>
//                             <div className="">
//                                 <span className="item__title">
//                                     {title}
//                                 </span>
//                                 <span className="item__details">
//                                     {desc}
//                                 </span>
//                             </div>
//                         </li>
//                     )
//                 })}
//             </ul>
//             <img src="" alt="backend img" className="modal__img" />
//         </div>
//      </div>
//      )}
//     </div>
//   )
// }

// export default PortfolioItem


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PortfolioType } from "../../../types/types";
import { request } from "../../../server/request";
import { Empty } from "antd";
import { IMG_URL } from "../../../constants";

const PortfolioItem = () => {
  const [skills, setSkills] = useState<PortfolioType[]>([]);

  const getPortfolios = async () => {
    try {
      const { data } = await request.get(
        "portfolios?user=64e2093d8abcf80014588ce7"
      );
      setSkills(data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPortfolios();
  }, []);
  return (
    <>
      {skills.length == 0 ? (
        <div style={{ display: "flex", justifyItems: "center" }}>
          <Empty />
        </div>
      ) : (
        skills?.map((skill: PortfolioType) => (
          <div className="portfolio__item" key={skill?._id}>
            <img
              height={200}
              src={
                IMG_URL +
                skill?.photo._id +
                "." +
                skill?.photo.name.split(".")[1]
              }
              alt=""
              className="portfolio__img"
            />
            <div className="content__portfolio">
              <h1 className="modal__title">{skill?.name}</h1>
              <div className="conetss">
              <Link to={skill?.url}><b>Link : </b>{skill?.url}</Link>
              <p className="item__details"><b>Desc : </b>{skill?.description}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default PortfolioItem;
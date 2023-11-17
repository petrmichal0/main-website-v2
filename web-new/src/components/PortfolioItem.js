import { useState } from "react";

import close from "../assets/close.png";

function PortfolioItem({
  img,
  title,
  text,
  iconGitHub,
  linkGitHub,
  iconGlobe,
  linkGlobe,
}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={close}
              alt=""
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>
            <h4 className="modal__text">{text}</h4>

            <div className="modal__item">
              <a
                className="item__link"
                href={linkGlobe}
                target="_blank"
                rel="noreferrer"
              >
                <span className="item__icon">{iconGlobe}</span>
              </a>

              <a
                className="item__link"
                href={linkGitHub}
                target="_blank"
                rel="noreferrer"
              >
                <span className="item__icon">{iconGitHub}</span>
              </a>
            </div>

            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioItem;

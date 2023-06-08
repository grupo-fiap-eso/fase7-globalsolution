import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown
} from "@fortawesome/fontawesome-free-solid";


function SectionColapsible(props){
  const [aberta, sessaoAberta] = useState(props.aberta);

  const onClick = () => {
    sessaoAberta((prev) => !prev);
  };

  return (
    <div className="card" style={{border: "1px solid #606C38"}}>
      <div>
        <div className="p-1 pt-2 pb-2">
          <button type="button" className="btn d-flex w-100 justify-content-between" onClick={onClick}>
          <h6 className="mb-0 font-weight-bold">{props.title}</h6>
            {!aberta ? (
              <FontAwesomeIcon icon={faChevronDown} style={{maxWidth: "14px"}}/>
            ) : (
              <FontAwesomeIcon icon={faChevronUp} style={{maxWidth: "14px"}}/>
            )}
          </button>
        </div>
      </div>

      <div>
        <div>{aberta && <div className="p-3">{props.children}</div>}</div>
      </div>
    </div>
  );
};

export default SectionColapsible;

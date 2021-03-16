import React, { useState, useEffect } from "react";

import emailStore from "../../stores/emailStore";
import { loadEmails } from "../../actions/emailActions";
import { NavLink } from "react-router-dom";
import authStore from "../../stores/authStore";

import "./listEmails.scss";

function ListEmails(props) {
  const [emails, setEmails] = useState([]);

  const [receptorEmail] = useState(authStore.getUserEmail());

  useEffect(() => {
    emailStore.addChangeListener(onChange);

    loadEmails();

    function onChange() {
      setEmails(emailStore.getEmailsByReceptor(receptorEmail));
    }
    return () => emailStore.removeChangeListener(onChange);
  }, [receptorEmail]);
  const actualEmails = emails.map((email) => {
    const link = "/email/" + email._id;
    return (
      <NavLink className="nav-link" key={email._id} to={link}>
        <div className="email-list__item">
          <div className="emisorName email-name-text">
            from: {email.emisorName}
          </div>
          <div className="dateEmail email-text">date: {email.date}</div>

          <div className="hour email-text">
            hour: {email.hour} : {email.minute}
          </div>
        </div>
      </NavLink>
    );
  });

  return (
    <div className="main__list--email">
      {actualEmails && <ul className="email-list">{actualEmails}</ul>}
    </div>
  );
}

export default ListEmails;

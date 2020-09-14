import React, { useState, useEffect } from "react";
import emailStore from "../../stores/emailStore";
import { loadEmails } from "../../actions/emailActions";

import "./detailEmail.css";

function DetailEmail(props) {
  const [emails, setEmails] = useState(emailStore.getEmails());
  const [detailElement, setDetailElement] = useState({});

  useEffect(() => {
    emailStore.addChangeListener(onChange);

    let emailId = props.match.params.emailId;
    if (emails.length === 0) {
      loadEmails();
    } else if (emailId) {
      const email = emailStore.getEmailById(emailId);
      if (email) {
        setDetailElement(email);
        console.log("&&&&&&&", detailElement);
      }
    }
    return () => emailStore.removeChangeListener(onChange);
  }, [onChange]);

  function onChange() {
    setEmails(emailStore.getEmails());
  }

  return (
    <main className="main__detail--email">
      <div className="email__container--detail">
        <div className="name__email text__email">
          from: {detailElement.emisorName}
        </div>
        <div className="text__email">date: {detailElement.date}</div>
        <div className="text__email time--email">
          hour: {detailElement.hour} : {detailElement.minute}
        </div>
        <div className="missage__email ">{detailElement.bodyMissage}</div>
      </div>
    </main>
  );
}
export default DetailEmail;

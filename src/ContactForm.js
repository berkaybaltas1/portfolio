import React, { useState } from "react";
import "../src/css/ContactForm.css";
import emailjs from "emailjs-com";

function ContactForm() {
  const [valid, setValid] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isValid, setisValid] = useState(false);
  const [message, setMessage] = useState();
  const [success, setSuccess] = useState(false);

  function sendEmail(e) {
    emailjs
      .sendForm(
        "service_3au09qv",
        "template_tng7bca",
        e.target,
        "user_d7gv0hpLyiQKI2i9S6wuS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setisValid(false);
    setValid({ name: "", email: "", message: "" });
    setSuccess(true);
    e.target.reset();
  }

  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  const handleForm = (key, data) => {
    setSuccess(false);
    if (key === "name") {
      setValid({ ...valid, name: data });
    }
    if (key === "email") {
      setValid({ ...valid, email: data });
    }
    if (key === "message") {
      setValid({ ...valid, message: data });
    }
    console.log(valid);
  };

  const checkValid = () => {
    if (valid.name.length < 2 || hasNumber(valid.name))
      return "Please enter a valid name.";
    if (valid.email.length < 5) return "Please enter a valid email.";
    if (valid.message.length < 10)
      return "Please enter a message greater than 10 characters.";

    setisValid(true);
  };

  return (
    <section>
      curl
      <div className="header-contact">
        <h1 className="contact-logo">Let's chat.</h1>
      </div>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          isValid ? sendEmail(e) : console.log("error");
        }}
      >
        <div className="form-container">
          <p className="success-msg">
            {success && "Message successfully delivered."}
          </p>
          <p className="error-msg">{message}</p>
          <label>Name</label>
          <input
            onChange={(e) => handleForm("name", e.target.value)}
            type="text"
            name="name"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => handleForm("email", e.target.value)}
          />
          <label>Message</label>
          <textarea
            name="message"
            onChange={(e) => handleForm("message", e.target.value)}
          />
          <button
            onClick={() => {
              const error = checkValid();
              setMessage(error);
            }}
            className="form-btn"
            type="submit"
            value="Send"
          >
            send
          </button>
        </div>
      </form>
      <hr className="hr-footer"></hr>
    </section>
  );
}

export default ContactForm;

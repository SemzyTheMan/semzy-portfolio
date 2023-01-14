import React, { useEffect } from "react";
import "./contact.scss";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";
import { useNavigate } from "react-router-dom";
const Contact = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    send(
      "Semiloxy10*",
      "template_gt5hg1v",
      {
        Name: data.Name,
        message: data.message,
        Email: data.Email,
      },
      "KgYHLgOPzW7DzV7rQ"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        return navigate("/");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="Contact">
      <div className="Contact_container">
        <h1>Get in Touch</h1>
        <div className="Contact_desc">
          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. I’m a hard-working and positive person who will
            always approach each task with a sense of purpose and attention to
            detail. Please do feel free to check out my online profiles below
            and get in touch using the contact form.
          </p>
          <div className="Contact_imgsection">
            <a href="https://github.com/SemzyTheMan" target={"_blank"}>
              <img src="/images/icons/github-copy.svg" alt="github" />
            </a>
            <a href="https://twitter.com/semzy17" target={"_blank"}>
              <img src="/images/icons/twitter.svg" alt=" twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="Form_section">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label>Name</label>
          <input
            {...register("Name")}
            type="text"
            placeholder="FirstName LastName"
          />
          <label>Email Address</label>
          <input
            {...register("Email")}
            type="email"
            placeholder="example@email.com"
          />
          <label>Message</label>
          <textarea
            {...register("message")}
            name="message"
            placeholder="Enter your message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <button>
            <span></span>
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

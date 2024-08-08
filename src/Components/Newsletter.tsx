import React, { useState } from "react";
import { validate } from "email-validator";
import styles from "../stylesheets/NewsLetter.module.css";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [_, setIsValidEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate(email)) {
      setIsValidEmail(true);
      setFeedback("submitting..");
    } else {
      setFeedback("this email is incorrect..");
    }

    setTimeout(() => {
      setFeedback("");
    }, 2500);
  };

  return (
    <section id="newsletter" className={`flex-and-align ${styles.newsletter}`}>
      <h3 className={styles.title}>Newsletter</h3>

      <div>
        <form onSubmit={handleSubmit} className="">
          <input
            placeholder="your@email.com"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <button type="submit" className={styles.submitBtn}>
            Subscribe
          </button>
        </form>
        <p>{feedback}</p>
      </div>
    </section>
  );
};

export default Newsletter;

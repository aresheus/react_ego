import style from "./Contact.module.css";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className={style.contact} id="contact">
      <h1>CONTACT</h1>

      <div className={style.mainArea}>
        <form className={style.form} onClick={handleSubmit}>
          <div className={style.inputArea}>
            <label>Full Name</label>
            <input type="text" placeholder="Full Name" />
          </div>

          <div className={style.inputArea}>
            <label>Email</label>
            <input type="text" placeholder="Full Name" />
          </div>

          <div className={style.inputTextArea}>
            <label>Message</label>
            <textarea rows={8} placeholder="Your Message"></textarea>
          </div>

          <button className={style.send_btn}>Submit</button>
        </form>

        <img
          src="https://d3k81ch9hvuctc.cloudfront.net/company/VjFmxS/images/13fa13d0-7f12-4305-a69d-5765b9a412e3.gif"
          alt=""
          className={style.contactImg}
        />
      </div>
    </section>
  );
}

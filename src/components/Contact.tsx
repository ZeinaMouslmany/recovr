import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT – FORM */}
        <div className="contact-form">
          <h2>Get in touch</h2>
          <p className="contact-subtitle">
            We're ready to lead you into the future of mental health
          </p>

          <input type="text" placeholder="Your Full Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Your Phone (+961 00-000-000)" />
          <input type="text" placeholder="Organization Name" />
          <input type="text" placeholder="Job Title" />

          <select>
            <option>Preferred Contact Method</option>
            <option>Zoom</option>
            <option>Google Meet</option>
            <option>Phone Call</option>
          </select>

          <div className="contact-row">
            <input type="date" />
            <input type="time" />
          </div>

          <select>
            <option>Choose your country</option>
            <option>Lebanon</option>
            <option>UAE</option>
            <option>USA</option>
            <option>UK</option>
          </select>

          <select>
            <option>I’m Interested In</option>
            <option>VR Therapy Demo</option>
            <option>Pricing</option>
            <option>Partnership</option>
          </select>

          <button className="contact-btn">Book a Demo</button>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="contact-image">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="VR Therapy"
          />
        </div>

      </div>
    </section>
  );
};

export default Contact;

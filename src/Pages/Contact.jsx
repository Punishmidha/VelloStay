import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>

      <div className="host-info">
        <p>
          <strong>Host Name:</strong> Rahul Midha
        </p>
        <p>
          <strong>Phone Number:</strong> +91 9996850506
        </p>
      </div>

      <form className="contact-form">
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Your Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Your Message</label>
        <textarea
          rows="4"
          placeholder="Write your message..."
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;

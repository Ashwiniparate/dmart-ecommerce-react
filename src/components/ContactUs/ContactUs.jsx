import { useState } from "react";

function ContactUs() {
  const [hover, setHover] = useState(false);

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      padding: "30px",
    },

    container: {
      width: "900px",
      maxWidth: "100%",
      backgroundColor: "#fdfdfd",
      display: "flex",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      overflow: "hidden",
    },

    left: {
      flex: 1,
      background: "linear-gradient(135deg,#1e3c72,#2a5298)",
      color: "white",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    right: {
      flex: 1.3,
      padding: "40px",
    },

    heading: {
      fontSize: "30px",
      marginBottom: "15px",
    },

    subHeading: {
      fontSize: "15px",
      lineHeight: "1.6",
      color: "#f0f0f0",
    },

    info: {
      marginTop: "25px",
      lineHeight: "2",
      fontSize: "16px",
    },

    title: {
      textAlign: "center",
      marginBottom: "25px",
      color: "#1e3c72",
      fontSize: "30px",
    },

    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "18px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "15px",
      outline: "none",
      boxSizing: "border-box",
    },

    textarea: {
      width: "100%",
      height: "120px",
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      resize: "none",
      fontSize: "15px",
      outline: "none",
      boxSizing: "border-box",
    },

    button: {
      width: "100%",
      padding: "14px",
      marginTop: "20px",
      backgroundColor: hover ? "#16325c" : "#1e3c72",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Left Section */}
        <div style={styles.left}>
          <h1 style={styles.heading}>Contact Us</h1>

          <p style={styles.subHeading}>
            We'd love to hear from you. Whether you have a question,
            suggestion, or need assistance, feel free to contact us.
          </p>

          <div style={styles.info}>
            <p>📍 Pune, Maharashtra, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ contact@example.com</p>
            <p>🌐 www.example.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div style={styles.right}>
          <h2 style={styles.title}>Send Message</h2>

          <form>
            <input
              type="text"
              placeholder="Full Name"
              style={styles.input}
            />

            <input
              type="email"
              placeholder="Email Address"
              style={styles.input}
            />

            <input
              type="text"
              placeholder="Subject"
              style={styles.input}
            />

            <textarea
              placeholder="Write your message..."
              style={styles.textarea}
            ></textarea>

            <button
              type="submit"
              style={styles.button}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
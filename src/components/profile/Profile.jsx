function Profile() {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background:"linear-gradient(135deg,green,pink,yellow )",
      fontFamily: "Arial, sans-serif",
      paddingTop: "80px",
      boxSizing: "border-box",
    },

    box: {
      padding: "30px 50px",
      backgroundColor: "#f4ebeb" ,
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      textAlign: "center",
    },

    title: {
      fontSize: "28px",
      color: "#1e3c72",
      marginBottom: "10px",
    },

    text: {
      fontSize: "16px",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>Profile Component</h1>
        <p style={styles.text}>
          Welcome to your profile page 🚀
        </p>
      </div>
    </div>
  );
}

export default Profile;
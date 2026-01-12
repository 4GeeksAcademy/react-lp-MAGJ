
import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>©MAGJ {new Date().getFullYear()}</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#222",
    color: "#fff",
  },
};

export default Footer;

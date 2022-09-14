import styles from "../styles/About.module.css";

function about() {
  return (
    <div className={styles.highlight}>
      <h2>About page</h2>
      Sub title
      <button className="btn btn-success">Primary</button>
    </div>
  );
}

export default about;

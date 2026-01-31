
import Card from "./Card";
import apple from "./assets/Apple.jpg";
import orange from "./assets/Orange.jpg";
import mango from "./assets/Mango.png";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Favorite Fruits</h1>
      </header>
      <main className={styles.cardContainer}>
        <Card title="Apple" fruit={apple} />
        <Card title="Orange" fruit={orange} />
        <Card title="Mango" fruit={mango}/>
      </main>
    </div>
  );
}

export default App;
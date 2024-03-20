import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        Hello World

        <iframe
          data-aa='2311888'
          src='//acceptable.a-ads.com/2311888'
          style={{
            border: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}
        ></iframe>
      </div>
    </main>
  );
}

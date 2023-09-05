import styles from "@/styles/Home.module.css";
import styles2 from "../styles/universal.module.css";
import ReusableRealtimeTimestamp from "@/components/timestamp";
import Content from "@/components/content";

export default function Home() {
  return (
    <>
      <main className={`${styles.main} `}>
        <div className={styles2["container-top"]}>
          <ReusableRealtimeTimestamp />
          <div className={styles2["kotak"]}>
            <div className={styles2["stroke"]}></div>
            <div className={styles2["title"]}>
              <span>&lt; SPE / FRONTEND &gt;</span>
            </div>
          </div>
        </div>
        <Content/>
      </main>
    </>
  );
}

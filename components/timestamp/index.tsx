import React, { useState, useEffect } from "react";
import styles from "../../styles/universal.module.css";

export default function ReusableRealtimeTimestamp() {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const month = monthNames[now.getMonth()];
      const day = now.getDate();
      const year = now.getFullYear();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      const daySuffix =
        day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th";

      const formattedTimestamp = `${month} ${day}${daySuffix}, ${year} - ${hours}:${minutes}:${seconds}`;
      setTimestamp(formattedTimestamp);
    };

    // Update timestamp every second
    const intervalId = setInterval(updateTimestamp, 1000);

    // Initial update
    updateTimestamp();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p className={styles["timeStamp"]}>{timestamp}</p>;
}

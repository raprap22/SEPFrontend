import React, { useState, useEffect } from "react";
import styles from "../../styles/universal.module.css";
import Card from "../card";

export default function Content() {
  return (
    <>
      <h1 style={{ marginTop: 100, color: "black" }}>SPE Frontend Shop</h1>
      <div className={styles["content"]}>
        <div className={styles["header"]}>
          <span style={{ marginLeft: 250 }} className={styles["span"]}>
            Product
          </span>
          <span style={{ marginLeft: 800 }} className={styles["span"]}>
            Quantity
          </span>
          <span style={{ marginLeft: 1000 }} className={styles["span"]}>
            Subtotal
          </span>
        </div>
        <div className={styles["data"]}>
          <Card />
        </div>
      </div>
    </>
  );
}


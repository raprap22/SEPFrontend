import React, { useState, useEffect } from "react";
import styles from "../../styles/universal.module.css";

interface Item {
  quantity: number;
  product: Product;
}

interface Product {
  code: string;
  name: string;
  price: number;
  media_url: string;
  stock: number;
}

function Card() {
  const [dataProduct, setDataProduct] = useState<Item[]>([]);
  const [TotalHarga, setTotalHarga] = useState<number>(0);

  const [selectedProducts, setSelectedProducts] = useState<{
    [code: string]: number;
  }>({});

  const baseURL = "https://spe-academy.spesolution.net/api/recruitment";

  const fetchData = async () => {
    try {
      const response = await fetch(baseURL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setDataProduct(data);
      } else {
        console.error("Failed to fetch recruitment data:", response.status);
      }
    } catch (error) {
      console.error("Failed to fetch recruitment data:", error);
    }
  };
  const hargaTotalAwal = () => {
    let total = 0;
    for (const code in selectedProducts) {
      const product = dataProduct.find(
        (item) => item.product.code === code
      );
      if (product) {
        total += product.product.price * selectedProducts[code];
      }
    }
    setTotalHarga(total);
  };

  const handleQuantityChange = (code: string, quantity: number) => {
    setSelectedProducts((prevSelected) => ({
      ...prevSelected,
      [code]: quantity,
    }));
    hargaTotalAwal();
  };
  const totalHargaAkhir = dataProduct.reduce((total, item) => {
    return (
      total +
      item.product.price * item.quantity +
      TotalHarga -
      item.product.price
    );
  }, 0);

  useEffect(() => {
    totalHargaAkhir;
    fetchData();
  }, [totalHargaAkhir]);
  console.log(totalHargaAkhir);

  return (
    <>
      {dataProduct.map((item) => (
        <div className={styles["card"]}>
          <img src={item.product.media_url} className={styles["img-box"]} />
          <p
            style={{
              color: "#00DBDE",
              fontSize: 20,
              marginLeft: 300,
              bottom: 255,
              position: "relative",
            }}
          >
            {item.product.code}
          </p>
          <p
            style={{
              position: "relative",
              color: "black",
              fontSize: 24,
              marginLeft: 300,
              top: -235,
            }}
          >
            {item.product.name}
          </p>
          <p
            style={{
              position: "relative",
              color: "black",
              fontSize: 14,
              marginLeft: 300,
              top: -215,
            }}
          >
            IDR. {item.product.price.toLocaleString("id-ID")}
          </p>
          <p
            style={{
              position: "relative",
              color: "red",
              fontSize: 12,
              marginLeft: 300,
              top: -195,
            }}
          >
            {item.product.stock} in stock
          </p>
          <input
            type="number"
            value={selectedProducts[item.product.code]}
            onChange={(e) =>
              handleQuantityChange(
                item.product.code,
                parseInt(e.target.value, 10)
              )
            }
            style={{
              backgroundColor: "white",
              width: 60,
              height: 30,
              color: "black",
              position: "relative",
              float: "right",
              bottom: 200,
              right: 320,
            }}
          />

          <p
            style={{
              position: "relative",
              color: "Black",
              fontSize: 20,
              float: "right",
              right: 15,
              top: -195,
            }}
          >
            IDR. {item.product.price.toLocaleString("id-ID")}
          </p>
          <hr />
        </div>
      ))}
      <div className={styles["header"]}>
        <p style={{ float: "right", marginTop: 25 }}>
          TOTAL IDR. {totalHargaAkhir.toLocaleString("id-ID")}
        </p>
      </div>
    </>
  );
}

export default Card;

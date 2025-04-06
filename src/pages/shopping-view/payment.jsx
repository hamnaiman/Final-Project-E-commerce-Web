// Payment.jsx
import { useEffect } from "react";
import axios from "axios";

const Payment = () => {
  useEffect(() => {
    axios.post("http://localhost:5000/api/shop/payment/jazzcash", {
      orderId: "ORDER123",
      amount: 1000,
    }).then((res) => {
      const data = res.data;
      const form = document.createElement("form");
      form.method = "POST";
      form.action = data.actionURL;

      Object.entries(data).forEach(([key, value]) => {
        if (key !== "actionURL") {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = value;
          form.appendChild(input);
        }
      });

      document.body.appendChild(form);
      form.submit();
    });
  }, []);

  return <h2>Redirecting to JazzCash...</h2>;
};

export default Payment;

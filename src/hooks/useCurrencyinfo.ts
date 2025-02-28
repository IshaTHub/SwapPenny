import { useEffect, useState } from "react";

type CurrencyData = {
  [key: string]: number; // Object with currency keys (e.g., "inr", "usd") and number values
};

function useCurrencyInfo(currency: string) {
  const [data, setData] = useState<CurrencyData>({}); // {}-> empty object
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency] || {})); // Ensure data is valid
  }, [currency]);

  return data; // This is now properly typed
}

export default useCurrencyInfo;

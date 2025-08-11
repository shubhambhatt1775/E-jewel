export default function CreditCard({ value = {}, onChange }) {
  const handleChange = (field, val) => {
    onChange({ ...value, [field]: val });
  };

  return (
    <div className="flex flex-col gap-2 mt-10"  >
      <input
        placeholder="Card Number"
        value={value.cardNumber || ""}
        onChange={(e) => handleChange("cardNumber", e.target.value)}
        className="border rounded px-3 py-2"
      />
      <input
        placeholder="Card Holder"
        value={value.cardHolder || ""}
        onChange={(e) => handleChange("cardHolder", e.target.value)}
        className="border rounded px-3 py-2"
      />
      <input
        placeholder="MM"
        value={value.month || ""}
        onChange={(e) => handleChange("month", e.target.value)}
        className="border rounded px-3 py-2"
      />
      <input
        placeholder="YY"
        value={value.year || ""}
        onChange={(e) => handleChange("year", e.target.value)}
        className="border rounded px-3 py-2"
      />
      <input
        placeholder="CVV"
        value={value.cvv || ""}
        onChange={(e) => handleChange("cvv", e.target.value)}
        className="border rounded px-3 py-2"
      />
    </div>
  );
}
  // import React, { useMemo } from "react";
  // import InputMask from "react-input-mask"; 

  // export default function Card({ value = {}, onChange = () => {} }) {
  //   const safeValue = {
  //     cardNumber: value?.cardNumber ?? "",
  //     cardHolder: value?.cardHolder ?? "",
  //     month: value?.month ?? "",
  //     year: value?.year ?? "",
  //     cvv: value?.cvv ?? ""
  //   };

  //   const handleChange = (field, val) => {
  //     onChange({ ...safeValue, [field]: val });
  //   };

  //   const mask = "9999 9999 9999 9999"; 

  // //  const mask = useMemo(() => {
  // //     const num = (safeValue.cardNumber || "").replace(/\s+/g, "");
  // //     if (/^(34|37)/.test(num)) return "9999 999999 99999";
  // //     return "9999 9999 9999 9999";
  // //   }, [safeValue.cardNumber]);

  //   // If no value yet, don't render the input to prevent crash
  //   //if (!safeValue) return null;

  //   return (
  //     <div className="flex flex-col gap-2">
  //     <InputMask
  //   mask={mask}
  //   maskChar=""
  //   value={safeValue.cardNumber || ""} // always a string
  //   onChange={(e) => handleChange("cardNumber", e.target.value)}
  // >
  //   {(inputProps) => ( 
  //     <input
  //       {...inputProps}
  //       placeholder="Card Number"
  //       className="border rounded px-3 py-2"
  //     />
  //   )}
  // </InputMask>

  //       <input
  //         placeholder="Card Holder"
  //         value={safeValue.cardHolder}
  //         onChange={(e) => handleChange("cardHolder", e.target.value)}
  //         className="border rounded px-3 py-2"
  //       />

  //       <input
  //         placeholder="MM"
  //         value={safeValue.month}
  //         onChange={(e) => handleChange("month", e.target.value)}
  //         className="border rounded px-3 py-2"
  //       />

  //       <input
  //         placeholder="YY"
  //         value={safeValue.year}
  //         onChange={(e) => handleChange("year", e.target.value)}
  //         className="border rounded px-3 py-2"
  //       />

  //       <input
  //         placeholder="CVV"
  //         value={safeValue.cvv}
  //         onChange={(e) => handleChange("cvv", e.target.value)}
  //         className="border rounded px-3 py-2"
  //       />
  //     </div>
  //   );
  // }

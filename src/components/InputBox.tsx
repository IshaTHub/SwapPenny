import React, { useId } from "react";

interface InputBoxProps {
  label: string;
  amount: number;
  onAmountChange?: (value: number) => void;
  onCurrencyChange?: (value: string) => void;
  currencyOption?: string[];
  selectCurrency?: string;
  amountDisabled?: boolean;
  currencyDisabled?: boolean;
  className?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  const amountInputId = useId(); //for generating unique IDs that can be passed to accessibility attributes

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId} //for generating unique IDs that can be passed to accessibility attributes
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } // checker to check if onAmountChange has a value or not
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOption.map((currency) => (
            // Key is mandatory when rendering lists in JSX to avoid reconciliation issues
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;

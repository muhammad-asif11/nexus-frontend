"use client";

type Props = {
  quantity: number;
  setQuantity: (q: number) => void;
};

const QuantitySelector: React.FC<Props> = ({ quantity, setQuantity }) => {
  return (
    <div className="flex items-center border rounded">
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="px-3 py-1"
      >
        -
      </button>
      <span className="px-4">{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="px-3 py-1"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
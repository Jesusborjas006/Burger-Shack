type PromoCodeInputProps = {
  setPromoCodeInput: React.Dispatch<React.SetStateAction<string>>;
};

const PromoCodeInput = ({ setPromoCodeInput }: PromoCodeInputProps) => {
  return (
    <div>
      <label>Have a promo code?</label>
      <input
        className="border-b w-full outline-none py-2"
        type="text"
        placeholder="Promo code"
        onChange={(e) => setPromoCodeInput(e.target.value)}
      />
    </div>
  );
};

export default PromoCodeInput;

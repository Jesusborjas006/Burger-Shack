type SubmitOrderBtnProps = {
  form: {
    firstName: string;
    lastName: string;
  };
  handleFormSubmit: (e: { preventDefault: () => void }) => void;
};

const SubmitOrderBtn = ({ form, handleFormSubmit }: SubmitOrderBtnProps) => {
  return (
    <button
      className={`text-white w-full rounded-full py-3 font-semibold ${
        !form.firstName || !form.lastName
          ? "cursor-not-allowed bg-orange-200"
          : "bg-orange-500"
      } `}
      onClick={handleFormSubmit}
      disabled={!form.firstName || !form.lastName}
    >
      Submit Order
    </button>
  );
};

export default SubmitOrderBtn;

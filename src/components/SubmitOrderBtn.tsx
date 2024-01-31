type SubmitOrderBtnProps = {
  form: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
  handleFormSubmit: (e: { preventDefault: () => void }) => void;
};

const SubmitOrderBtn = ({ form, handleFormSubmit }: SubmitOrderBtnProps) => {
  return (
    <button
      className={`text-white w-full rounded-full py-3 font-semibold ${
        !form.email || !form.firstName || !form.lastName || !form.phoneNumber
          ? "cursor-not-allowed bg-orange-200"
          : "bg-orange-500"
      } `}
      onClick={handleFormSubmit}
      disabled={
        !form.email || !form.firstName || !form.lastName || !form.phoneNumber
      }
    >
      Submit Order
    </button>
  );
};

export default SubmitOrderBtn;

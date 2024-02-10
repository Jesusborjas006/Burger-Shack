type ContactInfoInputsProp = {
  handleFormChange: (e: {
    target: {
      name: string;
      value: string;
    };
  }) => void;
};

const ContactInfoInputs = ({ handleFormChange }: ContactInfoInputsProp) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0">
        <div>
          <label>First Name</label>
          <br />
          <input
            className="border-b outline-none w-full"
            type="text"
            name="firstName"
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <br />
          <input
            className="border-b outline-none w-full"
            type="text"
            name="lastName"
            onChange={handleFormChange}
          />
        </div>
      </div>
    </>
  );
};

export default ContactInfoInputs;

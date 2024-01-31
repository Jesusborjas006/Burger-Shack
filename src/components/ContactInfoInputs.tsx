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
      <div>
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          className="border-b w-full outline-none"
          type="email"
          id="email"
          name="email"
          onChange={handleFormChange}
          required
        />
      </div>
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
      <div>
        <label>Phone Number</label>
        <br />
        <input
          className="border-b w-full outline-none"
          type="tel"
          name="phoneNumber"
          onChange={handleFormChange}
        />
      </div>
    </>
  );
};

export default ContactInfoInputs;

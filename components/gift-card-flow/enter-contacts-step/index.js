import { useState, useEffect } from "react";

import Step from "../step";

const EnterContactsStep = ({ title, setContacts }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setContacts({
      name,
      phone,
      email
    });
  }, [name, phone, email]);

  return (
    <Step title={title}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
    </Step>
  );
};

export default EnterContactsStep;

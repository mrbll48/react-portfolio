import React from "react";

const MailToBtn = ({ mailto, label }) => {
  return (
    <a
      href={`mailto:william.marks87@gmail.com`}
      className="text-white font-weight-bold"
    >
      {label}
    </a>
  );
};

export default MailToBtn;

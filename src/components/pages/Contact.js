import MailToBtn from "../EmailBtn";

export default function Contact() {
  return (
    <div className="p-3 text-white">
      <form className="p-3">
        <p>Send me a message!</p>
        <input />
      </form>
      <div className="p-3 text-decoration-none text-white">
        {
          <MailToBtn
            label="Send me an email!"
            mailto="william.marks87@gmail.com"
          />
        }
      </div>
    </div>
  );
}

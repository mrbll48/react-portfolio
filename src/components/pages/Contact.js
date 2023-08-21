import MailToBtn from "../EmailBtn";

export default function Contact() {
  return (
    <div className="p-3 bg-secondary text-white vh-100">
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

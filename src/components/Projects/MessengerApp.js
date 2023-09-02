import messenger from "../../images/messengerapp.jpg";

export function MessengerApp() {
  return (
    <div className="project card">
      <a
        href="https://neko-messaging-app-54bfff7a1f1b.herokuapp.com/#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={messenger} className="card-img-top" alt="messenger-app" />
      </a>
      <div className="card-body">
        <h3 className="card-title">Messenger App</h3>
        <p className="card-text">AIM clone</p>
      </div>
    </div>
  );
}

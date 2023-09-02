import waistwatchers from "../../images/waistwatchers.jpg";

export function WaistWatchers() {
  return (
    <div className="project card">
      <a
        href="https://mrbll48.github.io/waist-watchers/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={waistwatchers}
          className="card-img-top"
          alt="waist-watchers app"
        />
      </a>
      <div className="card-body">
        <h3 className="card-title">Waist Watchers</h3>
        <p className="card-text">Workout app</p>
      </div>
    </div>
  );
}

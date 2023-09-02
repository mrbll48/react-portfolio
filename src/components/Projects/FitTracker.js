import fit from "../../images/fit-tracker.png";

export function FitTracker() {
  return (
    <div className="project card">
      <a
        href="https://desolate-eyrie-82722-36505de48b12.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fit} className="card-img-top" alt="fit tracker" />
      </a>
      <div className="card-body">
        <h3 className="card-title">Fit Track</h3>
        <p className="card-text">Workout Social Media</p>
      </div>
    </div>
  );
}

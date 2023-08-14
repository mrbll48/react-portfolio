export default function Project({
  data: { title, description, github, deployedLink, image },
}) {
  return (
    <div className="project card">
      <a href={deployedLink} target="_blank">
        <img src={image} className="card-img-top" />
      </a>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

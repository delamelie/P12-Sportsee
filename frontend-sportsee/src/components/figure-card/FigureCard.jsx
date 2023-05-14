export default function FigureCard({ icon, figure, title }) {
  return (
    <div className="figures-overview__card">
      <img src={icon} alt="" className="icon" />
      <div className="figures-overview__card__description">
        <span className="figures-overview__card__description__figure">
          {figure}
        </span>
        <span className="figures-overview__card__description__title">
          {title}
        </span>
      </div>
    </div>
  );
}

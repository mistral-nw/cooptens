type CardProps = {
  titre: string;
  description: string;
  img: string;
};
export default function Card({ titre, description, img }: CardProps) {
  return (
    // <div className="hero ">
    // <div className="hero-content flex-col lg:flex-row">
    <div className="max-w-xl p-7">
      <img src={img} className="rounded-lg shadow-2xl w-96 h-80 object-cover" />
      <div>
        <h3 className="text-4xl font-semibold">{titre}</h3>
        <p className="py-6">{description}</p>
        <button className="btn btn-primary">En savoir plus</button>
      </div>
    </div>
    // </div>
    // </div>
  );
}

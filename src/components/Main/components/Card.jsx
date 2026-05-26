import ImagePopup from "../components/ImagePopup";

function Card(props) {
  const { name, link, isLiked } = props.card;
  const imageComponent = {
    title: "",
    children: <ImagePopup card={props.card} />,
  };
  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt=""
        onClick={() => props.onImageClick(imageComponent)}
      />
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          className="card__like-button"
          type="button"
        ></button>
      </div>
    </li>
  );
}

export default Card;

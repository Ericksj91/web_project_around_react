export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup">
      <div
        className={`popup__content ${!title ? "popup__content_type_image" : ""}`}
      >
        <button
          aria-label="Cerrar ventana emergente"
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}

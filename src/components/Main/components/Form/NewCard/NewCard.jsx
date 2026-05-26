function NewCard() {
  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          name="name"
          id="card_name"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          type="text"
          required
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          name="link"
          id="card-link"
          placeholder="Enlace a la imagen"
          type="url"
          required
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}

export default NewCard;

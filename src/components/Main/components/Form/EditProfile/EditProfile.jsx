function EditProfile() {
  return (
    <form
      className="popup__form"
      name="edit-profile-form"
      id="edit-profile-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          name="name"
          id="edit-profile-name"
          placeholder="Nombre"
          type="text"
          required
          minLength="2"
          maxLength="40"
        />
        <span
          className="popup__input-error"
          id="edit-profile-name-error"
        ></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          id="edit-profile-description"
          name="description"
          placeholder="Acerca de mí"
          type="text"
          minLength="2"
          maxLength="200"
          required
        />
        <span
          className="popup__input-error"
          id="edit-profile-description-error"
        ></span>
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default EditProfile;

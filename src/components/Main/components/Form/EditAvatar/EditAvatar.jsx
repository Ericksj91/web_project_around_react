function EditAvatar() {
  return (
    <form
      className="popup__form"
      name="edit-avatar-form"
      id="edit-avatar-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          name="link"
          id="avatar-link"
          placeholder="Enlace a la imagen"
          type="url"
          required
        />
        <span className="popup__input-error" id="avatar-link-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default EditAvatar;

function DetailPwdManager() {
  return (
    <>
      {/* intro */}
      <p className="modal-text">
        This project aims to build a password manager app which can securely
        store encrypted usernames and passwords. This app also allows users to
        share passwords to other users that they want to share with.
      </p>

      {/* learned */}
      <h5 className="font-medium">What I have learned</h5>
      <ul className="modal-text list-inside list-disc">
        <li>
          Create a many-to-many data model through join table to enable the
          password sharing feature.
        </li>
        <li>
          Utilize Active Record Encryption to encrypt specified db fields.
        </li>
        <li>Add front-end interactive features using Stimulus.js. </li>
      </ul>

      {/* next step */}
      <h5 className="font-medium">Next Step</h5>
      <ul className="modal-text list-inside list-disc">
        <li>Improve the front-end look.</li>
        <li>Add a feature to toggle password display.</li>
      </ul>
    </>
  );
}

export default DetailPwdManager;

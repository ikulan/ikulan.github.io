function DetailWebsite() {
  return (
    <>
      {/* intro */}
      <p className="modal-text">
        I crafted this personal website using React, Tailwind CSS, and Flowbite
        component library.
      </p>

      {/* learned */}
      <h5 className="font-medium">What I have learned</h5>
      <p className="modal-text">
        Through this project, I familiarized myself with the syntax and usages
        of Tailwind CSS. I also practice to apply responsive web design
        principles.
      </p>
      <p className="modal-text">
        Futhermore, I explored the component libraries for Tailwind CSS and
        React. Component libraries provide pre-built, commonly used UI
        components, enabling faster web development. Combined with the design
        system offered by Tailwind CSS, I can effortlessly build a beautiful
        modern webpage.
      </p>

      {/* next step */}
      <h5 className="font-medium">Next Step</h5>
      <ul className="modal-text list-inside list-disc">
        <li>Add backend content management service.</li>
      </ul>
    </>
  );
}

export default DetailWebsite;

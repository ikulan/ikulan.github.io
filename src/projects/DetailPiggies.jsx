function DetailPiggies() {
  return (
    <>
      {/* intro */}
      <p className="modal-text">
        Three Little Piggies is the first board game my child was able to grasp
        the rules of and play at the age of three. We had a lot of fun with this
        game, so when I wanted to practice my programming skills, it came to
        mind.
      </p>

      {/* learned */}
      <h3 className="font-medium">What I have learned</h3>
      <p className="modal-text">
        After learning TypeScript, a superset of JavaScript that incorporates
        static typing and supports Object-Oriented Programming (OOP), I applied
        and practiced these features by implementing this board game.
      </p>
      <p className="modal-text">
        I did notice that it was hard to manage the object states using Vanilla
        TypeScript. Later, when I learned React, I immediately understood the
        benefits and necessity that React and similar frontend frameworks bring
        to the process of building dynamic and interactive applications.
      </p>

      {/* next step */}
      <h3 className="font-medium">Next Step</h3>
      <ul className="modal-text list-inside list-disc">
        <li>
          Ensure the webpage is responsive and functional on smaller screen
          sizes.
        </li>
        <li>Re-write using React.</li>
      </ul>
    </>
  );
}

export default DetailPiggies;

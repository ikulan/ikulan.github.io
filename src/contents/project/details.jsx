export function DetailWebsite() {
  return (
    <>
      {/* intro */}
      <p className="text-base leading-relaxed text-gray-600">
        I crafted this personal website using React, Tailwind CSS, and Flowbite
        component library.
      </p>

      {/* learned */}
      <h5 className="font-medium">What I have learned</h5>
      <p className="text-base leading-relaxed text-gray-600">
        Through this project, I familiarized myself with the syntax and usages
        of Tailwind CSS. I also practice to apply responsive web design
        principles.
      </p>
      <p className="text-base leading-relaxed text-gray-600">
        Futhermore, I explored the component libraries for Tailwind CSS and
        React. Component libraries provide pre-built, commonly used UI
        components, enabling faster web development. Combined with the design
        system offered by Tailwind CSS, I can effortlessly build a beautiful
        modern webpage.
      </p>

      {/* next step */}
      <h5 className="font-medium">Next Step</h5>
      <ul className="list-inside list-disc leading-relaxed text-gray-600">
        <li>To add dark mode.</li>
        <li>Optimize performance by eliminating unnecessary re-rendering</li>
      </ul>
    </>
  );
}

export function DetailPiggies() {
  return (
    <>
      {/* intro */}
      <p className="text-base leading-relaxed text-gray-600">
        Three Little Piggies is the first board game my child was able to grasp
        the rules of and play at the age of three. We had a lot of fun with this
        game, so when I wanted to practice my programming skills, it came to
        mind.
      </p>

      {/* learned */}
      <h3 className="font-medium">What I have learned</h3>
      <p className="text-base leading-relaxed text-gray-600">
        After learning TypeScript, a superset of JavaScript that incorporates
        static typing and supports Object-Oriented Programming (OOP), I applied
        and practiced these features by implementing this board game.
      </p>
      <p className="text-base leading-relaxed text-gray-600">
        I did notice that it was hard to manage the object states using Vanilla
        TypeScript. Later, when I learned React, I immediately understood the
        benefits and necessity that React and similar frontend frameworks bring
        to the process of building dynamic and interactive applications.
      </p>

      {/* next step */}
      <h3 className="font-medium">Next Step</h3>
      <ul className="list-inside list-disc leading-relaxed text-gray-600">
        <li>
          Ensure the webpage is responsive and functional on smaller screen
          sizes.
        </li>
        <li>Re-write using React.</li>
      </ul>
    </>
  );
}

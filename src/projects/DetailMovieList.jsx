function DetailMovieList() {
  return (
    <>
      {/* intro */}
      <p className="modal-text">
        This app allows users to search movies by name, see the IMDB
        information, assign score and save the movie into personal watched list
        in the local browser. The data is from{" "}
        <a
          href="https://www.omdbapi.com/"
          className="underline hover:text-peach-600"
          target="_blank"
          rel="noreferrer"
        >
          OMDB API
        </a>
        . This is a practice project from the{" "}
        <a
          href="https://www.udemy.com/course/the-ultimate-react-course/"
          className="underline hover:text-peach-600"
          target="_blank"
          rel="noreferrer"
        >
          React course
        </a>{" "}
        I took.
      </p>

      {/* learned */}
      <h5 className="font-medium">What I have learned</h5>
      <ul className="modal-text list-inside list-disc">
        <li>Using useEffect to access data from APIs</li>
        <li>Creating custom hooks to reuse logics and promote clean code</li>
        <li>
          Utilizing browser&apos;s local storage to persist data and improve
          user experience
        </li>
      </ul>
      <p className="modal-text">
        Based on the course content, I explored more topics and completed the
        following items by myself,
      </p>
      <ul className="modal-text list-inside list-disc">
        <li>Refactoring for better readibility</li>
        <li>Storing and accessing API keys as environment variables</li>
        <li>Deployment to the live Internet environment</li>
      </ul>
    </>
  );
}

export default DetailMovieList;

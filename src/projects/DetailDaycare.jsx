function DetailDaycare() {
  return (
    <>
      {/* intro */}
      <p className="modal-text">
        I integrated a map using Mapbox and built a seamless web application
        with React, hosted on AWS. The data source comes from the{" "}
        <a
          href="https://open.canada.ca/data/en/dataset/4cc207cc-ff03-44f8-8c5f-415af5224646"
          className="underline hover:text-peach-600"
          target="_blank"
          rel="noreferrer"
        >
          BC government&apos;s open data set
        </a>
        .
      </p>
      <p className="modal-text">
        This project is still a work in progress, and I am actively improving
        the web application and building the backend pipelines. Learn more on
        the{" "}
        <a
          href="https://github.com/ikulan/BC-Daycares-Info/tree/main?tab=readme-ov-file#development"
          className="underline hover:text-peach-600"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repository
        </a>
        .
      </p>

      {/* next step */}
      <h5 className="font-medium">Next Step</h5>
      <ul className="modal-text list-inside list-disc">
        <li>Complete front-end features.</li>
        <li>Add a backend service.</li>
        <li>Automate deployment and data updates.</li>
      </ul>
    </>
  );
}

export default DetailDaycare;

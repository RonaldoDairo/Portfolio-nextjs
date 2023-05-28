import React from "react";
import { experiences } from "../profile";
import Link from "next/link";

const Experience = () => {
  return (
    <>
      {experiences.map(({ title, description, from, to }) => {
        return (
          <ul>
            <li>
              <h3>{title}</h3>
              <h5>
                {from}-{to}
              </h5>
              <p>{description}</p>
            </li>
          </ul>
        );
      })}
      <Link href="/experiences" className="btn btn-light ">
        Know more
      </Link>
    </>
  );
};

export default Experience;

{
  /* <ul>
<li>
  <h3>Google LLC</h3>
  <h5>2000-2007</h5>
  <p>
    A custom Document can update the and tags used to render a Page. This
    file is only rendered on the server, so event handlers like onClick
    cannot be used in _document.
  </p>
</li>
</ul> */
}

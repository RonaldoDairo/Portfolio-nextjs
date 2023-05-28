import Link from "next/link";
import { projects } from "../profile";

const Portfolio = () => {
  return (
    <>
      {projects.map(({ name, description, image }, i) => {
        return (
          <div className="col-md-4 p-2">
            <div className="card h-100">
              <div className="overflow">
                <img
                  src={`${image}`}
                  alt="portfolio"
                  className="card-img-top"
                ></img>
              </div>

              <div className="card-body">
                <h3>{name}</h3>
                <p>{description}</p>
                <Link href="/something">Know more</Link>
              </div>
            </div>
          </div>
        );
      })}

      <div className="text-center mt-4">
        <Link href="/portfolio" className="btn btn-outline-light">
          More Projects
        </Link>
      </div>
    </>
  );
};

export default Portfolio;

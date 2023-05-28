import { skills } from "../profile";

const Skills = () => {
  return (
    <>
      {skills.map(({ skill, percentage }, i) => {
        return (
          <div className="py-3" key={i}>
            <h5>{skill}</h5>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${percentage}%` }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Skills;

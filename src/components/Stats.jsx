import { stats } from "../data";

function Stats() {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div className="stats__box" key={index}>
            <h3 className="stats__no">{no}</h3>
            <p className="stats__title">{title}</p>
          </div>
        );
      })}
    </>
  );
}

export default Stats;

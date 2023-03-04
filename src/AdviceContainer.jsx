const AdviceContainer = ({ adviceData, advice, notFound }) => {
  if (advice && adviceData) {
    return <p className="advice-advice">{advice.advice}</p>;
  }
  if (adviceData && adviceData.length > 0) {
    return (
      <ul className="searched-advice">
        {adviceData.map((adv) => (
          <li key={adv.id}>
            <span className="advice-id">Advice {adv.id}: </span>
            <span className="advise">{adv.advice} </span>
          </li>
        ))}
      </ul>
    );
  } else {
    return <span style={{ color: "red" }}>{notFound}</span>;
  }
};

export default AdviceContainer;

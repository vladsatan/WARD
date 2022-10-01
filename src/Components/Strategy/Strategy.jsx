import "../Strategy/Strategy.scss";

const Strategy = () => {
  const dataArray = [
    {
      header: "Business Essential ",
      text1: "Designed for businesses with basic IT requirements ",
      header2: "What’s included?",
      text2: [
        "24/7 Systems Monitoring ",
        "Security Management",
        "Patch Management",
        "Computer Backups",
        "Email Support",
      ],
      button: "Get your Essential now",
      way: 1,
    },
    {
      header: "Business Essential ",
      text1: "Designed for businesses with basic IT requirements ",
      header2: "What’s included?",
      text2: [
        "24/7 Systems Monitoring ",
        "Security Management",
        "Patch Management",
        "Computer Backups",
        "Email Support",
      ],
      button: "Get your Essential now",
      way: 2,
    },
    {
      header: "Business Essential ",
      text1: "Designed for businesses with basic IT requirements ",
      header2: "What’s included?",
      text2: [
        "24/7 Systems Monitoring ",
        "Security Management",
        "Patch Management",
        "Computer Backups",
        "Email Support",
      ],
      button: "Get your Essential now",
      way: 3,
    },
  ];
  return (
    <div className="Startegy-container">
      <h2 className="Strategy_header">
        Flexible <span className="Strategy-red">Strategy</span> For Everyone
      </h2>
      <div className="Strategy-items-container">
        {dataArray.map((el) => (
          <div className="Strategy-item">
            <div className="Strategy-block">
              <h5 className="Startegy-head1">{el.header}</h5>
              <p className="Startegy-text1">{el.text1}</p>
              <h5 className="Startegy-head2">{el.header2}</h5>
              <div className="Startegy-way1">
                <div className="Strategy-left"></div>
              </div>
              <ul className="Startegy-text2">
                {el.text2.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            <button className="Strategy-button">{el.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategy;

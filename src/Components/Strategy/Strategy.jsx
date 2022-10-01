import "../Strategy/Strategy.scss";
import arroy1 from "../../Logo/arroy.svg"
import arroy2 from "../../Logo/arroy2.svg"
import arroy3 from "../../Logo/arroy3.svg"

const Strategy = () => {
  
  return (
    <div className="Startegy-container">
      <h2 className="Strategy_header">
        Flexible <span className="Strategy-red">Strategy</span> For Everyone
      </h2>
      <div className="Strategy-items-container">

          <div className="Strategy-item">
            <div className="Strategy-block">
              <h5 className="Startegy-head1">Business Essential</h5>
              <p className="Startegy-text1">Designed for businesses with basic IT requirements</p>
              <h5 className="Startegy-head2">What’s included?</h5>
              <img className="arroy" src={arroy1} alt='arroy' />
              <ul className="Startegy-text2">
               <li>24/7 Systems Monitoring</li>
               <li>Security Management</li>
               <li>Patch Management</li>
               <li>Computer Backups</li>
               <li>Email Support</li>
              </ul>
            </div>
            <button className="Strategy-button">Get your Essential now</button>
          </div>

          <div className="Strategy-item">
            <div className="Strategy-block">
              <h5 className="Startegy-head1">Business Premium</h5>
              <p className="Startegy-text12">Designed for businesses looking to eliminate costly break/fix IT services.</p>
              <h5 className="Startegy-head2">All Business Essential, plus:</h5>
              <img className="arroy" src={arroy2} alt='arroy' />
              <ul className="Startegy-text2">
               <li>Preventive Maintenance</li>
               <li>Asset Management</li>
               <li>Secure Cloud Backup</li>
               <li>Workstation Support</li>
               <li>Server/Network Support</li>
               <li>Onsite/Phone Support</li>
              </ul>
            </div>
            <button className="Strategy-button">Get your Premium now</button>
          </div>

          <div className="Strategy-item">
            <div className="Strategy-block">
              <h5 className="Startegy-head1">Business Pro</h5>
              <p className="Startegy-text13">A fully comprehensive plan for any business size or needs.</p>
              <h5 className="Startegy-head2">All Business Essential and Premium, plus:</h5>
              <img className="arroy" src={arroy3} alt='arroy' />
              <ul className="Startegy-text2">
               <li>Reporting</li>
               <li>Vendor Management</li>
               <li>Virtual CIO (vCIO)</li>
               <li>Desktop Equipment Lease</li>
               <li>Network Equipment Lease</li>
             </ul>
            </div>
            <button className="Strategy-button">Get your Pro now</button>
          </div>
      </div>
    </div>
  );
};

export default Strategy;

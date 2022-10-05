import redux from "../../photos/redux-logo 2.png";
import nodeLogo from "../../photos/node-logo-png-6 1.png";
import sassLogo from "../../photos/OIP 1.png";
import jsLogo from "../../photos/javascript-300x300 1.png";
import phpLogo from "../../photos/R (2) 1.png";
import reactLogo from "../../photos/da1c1ba16e52114d1a59e9ad666a4ae6 2.png";
import "../TechStack/TechStack.scss";

const TechStack = () => {

  const photoArray = [
    { icon: redux, href: 'https://redux.js.org/'},
    { icon: nodeLogo, href: 'https://nodejs.org/en/'},
    { icon: sassLogo, href: 'https://sass-lang.com/'},
    { icon: jsLogo, href: 'https://learn.javascript.ru/'},
    { icon: phpLogo, href: 'https://www.php.net/manual/ru/intro-whatis.php'},
    { icon: reactLogo, href: 'https://reactjs.org/'},
]

  return (
    <div className="Tech-container" id="techStack">
      <h2 className="Image-header">
        Tech <span className="Image-blue">Stack</span>
      </h2>
      <div className="Technologies">
        {photoArray.map((el) => (
          <div className="Tech-item">
            <a target={'_blank'} href={el.href}><img className="Tech-logo" src={el.icon} alt="logo"></img></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

import "../ImageSection/ImageSection.scss";
import chill from "../../photos/chilllll.jpg";

const ImageSection = ({headerStart,headerEnd,paragraf,image,color}) => {
  return (
    <div className="Image-box" id="aboutUs">
       <div className="Image-container">
         <h2 className="Image-header">
           {headerStart}<span className="Image-blue">{headerEnd}</span>
         </h2>
         <p className="Image-paragraf">
           {paragraf}
         </p>
       </div>
       <div className="Image-right">
       <div className="Image-circle">
         <img src={image} className="Section_chill" />
       </div>
       <div style={{ backgroundColor: `${color}` }} className="Circle-back"></div>
       <div className="Image-circle_back">
         <img src={image} className="Section_transp" />
      </div>
       </div>
    </div>
  );
};

export default ImageSection;

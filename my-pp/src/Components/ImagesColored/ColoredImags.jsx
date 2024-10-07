import React from "react";
import imdg1 from "../../Assets/Bild.webp"
const ColoredImags = () => {
  const imgs = [
    {
      img: imdg1,
    },
  ];
  return (
    <>
      <div className="container">
        <h2>Bekannt aus</h2>
        <div className="">
            {
                imgs.map((img) =>{
                    return(
                        <img src={img.img} alt="" />
                    )
                })
            }
        </div>
      </div>
      <ColoredImags/>
    </>
  );
};

export default ColoredImags;

import { useEffect } from "react";
import SingleImage from "./SingleImage";

const Images = ({ numberOfImages, direction, handleMovement, movement, imagesArr, start }) => {

  const imgIndex = (x, len) => {
    return x < 0 ? len - 1 : x % len
  }

  useEffect(() => {
    let id;
    
    if (movement === "automatic") {
      if(direction == 'back' ){
        id = setInterval(() => {
        handleMovement(-1);
      }, 1000);
      }
      else{
        id = setInterval(() => {
        handleMovement(1);
      }, 1000);
      }
    }

    function handleExit() {
      clearInterval(id);
    }

    return () => handleExit()
  }, [movement]);
  return (
    <div className="images">
      {imagesArr?.map((_, index) =>
        index == start ? (
        <>
        <SingleImage index={(index) % imagesArr.length} source={imagesArr[imgIndex(index, imagesArr.length)]} />
        </>
        ) : null 
      )}
    </div>
  );
};

export default Images;

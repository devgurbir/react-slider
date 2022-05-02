import Images from "./Images";
import { useState } from "react";

const Slideshow = () => {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1651401351297-8df85d9d5891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1651425549622-7db04899f870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1651438449770-244318535424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1651431936616-b9dd60d16eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1638913658211-c999de7fe786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex)


  const handleMovement = (x) => {
    // let newIndex = (activeIndex + x) % images.length;
    // newIndex = newIndex < 0 ? images.length + newIndex : newIndex;
    setActiveIndex(oldIndex => (oldIndex+x) % 4 < 0 ? (oldIndex+x)%4 + images.length : (oldIndex+x)%4 );
  };
  return (
    <div>
      <button className="moveBtns left" onClick={() => handleMovement(-1)}>Prev</button>
      <button className="moveBtns right" onClick={() => handleMovement(1)}>Next</button>
      <Images
        handleMovement={handleMovement}
        movement="manual"
        imagesArr={images}
        start={activeIndex}
        direction="back"
      />
      
    </div>
  );
};

export default Slideshow;

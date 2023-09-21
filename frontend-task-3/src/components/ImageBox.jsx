import Image from "next/image";
import placehold from "../assets/placeholder.png";
import { useEffect, useRef } from "react";

import { useDrag, useDrop } from "react-dnd";
const type = "Image";

const ImageBox = ({ data, index, moveImage }) => {
  const mappedTag = data.tags.map((tag) => {
    return tag;
  });
  const ref = useRef(null);

  const [, drop] = useDrop({
    // accept receives a definition of what must be the type of the dragged item to be droppable
    accept: type,
    // This method is called when we hover over an element while dragging
    hover(item) {
      // item is the dragged element
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      // current element where the dragged element is hovered on
      const hoverIndex = index;
      // If the dragged element is hovered in the same place, then do nothing
      if (dragIndex === hoverIndex) {
        return;
      }
      // If it is dragged around other elements, then move the image and set the state with position changes
      moveImage(dragIndex, hoverIndex);
      /*
        Update the index for dragged item directly to avoid flickering
        when the image was half dragged into the next
      */
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag(() => ({
    // what type of item this to determine if a drop target accepts it
    type: type,
    // data of the item to be available to the drop methods
    item: { id: data?.id, index },
    // method to collect additional data for drop handling like whether is currently being dragged
    // options: {
    //   // Set the delayTouchStart option to 500 milliseconds (adjust as needed)
    //   delayTouchStart: 2000,
    // },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  // const handleTouchStart = (e) => {
  //   if (!isDragging) {
  //     // If not currently dragging, allow drag to start
  //     drag()
  //   }
  // };

  // useEffect(() => {
  //   const element = ref.current;

  //   if (element) {
  //     element.addEventListener('touchstart', handleTouchStart);
  //     return () => {
  //       element.removeEventListener('touchstart', handleTouchStart);
  //     };
  //   }
  // }, [ref, handleTouchStart]);

  drag(drop(ref));
  return (
    <div ref={ref} style={{ opacity: isDragging ? 0 : 1, cursor: isDragging ? 'grabbing' : 'grab', }} className="relative">
      <Image
        src={data ? data?.imgUrl : placehold}
        alt={data?.alt}
        placeholder="blur"
        className="h-48 w-full rounded object-cover"
      />
      <div className="absolute top-2 right-2 flex gap-2">
        {data.tags.map((tag) => (
          <p className="text-white font-medium font-mono bg-slate-800 rounded py-1 px-2" key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default ImageBox;

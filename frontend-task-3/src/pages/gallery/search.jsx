import Header from "@/components/Header";
import { useSearchContext } from "@/lib/seachStore";
import { imageData } from "@/lib/imageData";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import { TouchBackend } from "react-dnd-touch-backend";
import ImageBox from "@/components/ImageBox";
import Link from "next/link";

const Search = () => {
  const { searchData, setSearchData } = useSearchContext();
  const [data, setData] = useState([...imageData]);
  const [displayData, setDisplayData] = useState([]);
  const [touchDevice, setTouchDevice] = useState(false);

  console.log(displayData);
  useEffect(() => {
    const stuff = () => {
      const filteredImages = data.filter((data) =>
        data.tags.some((tag) =>
          tag.toLowerCase().includes(searchData.toLowerCase())
        )
      );
      setDisplayData(filteredImages);
    };
    stuff();
  }, []);

  useEffect(() => {
    if ("ontouchstart" in window) {
      setTouchDevice(true);
    }
  }, []);

  const moveImage = (dragIndex, hoverIndex) => {
    const draggedImage = displayData[dragIndex];

    setDisplayData(
      update(displayData, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedImage],
        ],
      })
    );
  };
  return (
    <main className="min-h-screen bg-gray-100">
      <main className="container max-w-6xl mx-auto px-4 md:px-8 pb-8">
        <Header />
        <div className="my-4 flex items-center gap-4">
          <Link href="/gallery" className="cursor-pointer">
            <p className="font-bold text-sm underline text-slate-500 cursor-pointer">
              go back
            </p>
          </Link>
          <p className="text-lg font-medium font-sans">Search Results</p>
        </div>

        {displayData.length < 1 && (
          <>
            <p className="mt-10">Your search did not match any image</p>
            <Link href="/gallery" className="cursor-pointer">
              <p className="text-sm text-slate-500">Return to gallery</p>
            </Link>
          </>
        )}

        {touchDevice && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
            {displayData.slice(0, 19).map((data, index) => (
              <DndProvider backend={TouchBackend} key={index}>
                <ImageBox
                  key={data.id}
                  data={data}
                  index={index}
                  moveImage={moveImage}
                />
              </DndProvider>
            ))}
          </div>
        )}

        {!touchDevice && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
            {displayData.slice(0, 19).map((data, index) => (
              <DndProvider backend={HTML5Backend} key={index}>
                <ImageBox
                  key={data.id}
                  data={data}
                  index={index}
                  moveImage={moveImage}
                />
              </DndProvider>
            ))}
          </div>
        )}
      </main>
    </main>
  );
};

export default Search;

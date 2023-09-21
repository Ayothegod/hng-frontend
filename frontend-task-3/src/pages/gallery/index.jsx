import Button from "@/components/ui/Button";
import { imageData } from "@/lib/imageData";
import Image from "next/image";
import ImageBox from "@/components/ImageBox";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import { TouchBackend } from "react-dnd-touch-backend";
import { useSearchContext } from "@/lib/seachStore";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { Loader2 } from "lucide-react";

const Gallery = () => {
  const router = useRouter();
  const { searchData, setSearchData } = useSearchContext();
  const [search, setSearch] = useState("");
  const [displayData, setDisplayData] = useState([...imageData]);
  const [touchDevice, setTouchDevice] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  // const signout = async () => {
  //   const { error: ErrorData } = await supabaseClient.auth.signOut();
  //   console.log(ErrorData);
  // };
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

  const searchGallery = () => {
    setSearchLoading(true)
    setSearchData(search);
    router.push("/gallery/search");
  };


  return (
    <main className="min-h-screen bg-gray-100">
      <main className="container max-w-6xl mx-auto px-4 md:px-8 pb-8">
        <Header/>

        {/* search*/}
        <div className="flex flex-col gap-2 mt-4 ">
          {/* <div className="space-y-2">
            <p className="text-slate-500 font-medium">Filter by tags</p>

            <div className="flex gap-4 overflow-x-auto">
              <Button>water</Button>
              <Button>wildlife</Button>
              <Button>space</Button>
              <Button>ice</Button>
              <Button>mountain</Button>
              <Button>forest</Button>
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search images by tag"
              className="bg-transparent border border-slate-800 rounded px-4 py-2 md:py-2 md:px-6 w-full sm:w-96 focus:ring"
            />
            <button className="bg-slate-800 text-white font-semibold rounded py-1 px-2 md:py-1 md:px-6 md:text-lg w-full md:w-60 hover:bg-slate-600 flex items-center justify-center" onClick={searchGallery}>
              {searchLoading ? <Loader2/> : "Search Gallery"}
            </button>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {displayData.slice(0, 10).map((data, index) => (
            <DndProvider backend={backendForDND} key={index}>
              <ImageBox
                key={data.id}
                data={data}
                index={index}
                moveImage={moveImage}
              />
            </DndProvider>
          ))}
        </div> */}
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

export default Gallery;

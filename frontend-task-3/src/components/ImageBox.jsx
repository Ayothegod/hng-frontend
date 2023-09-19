import Image from "next/image"
import placehold from "../assets/placeholder.png";


const ImageBox = ({data}) => {
    // console.log(data)
  return (
    <div>
        <Image src={data ? data?.imgUrl : placehold} alt={data?.alt} placeholder="blur" className="h-48 w-full rounded object-cover" />
    </div>
  )
}

export default ImageBox
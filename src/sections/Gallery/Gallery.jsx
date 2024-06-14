import "./Gallery.css";
import { Title } from "../../components/index";
import Data from "../../Data/GalleryData";
import { GalleryCard } from "../../components/index";
import img from "../../assets/icons/diving-camera-9138968-7437357.webp"

const Gallery = () => {
  const infoGallery = Data.map((info) => {
    return <GalleryCard key={info.id} img={info.img} title={info.title}></GalleryCard>;
  });
  return (
    <>
      <Title>Gallery</Title>
      <div className="gallery" id="gallery">
      <img className="camera"src={img} alt="" />
        <div className="image">{infoGallery}</div>
      </div>
    </>
  );
};
export default Gallery;

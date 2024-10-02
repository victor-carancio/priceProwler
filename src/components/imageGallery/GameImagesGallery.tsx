import ImagesGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";
import { device } from "../../styles/media";

//ejmplo
// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//     fullscreen: "https://picsum.photos/id/1018/1000/600/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//     fullscreen: "https://picsum.photos/id/1018/1000/600/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//     fullscreen: "https://picsum.photos/id/1018/1000/600/",
//   },
//   {
//     original: "https://www.youtube.com/embed/5FrhtahQiRc",
//     thumbnail: "https://img.youtube.com/vi/5FrhtahQiRc/0.jpg",
//     fullscreen: "https://www.youtube.com/embed/5FrhtahQiRc",
//   },
// ];

interface GameImagesGalleryProps {
  images: { original: string; thumbnail: string }[];
}
const GameImagesGallery = ({ images }: GameImagesGalleryProps) => {
  const renderItem = (item: ReactImageGalleryItem) => {
    if (item.original.includes("youtube.com")) {
      return (
        <StyledIframe
          className="image-gallery-image"
          src={item.original}
          height="100%"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></StyledIframe>
      );
    }

    return <img className="image-gallery-image" src={item.original} />;
  };

  return (
    <StyledGalleryWrapper>
      <ImagesGallery
        items={images}
        renderItem={renderItem}
        autoPlay={false}
        showNav={false}
        showPlayButton={false}
      />
    </StyledGalleryWrapper>
  );
};

const StyledGalleryWrapper = styled.div`
  .image-gallery-content .image-gallery-slide .image-gallery-image {
    object-fit: contain;
    max-width: 600px;
    max-height: 309px;
    overflow: hidden;
    object-position: center center;
  }
  & .fullscreen .image-gallery-slide .image-gallery-image {
    max-height: 90vh;
    max-width: 1440px;
    height: 100vh;
  }
  .image-gallery-content .image-gallery-thumbnail-image {
    max-height: 51.83px;
    object-fit: contain;
  }
`;

const StyledIframe = styled.iframe`
  min-height: 270px;

  @media ${device.laptop} {
    min-height: 300px;
  }
`;

export default GameImagesGallery;

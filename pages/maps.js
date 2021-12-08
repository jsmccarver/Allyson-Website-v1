import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

function maps() {
  const images = [
    {
      original: "./Layouts/afreema5_A2_SchenckForestJPEG.jpg",
      thumbnail: "./Layouts/afreema5_A2_SchenckForestJPEG-thumb.jpg",
    },
    {
      original: "./Layouts/afreema5_A3_NCSUCampusFeatures-1.png",
      thumbnail: "./Layouts/afreema5_A3_NCSUCampusFeatures-1.png",
    },
    {
      original: "./Layouts/afreema5_A4_SchenckForest-1.png",
      thumbnail: "./Layouts/afreema5_A4_SchenckForest-1.png",
    },
    {
      original: "./Layouts/afreema5_A5_CellphoneTowers-1.png",
      thumbnail: "./Layouts/afreema5_A5_CellphoneTowers-1.png",
    },
    {
      original: "./Layouts/afreema5_A6_WakeCoStudyAreaLayout-1.png",
      thumbnail: "./Layouts/afreema5_A6_WakeCoStudyAreaLayout-1.png",
    },
  ];
  return (
    <div className={"design"}>
      <div className={"map"}>
        <iframe
          width="100%"
          height="600px"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="//ncsu.maps.arcgis.com/apps/Embed/index.html?webmap=7f97f60ea1c54d21b5fd241adff0cef8&extent=-164.6995,24.6946,-34.8851,70.7607&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&details=true&legend=true&active_panel=details&basemap_gallery=true&disable_scroll=false&theme=light"
        ></iframe>
      </div>
      <div className={"gallery"}>
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default maps;

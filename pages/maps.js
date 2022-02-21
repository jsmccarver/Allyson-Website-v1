import "react-image-gallery/styles/css/image-gallery.css";
import { useRef, useEffect } from "react";
import ImageGallery from "react-image-gallery";
function maps() {
  const container = useRef();

  useEffect(() => {
    const frm = document.createElement("iframe");
    frm.src =
      "//ncsu.maps.arcgis.com/apps/Embed/index.html?webmap=7f97f60ea1c54d21b5fd241adff0cef8&extent=-164.6995,24.6946,-34.8851,70.7607&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&details=true&legend=true&active_panel=details&basemap_gallery=true&disable_scroll=false&theme=light";
    frm.height = "93vh";
    frm.width = "100%";
    frm.frameBorder = "0";
    frm.scrolling = "no";
    container.current.appendChild(frm);
  }, []);
  return (
    <div className={"map"}>
      <div>
        <ul>
          <li onClick={() => {}}>UFOs</li>
          <li>Cryptid Sightings</li>
        </ul>
      </div>
      <div ref={container} />
    </div>
  );
}

export default maps;

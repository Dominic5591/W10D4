import { useParams } from 'react-router-dom';

const GalleryView = () => {
  const { galleryId } = useParams();

  return (
    <div>
      <h1>Hello from GalleryView</h1>
      <p>Gallery ID: {galleryId}</p>
    </div>
  );
};

export default GalleryView;
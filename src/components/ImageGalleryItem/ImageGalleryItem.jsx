import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images }) => {
  return images.map(({ id, webformatURL }) => (
    <GalleryItem key={id}>
      <GalleryImage src={webformatURL} alt={{ id }} />
    </GalleryItem>
  ));
};

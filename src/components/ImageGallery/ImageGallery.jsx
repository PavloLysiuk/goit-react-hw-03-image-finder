import {GalleryList} from './ImageGallery.styled'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      <ImageGalleryItem images={images} />
    </GalleryList>
  );
};

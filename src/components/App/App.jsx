import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';

export const App = () => {
  return (
    <div>
      <Searchbar />
      <ImageGallery />
      <Loader />
      <Modal />
      <Button />
    </div>
  );
};

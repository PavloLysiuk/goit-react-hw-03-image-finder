import { ModalReact, Image } from './Modal.styled';

export const Modal = ({ picture, onClose, isOpen }) => {
  const { largeImageURL, tags } = picture;
  const customStyles = {
    overlay: {
      zIndex: '1200',
    },
  };
  return (
    <ModalReact
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      preventScroll={true}
    >
      <Image src={largeImageURL} alt={tags} />
    </ModalReact>
  );
};

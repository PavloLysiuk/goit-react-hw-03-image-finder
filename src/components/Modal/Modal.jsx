// import { ModalReact, Image } from './Modal.styled';
import ReactModal from 'react-modal';

export const Modal = ({ picture, onClose, isOpen }) => {
  const { largeImageURL, tags } = picture;
  const styles = {
    overlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '2',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 'calc(100vw - 48px)',
      maxHeight: 'calc(100vh - 48px)',
      border: 'none',
      borderRadius: '16px',
      position: 'revert',
      overflow: 'hidden',
    },
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={styles}
      preventScroll={true}
    >
      <img src={largeImageURL} alt={tags} />
    </ReactModal>
  );
};

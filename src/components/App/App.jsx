import { GlobalStyle } from 'GlobalStyles';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Modal />
        <Button />
        <GlobalStyle />
      </div>
    );
  }
}

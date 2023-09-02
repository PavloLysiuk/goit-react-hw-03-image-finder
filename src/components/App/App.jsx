import { Component } from 'react';
import { fetchImages } from 'api/api';
import { GlobalStyle } from 'GlobalStyles';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoader: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      query: e.target.elements.searchQuery.value,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate = (_, prevState) => {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      //http request
    }
  };

  // window.scrollBy({ top: 400, behavior: "smooth",});

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.images.length > 0 && <ImageGallery />}
        {this.state.images && !this.state.isLoader && (
          <Button handleLoadMore={this.handleLoadMore} />
        )}
        {this.state.isLoader && <Loader />}
        <Modal />
        <GlobalStyle />
      </div>
    );
  }
}

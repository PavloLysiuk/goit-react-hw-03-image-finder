import { Component } from 'react';
import { fetchImages } from 'api/api';
import { GlobalStyle } from 'GlobalStyles';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoader: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements.searchQuery.value === '') {
      toast.error('Please enter a valid query', {
        duration: 3000,
      });
      return;
    }
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

    this.setState({ isLoader: true });

    setTimeout(() => {
      window.scrollBy({ top: 800, behavior: 'smooth' });
    }, 1000);
  };

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        const data = await fetchImages(query, page);
        this.setState({ isLoader: true });

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          // page: prevState.page + 1,
        }));

        toast.success(`Hurray! we found ${data.totalHits} images for you!`, {
          duration: 3000,
        });
      } catch (error) {
        toast.error('Something went wrong', {
          duration: 3000,
        });
        this.setState({ isLoader: false });
      } finally {
        this.setState({ isLoader: false });
      }
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} />
        )}
        {this.state.images.length > 0 &&
          this.state.images &&
          !this.state.isLoader && <Button onClick={this.handleLoadMore} />}
        {this.state.isLoader && <Loader />}
        <Modal />
        <Toaster
          gutter={4}
          containerStyle={{
            top: 0,
          }}
          toastOptions={{
            success: {
              style: {
                minWidth: '280px',
                height: '56px',
                color: 'white',
                background: '#00aaff',
              },
            },
            error: {
              style: {
                minWidth: '280px',
                height: '58px',
                background: '#ffd500',
              },
            },
          }}
        />
        <GlobalStyle />
      </div>
    );
  }
}

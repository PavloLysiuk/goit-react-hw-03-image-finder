import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
  return (
    // <MutatingDots
    //   height="100"
    //   width="100"
    //   color="#ffc800"
    //   secondaryColor="#40bfff"
    //   radius="11"
    //   ariaLabel="mutating-dots-loading"
    //   wrapperStyle={{
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    //   wrapperClass=""
    //   visible={true}
    // />
    <ProgressBar
      wrapperStyle={{
        margin: '-40px auto 0',
        display: 'flex',
      }}
      width="110"
      height="110"
      ariaLabel="progress-bar-loading"
      borderColor="#40bfff"
      barColor="#ffc800"
    />
  );
};

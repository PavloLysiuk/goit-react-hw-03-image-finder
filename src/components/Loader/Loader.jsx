import { MutatingDots } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#ffc800"
      secondaryColor="#40bfff"
      radius="11"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#ffffffa0',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

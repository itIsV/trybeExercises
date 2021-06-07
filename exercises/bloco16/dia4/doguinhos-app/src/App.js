import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './store';

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching ? <p> Loading.. </p>
    : (
      <div style={{ wisth: 500 }} >
      <p>Oi V </p>
      <button
        style={{ display: 'block' }}
        onClick={fetchDog}
        type="button"
      >
        Novo Doguinho
      </button>
      <img style={{ width: '100%' }} src={src} alt='dog' />
    </div>
    )
  );
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

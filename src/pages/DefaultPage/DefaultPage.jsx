import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../assets/images/13.svg';

function DefaultPage() {
  const styles = {
    container: {
      width: '100%',
      height: 'calc(100vh - 70px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    containerImage: {
      maxWidth: '600px',
      maxHeight: '600px',
    }
  }
  return (
    <div style={styles.container}>
      <img src={NotFoundImage} style={styles.containerImage} alt="NotFound" />
      <h1 className="display-1">Nada que ver por aquí</h1>
      <Link to="/" className="btn btn-secondary">Volver a la página de inicio</Link>
    </div>
  );
}

export default DefaultPage;
import axios from 'axios';
import React, { useState } from 'react';
import ToastComponent from '../../components/ToastComponent/ToastComponent';

function CreateNewProductPage(){
  const styles = {
    label: {
      display: "flex",
    },
  };

  let [dataForm, setDataForm] = useState(
    {
      title: "",
      price: 0,
      description: "",
      image: "",
      category: ""
    }
  );
  const handleInputChange = (event) => {
    let value = event.target.value;
    let inputName = event.target.name;
    if(inputName === "price") value = +value;
    setDataForm({
        ...dataForm,
        [inputName] : value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    const url = "https://fakestoreapi.com/products";
    axios.post(url, dataForm)
      .then(response => {
        setShowMessage(true);
      });
  }

  let [showMessage, setShowMessage] = useState(false);

  return (
    <div style={{position:'relative'}}>
      {showMessage && <ToastComponent />}
      <div className="container">
        <div className="row justify-content-center">
          <div className=".col-md-8 col-sm-10 col-xs-12 mt-2">
            <form className="row" onSubmit={enviarDatos}>
              <h2 className="display-4">Crear nuevo producto</h2>
              <div className="mb-3">
                <label 
                  htmlFor="title" 
                  className="form-label" 
                  style={styles.label}>
                    Título
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="title" 
                  placeholder="Título"
                  name="title"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label 
                  htmlFor="price" 
                  className="form-label" 
                  style={styles.label}
                  >
                  Precio
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="price"
                  name="price"
                  placeholder="Precio" 
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label 
                  htmlFor="description" 
                  className="form-label" 
                  style={styles.label}
                  >
                  Descripción
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="description" 
                  name="description"
                  placeholder="Descripción"
                  onChange={handleInputChange} 
                />
              </div>
              <div className="mb-3">
                <label 
                  htmlFor="image" 
                  className="form-label" 
                  style={styles.label}
                  >
                  Imagen
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="image" 
                  name="image"
                  placeholder="Imagen"
                  onChange={handleInputChange} 
                />
              </div>
              <div className="mb-3">
                <label 
                  htmlFor="category" 
                  className="form-label" 
                  style={styles.label}
                  >
                  Categoría
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="category" 
                  name="category"
                  placeholder="Categoría"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary" disabled={showMessage}>
                  Crear Producto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNewProductPage;

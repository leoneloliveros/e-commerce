import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ToastComponent from "../../components/ToastComponent/ToastComponent";

function CreateNewProductPage() {
  let { idProduct } = useParams();

  let [showMessage, setShowMessage] = useState(false);
  let [dataForm, setDataForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const styles = {
    label: {
      display: "flex",
    },
  };

  const handleInputChange = (event) => {
    let {value, name: inputName} = event.target;
    if (inputName === "price") value = +value;
    setDataForm({
      ...dataForm,
      [inputName]: value,
    });
  };
  const enviarDatos = (event) => {
    event.preventDefault();
    let url = "https://fakestoreapi.com/products";
    if (idProduct) {
      url = `${url}/${idProduct}`
      axios.put(url, dataForm).then((response) => {
        setShowMessage(true);
      });
    }else{
      axios.post(url, dataForm).then((response) => {
        setShowMessage(true);
      });
    }
    
  };

  useEffect(() => {
    if (idProduct) {
      const url = `https://fakestoreapi.com/products/${idProduct}`;
      axios
        .get(url)
        .then((rpt) => {
          setDataForm(rpt.data);
        })
        .catch((err) => console.log(err));
    }
  }, [idProduct]);

  return (
    <div style={{ position: "relative" }}>
      {showMessage && <ToastComponent />}
      <div className="container">
        <div className="row justify-content-center">
          <div className=".col-md-8 col-sm-10 col-xs-12 mt-2">
            <form className="row" onSubmit={enviarDatos}>
              <h2 className="display-4">
                {idProduct ? "Editar Producto" : "Crear nuevo producto"}
              </h2>
              <div className="mb-3">
                <label
                  htmlFor="title"
                  className="form-label"
                  style={styles.label}
                >
                  Título
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Título"
                  name="title"
                  value={dataForm.title}
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
                  value={dataForm.price}
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
                  value={dataForm.description}
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
                  value={dataForm.image}
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
                  value={dataForm.category}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={showMessage}
                >
                  {idProduct ? "Guardar Cambios" : "Crear Producto"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewProductPage;

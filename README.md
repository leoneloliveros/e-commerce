[![Netlify Status](https://api.netlify.com/api/v1/badges/6f0b510f-ff33-4e4a-99db-5c89f9d5c6ce/deploy-status)](https://app.netlify.com/sites/trusting-swartz-d38681/deploys)


# E-commerce exercise

Crear conexiones hacia el api Fake store: [Link](https://fakestoreapi.com/docs)
1. Aplicar los cambios solicitados de rogger al PR [https://github.com/leoneloliveros/e-commerce/pull/2](https://github.com/leoneloliveros/e-commerce/pull/2) 
2. Listar las categorias del API en la seccion de categorias del e-commerce [Get All categories](https://fakestoreapi.com/products/categories)
3. Al darle click a uno de los elementos de las categorias, cambiar el componente que lista los productos y mostrar los productos correspondientes a la categoría seleccionada.
4. Usar Query params para ordenar los productos y agregar un boton que haga ese cambio en los query strings, para posteriormente hacer el llamado al [API](https://fakestoreapi.com/docs#p-sort)
5. Crear un boton en el navbar de crear nuevo producto, que redireccione a una nueva página a un formulario de creacion donde debe tener inputs de "title, price, description, image, category". Al darle submit se debe hacer un llamado al [API](https://fakestoreapi.com/docs#p-new)
6. Crear una nueva ruta con la vista de actualizacion de producto y hacer el llamado al correspondiente API
7. Arreglar los modales, que rendericen la informacion correcta.
8. Agregar una página de Not_Found cuando se agregue un link que no existe
9. Desplegar en Netlify
10. Crear un PR.
11. Agregar un React Context para cambiar el theme de nuestra aplicacion

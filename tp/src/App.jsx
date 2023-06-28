import {Router,Route} from 'react-router-dom';
import './App.css';
//importar logo
import logoAct from './imagenes/logoAct.png';
import ListaDeTareas from './componentes/ListaDeTareas';



function App() {
  return(
<>

  
    <div className='aplicacion-tareas'>
      <div className='app-logo-contenedor'>
        <img src={logoAct}
        className='app-logo' />
        </div>
        <div className='tareas-lista-principal'>
          <h1>Titulo que se puede cambiar</h1>
          <ListaDeTareas />
          </div>
        </div>
        
        </>
  );
}
export default App;

//manejar los estados en la app principal, y como almacenar los datos de las trajetas, para que queden guardadas.

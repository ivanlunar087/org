import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

//los estados siempre deben ir dentro de un componente o dentro de una funcion que represente un componente. tambien deben ir antes del return
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructura en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovacion y Gestion",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  
    }])

    const [equipos, actualizarEquipos] = useState([
      {
        id: uuid(), 
        titulo: "Programacion",
        colorPrimario: "#57c278",
        colorSecundario: "#d9f7e9"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82cffa",
        colorSecundario: "#e8f8ff"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#a6d157",
        colorSecundario: "#f0f8e2"
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario: "#e06b69",
        colorSecundario: "#fde7e8"
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#db6ebf",
        colorSecundario: "#fae9f5"
      },
      {
        id: uuid(),
        titulo: "Movil",
        colorPrimario: "#ffba05",
        colorSecundario: "#fff5d9"
      },
      {
        id: uuid(),
        titulo: "Innovacion y Gestion",
        colorPrimario: "#ff8a29",
        colorSecundario: "#ffeedf"
      },
    ])

    

  //Ternario -> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Regsitrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador', colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador', id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    console.log('like', id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  //Lista de equipos
  //const equipos = 

  return (
    <div>
      <Header/>
      {/* {mostrarFormulario ? <Formulario/>: <></>} */} {/* estas llaves al final de la linea react las interpreta como un valor vacio  */}
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}/>} {/* si la condicion mostrarFormulario && -> es verdadera seMuestra si es falso no pasara nada */}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} like={like}/>)}

      <Footer/>
    
    </div>
  );
}

export default App;

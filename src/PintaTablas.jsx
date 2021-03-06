import shortid from 'shortid'; // Para crear ids únicos necesarios para las keys de los métodos .map
import InfoEnPantalla from './InfoEnPantalla';

const PintaTablas = ({ arr }) => {
  // Esta función habría que sacarla del componente y ponerna en una carpeta "utils" o "helpers" o lo que se te ocurra.
  const creaCabeceras = (array) => {
    let cabeceras = array.map((el) => Object.keys(el));

    cabeceras = cabeceras.flat();
    cabeceras = new Set(cabeceras);
    cabeceras = Array.from(cabeceras);

    return cabeceras;
  };

  const cabeceras = creaCabeceras(arr);

  return (
    <>
      {/* ELIMINAR */}
      <InfoEnPantalla arr={arr} cabeceras={cabeceras} />
      {/* ELIMINAR */}

      <table>
        <thead>
          <tr>
            {cabeceras.map((cabecera) => (
              <th key={shortid.generate()}>{cabecera}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {arr.map((elementoArr) => (
            <tr key={shortid.generate()}>
              {cabeceras.map((cabecera) => {
                if (elementoArr[cabecera]) {
                  return <td key={shortid.generate()}>{elementoArr[cabecera]}</td>;
                } else {
                  return <td key={shortid.generate()}></td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PintaTablas;

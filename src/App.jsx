import PintaTablas from './PintaTablas';

const App = () => {
  const arr = [
    {
      nombre: 'Alejandro',
      apellido: 'Dolina',
      dni: 5515237,
      otro: 'Otro dato'
    },
    {
      nombre: 'Ernesto',
      apellido: 'Sábato',
      dni: 2142377,
      email: 'ernesto@gmail.com'
    },
    {
      nombre: 'Roberto',
      apellido: 'Arlt',
      dni: 1142377,
      nacimiento: '25/01/1939'
    }
  ];

  return <PintaTablas arr={arr} />;
};

export default App;

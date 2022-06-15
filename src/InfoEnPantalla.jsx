const divStyles = { backgroundColor: 'lightgray', margin: '0.5rem', padding: '0.5rem' };
const preTitleStyles = { backgroundColor: 'white', display: 'inline-block', padding: '0.5rem', textDecoration: 'underline' };

const InfoEnPantalla = ({ arr, cabeceras }) => {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
      <div>
        <div style={divStyles}>
          <pre style={preTitleStyles}>arr:</pre>
          <pre>{JSON.stringify(arr, null, 2)}</pre>
        </div>
        <div style={divStyles}>
          <pre style={preTitleStyles}>cabeceras:</pre>
          <pre>{JSON.stringify(cabeceras)}</pre>
        </div>
      </div>
      <div style={divStyles}>
        <pre style={preTitleStyles}>código:</pre>
        <pre>
          {`
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
          `}
        </pre>
      </div>
    </div>
  );
};
export default InfoEnPantalla;

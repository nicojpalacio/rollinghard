
import { Table } from "react-bootstrap";

export default function Tablahardware(props) {
  console.log(props.hardwares)
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Imagen</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
        {props.hardwares.map((hardware ,i)=>(<tr key={i}>
          <td>{i+1}</td>
          <td>{hardware.titulo}</td>
          <td>{hardware.imagen}</td>
          <td>{hardware.description}</td>
        </tr>))}
      </tbody>
    </Table>
  );
}

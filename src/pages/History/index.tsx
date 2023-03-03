import { StatusTask } from '../History/styles'
import { HistoryContainer, TableContainer } from './styles'

export const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusTask statusColor="yellow" />
                Em andamento
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusTask statusColor="green" />
                Em andamento
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusTask statusColor="red" />
                Em andamento
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusTask statusColor="yellow" />
                Em andamento
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusTask statusColor="yellow" />
                Em andamento
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusTask statusColor="yellow" />
                Em andamento
              </td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </HistoryContainer>
  )
}

import { useContext } from 'react'
import { CycleContext } from '../../context/CycleContext'
import { StatusTask } from '../History/styles'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { HistoryContainer, TableContainer } from './styles'

export const History = () => {
  const { cycles, dispatch } = useContext(CycleContext)
  console.log(cycles, 'history')
  return (
    <HistoryContainer>
      <div className="title">
        <h1>Meu histórico</h1>
        <button
          onClick={() => {
            dispatch({ type: 'CLEAR_HISTORY' })
          }}
          type="button"
        >
          Limpar histórico
        </button>
      </div>

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
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task} </td>
                  {/* <td>{cycle.minutesAmount} minutos</td> */}
                  {cycle.minutesAmount !== 1 ? (
                    <td>{cycle.minutesAmount} minutos</td>
                  ) : (
                    <td>{cycle.minutesAmount} minuto</td>
                  )}

                  <td>
                    {formatDistanceToNow(parseISO(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.completedDate && (
                      <StatusTask statusColor={'green'}>Completo</StatusTask>
                    )}
                    {!cycle.interruptedDate && !cycle.completedDate && (
                      <StatusTask statusColor={'yellow'}>
                        Em andamento
                      </StatusTask>
                    )}
                    {cycle.interruptedDate && (
                      <StatusTask statusColor={'red'}>Interrompido</StatusTask>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </TableContainer>
    </HistoryContainer>
  )
}

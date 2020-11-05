import { useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'
import Input from './components/Input'
import Row from './components/Table'
import Points from './components/Points'
import styled from 'styled-components'

let data = [
  {
    name: 'Soul Kitchen',
    points: 0,
  },
  {
    name: 'Matrix',
    points: 0,
  },
  {
    name: 'Tenet',
    points: 0,
  },
  {
    name: 'Brüno',
    points: 0,
  },
  {
    name: 'The Dark Knight',
    points: 0,
  },
  {
    name: 'Inception',
    points: 0,
  },
]

function App() {
  const [rows, set] = useState(data)
  const [sortedRows, setSortedRows] = useState(rows)
  const height = 40
  const transitions = useTransition(
    sortedRows.map((data, i) => ({ ...data, y: i * height })),
    (d) => d.name,
    {
      from: { position: 'absolute', opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
    }
  )

  useEffect(() => {
    const toSortedRows = [...rows]
    setSortedRows(toSortedRows.sort((a, b) => b.points - a.points))
  }, [rows])

  return (
    <>
      <Table>
        {rows.map((row, i) => (
          <Row index={i} />
        ))}

        <TableContent>
          {transitions.map(({ item, props: { y, ...rest }, key }, index) => (
            <animated.div
              key={key}
              class="card"
              style={{
                width: '100%',
                transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
                ...rest,
              }}
            >
              <div class="cell">
                <div class="details">
                  <Test>
                    {item.name}

                    <Points points={item.points} />
                  </Test>
                </div>
              </div>
            </animated.div>
          ))}
        </TableContent>
      </Table>
      <div style={{ display: 'flex', position: 'absolute', bottom: 0 }}>
        {rows.map((movie, i) => (
          <Input movie={movie} index={i} handleInput={handleInput} />
        ))}
      </div>
    </>
  )

  function handleInput(e, i) {
    e.preventDefault()
    const newRows = [...rows]
    newRows[i].points += Number(e.target[0].value)
    set([...newRows])
  }
}
export default App

const Table = styled.div`
  position: relative;
  width: 50%;
`
const TableContent = styled.div`
  display: flex;
  position: absolute;
  top: 7px;
  left: 70px;
  width: 85%;
`

const Test = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

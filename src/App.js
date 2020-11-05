import { useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'
import Input from './components/Input'
import Row from './components/Table'
import Points from './components/Points'
import styled from 'styled-components/macro'

let data = [
  {
    name: 'Soul Kitchen',
    points: 0,
    added: 0,
  },
  {
    name: 'Matrix',
    points: 0,
    added: 0,
  },
  {
    name: 'Tenet',
    points: 0,
    added: 0,
  },
  {
    name: 'Brüno',
    points: 0,
    added: 0,
  },
  {
    name: 'The Dark Knight',
    points: 0,
    added: 0,
  },
  {
    name: 'Inception',
    points: 0,
    added: 0,
  },
  {
    name: 'Star Wars',
    points: 0,
    added: 0,
  },
  {
    name: 'Indiana Jones',
    points: 0,
    added: 0,
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

  const [show, setShow] = useState(false)
  const opacity = useTransition(show, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

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
                transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
                ...rest,
                width: '85%',
              }}
            >
              <Details>
                {item.name}
                <Points
                  points={item.points}
                  added={item.added}
                  isAdded={item.added > 0}
                  opacity={opacity}
                />
              </Details>
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
    const newRows = rows.map((row, index) => {
      return i === index ? test(row, e) : test2(row)
    })
    set([...newRows])
    setShow(true)
    setTimeout(() => setShow(false), 2500)
  }

  function test(row, e) {
    row.points += Number(e.target[0].value)
    row.added = Number(e.target[0].value)
    return row
  }

  function test2(row, e) {
    row.added = 0
    return row
  }
}
export default App

const Table = styled.div`
  position: relative;
  width: 50%;
  & div:nth-child(1) > span:nth-child(1) {
    color: #ff9700;
  }

  & div:nth-child(n + 7) > span {
    color: grey;
  }
`
const TableContent = styled.div`
  position: absolute;
  top: 7px;
  left: 70px;
  width: 100%;
`

const Test = styled.div`
  display: flex;
  justify-content: space-between;
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`

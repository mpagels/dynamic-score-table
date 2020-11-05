import { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import Input from './components/Input'
import Row from './components/Table'
import Points from './components/Points'
import styled from 'styled-components/macro'
import data from './assets/data.json'

function App() {
  const [rows, set] = useState(data)
  const height = 40
  const sortedRows = [...rows].sort((a, b) => b.points - a.points)
  const moveAnimation = useTransition(
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
  const addedPointsAnimaton = useTransition(show, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <>
      <Table>
        {rows.map((row, i) => (
          <Row index={i} />
        ))}

        <TableContent>
          {moveAnimation.map(({ item, props: { y, ...rest }, key }, index) => (
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
                  opacity={addedPointsAnimaton}
                />
              </Details>
            </animated.div>
          ))}
        </TableContent>
      </Table>
      <Inputs>
        {rows.map((movie, i) => (
          <Input movie={movie} index={i} handleInput={handleInput} />
        ))}
      </Inputs>
    </>
  )

  function handleInput(e, i) {
    e.preventDefault()
    const newRows = rows.map((row, index) => {
      return i === index ? prepareAnimation(row, e) : resetAnimation(row)
    })
    set([...newRows])
    setShow(true)
    setTimeout(() => setShow(false), 2500)
  }

  function prepareAnimation(row, e) {
    row.points += Number(e.target[0].value)
    row.added = Number(e.target[0].value)
    return row
  }

  function resetAnimation(row, e) {
    row.added = 0
    return row
  }
}
export default App

const Table = styled.div`
  position: relative;
  width: 550px;
  & div:nth-child(1) > span:nth-child(1) {
    color: var(--orange);
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
const Details = styled.div`
  display: flex;
  justify-content: space-between;
`
const Inputs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  position: absolute;
  bottom: 0;
  left: 0;
`

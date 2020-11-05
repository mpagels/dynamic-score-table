import styled from 'styled-components'

export default function Input({ movie, handleInput, index }) {
  return (
    <Points>
      {movie.name}
      <form onSubmit={(e) => handleInput(e, index)}>
        <input id="points"></input>
        <button>Speichern</button>
      </form>
    </Points>
  )
}

const Points = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`

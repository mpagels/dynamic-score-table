import styled from 'styled-components'

export default function Input({ movie, handleInput, index }) {
  return (
    <>
      <Form onSubmit={(e) => handleInput(e, index)}>
        <label id="points" name={movie.name}>
          {movie.name}
        </label>
        <InputField id="points" type="number" name={movie.name}></InputField>
        <button>Hinzufügen</button>
      </Form>
    </>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`

const InputField = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

import styled from 'styled-components'

export default function DropOut() {
  return <Flag>DROP OUT</Flag>
}

const Flag = styled.div`
  background-color: var(--orange);
  color: white;
  padding: 9.3px;
  position: absolute;
  left: -100px;
  bottom: -42.7px;
`

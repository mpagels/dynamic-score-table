import styled from 'styled-components'

export default function Table({ index }) {
  return (
    <Row>
      <span>0{Number(index) + 1}</span>
    </Row>
  )
}

const Row = styled.div`
  display: flex;
  border-bottom: solid #dedede 1px;
  height: 40px;
  align-items: center;
  padding-left: 20px;
`

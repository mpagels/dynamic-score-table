import styled from 'styled-components'

export default function Table({ index }) {
  const t =
    index !== 5 ? (
      <Row>
        <span>0{Number(index) + 1}</span>
      </Row>
    ) : (
      <Row2>
        <span>0{Number(index) + 1}</span>
      </Row2>
    )

  return t
}

const Row = styled.div`
  display: flex;
  border-bottom: solid #dedede 1px;
  height: 40px;
  align-items: center;
  padding-left: 20px;
  width: 100%;
`

const Row2 = styled.div`
  display: flex;
  border-bottom: solid #ff9700 3px;
  height: 40px;
  align-items: center;
  padding-left: 20px;
  width: 100%;
`

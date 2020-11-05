import styled from 'styled-components'
import DropOut from './DropOut'

export default function Table({ index }) {
  const table =
    index !== 5 ? (
      <Row>
        <span>0{Number(index) + 1}</span>
      </Row>
    ) : (
      <OrangeRow>
        <span>0{Number(index) + 1}</span>
        <DropOut />
      </OrangeRow>
    )

  return table
}

const Row = styled.div`
  display: flex;
  border-bottom: solid #dedede 1px;
  height: 40px;
  align-items: center;
  padding-left: 20px;
  min-width: 550px;
`

const OrangeRow = styled(Row)`
  position: relative;
  border-bottom: solid 3px var(--orange);
  width: 100%;
  min-width: 550px;
`

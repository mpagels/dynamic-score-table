import styled from 'styled-components'

export default function Points({ points }) {
  return (
    <Wrapper>
      <Slash>/</Slash>
      <div>
        {points} <XP>XP</XP>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.span`
  width: 75px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const Slash = styled.span`
  color: #ff9700;
`

const XP = styled.span`
  font-size: 60%;
`

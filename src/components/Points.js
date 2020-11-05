import styled from 'styled-components/macro'
import { animated } from 'react-spring'

export default function Points({ points, isAdded, added, opacity }) {
  return (
    <Wrapper>
      <Added>
        {isAdded &&
          opacity.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={{ ...props, display: 'inline' }}>
                  +{added}
                </animated.div>
              )
          )}
      </Added>
      <PointWrapper>
        <Slash>/</Slash>
        <span>{points}</span> <XP>XP</XP>
      </PointWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 175px;
  display: flex;
  justify-content: space-between;
  justify-items: right;
`
const Added = styled.div`
  color: var(--orange);
  font-size: 80%;
  width: 100%;
  margin-right: 10px;
  display: flex;
  align-items: center;
`
const Slash = styled.div`
  color: var(--orange);
`

const PointWrapper = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: flex-end;
`

const XP = styled.div`
  font-size: 60%;
  margin-left: 3px;
`

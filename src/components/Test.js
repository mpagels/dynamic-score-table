import { useState } from 'react'
import { useTransition, animated } from 'react-spring'

export default function Test() {
  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <>
      <div>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                ✌️
              </animated.div>
            )
        )}
      </div>
      <button
        onClick={() => {
          set(!show)
          setTimeout(() => set(false), 2000)
        }}
      >
        Show/Hide
      </button>
    </>
  )
}

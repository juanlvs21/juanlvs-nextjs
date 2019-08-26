import React, {Fragment} from 'react'
import Typed from 'react-typed'

const TypedComponent = ({text, size, color, weight}) => {
  return (
    <Fragment>
      <Typed strings={text} typeSpeed={100} loop className="typed" />
      <style jsx>{`
        :global(.typed) {
          font-size: ${size}px;
          color: ${color};
          font-weight: ${weight};
        }
      `}</style>
    </Fragment>
  )
}

export default TypedComponent

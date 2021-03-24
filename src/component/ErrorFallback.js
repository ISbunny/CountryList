import React from 'react'
import PropTypes from 'prop-types'

export default function ErrorFallback({ error }) {
  return (
    <div>
      There was an error:{' '}
      <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
    </div>
  )
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
}

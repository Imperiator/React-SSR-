import React, { useEffect } from 'react'

export default function Test() {

  useEffect(() => {
    document.title = 'ssr-test'
  }, [])
  return (
    <div>ssr-test</div>
  )
}

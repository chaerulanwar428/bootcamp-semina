import React from 'react'

export default function Button(onClick, children) {
  return <Button onClick={onClick}>{children}</Button>;
}

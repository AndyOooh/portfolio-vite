import React from 'react'
import { TagCloud } from 'react-tagcloud'
import { cloudList } from './cloudList'

type Props = {}

type Tag = {
  value: string
  count: number
  key?: string
  color?: string
  props?: {}
}

function ReactTagCloud({}: Props) {
  return (
    <>
      <h1>React tag Cloud</h1>
      <TagCloud
        minSize={12}
        maxSize={35}
        tags={cloudList}
        onClick={(tag: Tag) => alert(`'${tag.value}' was selected!`)}
      />
    </>
  )
}

export default ReactTagCloud

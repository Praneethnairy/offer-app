import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function DefaultLayout() {
  const [searchParams] = useSearchParams();
  const paramId = searchParams.get('id');
  return (
    <div>{paramId}</div>
  )
}

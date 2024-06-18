import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <>
        <div className='text-center'>
            <h1>Menú</h1>
            <Link type="button" className="btn btn-primary" to={"/eventos"}>Eventos</Link>
        </div>
    </>
  )
}

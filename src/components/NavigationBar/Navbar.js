import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className=" container-fluid bg-tranparent d-flex">
    <Link className="text-decoration-none fw-bold fs-2">Younglings</Link>
      <input className="form-control w-25" type="search" placeholder="Search" />
      {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
</nav>
  )
}

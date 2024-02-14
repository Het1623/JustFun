import React from 'react'
import PropTypes from 'prop-types'
export default function Navblack(props) {
  return (
  
   <>
  <nav class="navbar navbar-expand-lg bg-info-subtle">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">{props.knowUs}</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </>
  )
}

Navblack.prototype = {
    title: PropTypes.string.isRequired, // This is used to check if the props passed in the component is required or not
    // This will throw an error if the props is not passed
    // This will not if deault value is set
    knowUs:PropTypes.string
} // This is used to check the type of props passed in the component

Navblack.defaultProps = {
    title: 'TextApp',
    knowUs: 'Info'
} // This is used to set the default value of the props passed in the component
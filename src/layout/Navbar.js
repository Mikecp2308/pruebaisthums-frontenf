import React from 'react';


const Navbar = () => {
    return (
        <div>
            <div >

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="navbar-brand" href="#">Precio pais</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="navbar-brand" href="#">Costos</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="navbar-brand" href="#">Excepciones</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div >
                <nav className="navbar navbar-light bg-light">
                    <ul>

                        <input class="form-control mr-sm-2" type="search" placeholder="Item number o UPC" aria-label="Search" />


                    </ul>
                    <ul>
                        <button type="button" className="btn btn-primary btn-lg">Agregar a la lista</button>
                    </ul>
                </nav>

            </div>

            <div>
                
            </div>
        </div>





    )

}

export default Navbar;

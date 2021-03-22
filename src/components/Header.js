import React from 'react'
import '../styles/header.css'

class Header extends React.Component {

    render() {
        return(
            <header className={"container-fluid border border-secondary d-flex align-items-center justify-content-center"} id={"box-header"}>
                <div>
                    programación web
                </div>
            </header>
        )
    }
}

export default Header;
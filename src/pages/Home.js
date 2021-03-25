import React from 'react'
import Header from '../components/Header'
import Grid from '../components/Grid'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    salir(e){

    }

    render() {

        return(
            <React.Fragment>
                <Header />
                <Grid />
                <Link to='/prueba'>Salir</Link>
            </React.Fragment>
        )
    }
}

export default Home;
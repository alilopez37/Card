import React from 'react'
import Header from '../components/Header'
import Grid from '../components/Grid'

class Home extends React.Component {

    render() {
        return(
            <React.Fragment>
                <Header />
                <Grid />
            </React.Fragment>
        )
    }
}

export default Home;
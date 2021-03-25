import React from 'react'
import '../styles/header.css'

class Header extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title : 'programación web'
        }
        console.log("1. Constructor")
    }

    componentDidMount() {
        console.log("3. componentDidMount")

        this.intervalo = setInterval(e => {
            this.setState({
                title: 'Diseño de interfaces'
            })
        },3000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("4. componentDidUpdate")
    }

    componentWillUnmount() {
        //clearInterval(this.intervalo)
        console.log("componentWillUnmount")
    }

    render() {
        console.log("2. Render")
        return(
            <header className={"container-fluid border border-secondary d-flex align-items-center justify-content-center"} id={"box-header"}>
                <div>
                    {this.state.title}
                </div>
            </header>
        )
    }
}

export default Header;
import React from 'react'

class Elemento extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row border-bottom border-1 border-success">
                <div className="col-3 col-sm-6 col-xl-2 border border-success">
                    {this.props.dato.nombre}
                </div>
                <div className="col border border-success">
                    {this.props.dato.materia01}
                </div>
                <div className="col border border-success">
                    {this.props.dato.materia02}
                </div>
                <div className="col border border-success">
                    {this.props.dato.materia03}
                </div>
                <div className="col border border-success">
                    {this.props.dato.materia04}
                </div>
            </div>
        )
    }
}

export default Elemento;
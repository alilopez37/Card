import React from 'react'

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = [
            {
                nombre: 'Alí Santoago',
                materia01: '80',
                materia01: '80',
                materia01: '80',
                materia01: '80',

            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ]
    }
    render() {
        return(
            <div className="container border border-3 border-success">
                <div className="row border-bottom border-1 border-success">
                    <div className="col-4 border border-success">
                        Nombre
                    </div>
                    <div className="col border border-success">
                        Materia 01
                    </div>
                    <div className="col border border-success">
                        Materia 02
                    </div>
                    <div className="col border border-success">
                        Materia 03
                    </div>
                    <div className="col border border-success">
                        Materia 04
                    </div>

                </div>
                <div className="row border-bottom border-1 border-success">
                    <div className="col-4">
                        Alí Santiago
                    </div>
                    <div className="col">
                        85
                    </div>
                    <div className="col">
                        82
                    </div>
                    <div className="col">
                        90
                    </div>
                    <div className="col">
                        100
                    </div>

                </div>
            </div>
        )
    }
}

export default Grid;
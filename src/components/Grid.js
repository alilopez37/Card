import React from 'react'
import Elemento from '../components/Elemento'

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.lista = [
            {
                nombre: 'Alí Santiago',
                materia01: '80',
                materia02: '80',
                materia03: '80',
                materia04: '80',
            },
            {
                nombre: 'Mauro Uziel',
                materia01: '80',
                materia02: '80',
                materia03: '80',
                materia04: '80',
            },
            {
                nombre: 'Vicente Yael',
                materia01: '80',
                materia02: '80',
                materia03: '80',
                materia04: '80',
            },
            {
                nombre: 'Gerardo',
                materia01: '80',
                materia02: '80',
                materia03: '80',
                materia04: '80',
            },
            {
                nombre: 'Esaú Abimael',
                materia01: '80',
                materia02: '80',
                materia03: '80',
                materia04: '80',
            },
            {
                nombre: 'Angel de Jesús',
                materia01: '80',
                materia02: '80',
                materia03: '80',
                materia04: '80',
            },
            {
                nombre: 'Verónica Liseth',
                materia01: '80',
                materia02: '80',
                materia03: '80',
                materia04: '80',
            },
            {
                nombre: 'Karol Yareni',
                materia01: '80',
                materia02: '80',
                materia03: '80',
                materia04: '80',
            },
            {
                nombre: 'Kevin Omar',
                materia01: '80',
                materia02: '80',
                materia03: '80',
                materia04: '80',
            },
            {
                nombre: 'Magin',
                materia01: '80',
                materia02: '80',
                materia03: '80',
                materia04: '80',
            }
        ]
    }
    render() {
        return(
            <div className="container border border-3 border-success">
                <div className="row border-bottom border-1 border-success">
                    <div className="col-3 col-sm-6 col-xl-2 border border-success">
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
                <For each="item" of={this.lista}>
                    <Elemento dato={item} />
                </For>

            </div>
        )
    }
}

export default Grid;
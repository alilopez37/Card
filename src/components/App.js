import React from "react";
import Card from './Card'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.data = [
            {
                title: 'Croods 2',
                description: 'Película animada de Pixar'
            },
            {
                title: 'Capitán américa',
                description: 'Película de superheroes'
            },
            {
                title: 'Thor',
                description: 'Película de marvel'
            }
        ]
    }

    render() {
        return(
            <div className="container">
                <For each="item" index="index" of={this.data} >
                    <Card key={index} title={item.title} description={item.description}/>
                </For>
            </div>
        )
    }
};

export default App;
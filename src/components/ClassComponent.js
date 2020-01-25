import React from 'react';


class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        //Дефениция за local state
        this.state = {
            title: "Hello"
        }
    }

    buttonOnClick = () => {
        this.setState({
            title: "Set new Title",
            name: "Georgi"
        })
    }

    render() {
        return <div>
            <h1>{this.state.title}</h1>
            <h3>{this.state.name}</h3>
            <h4>{this.props.subtitle}</h4>
            <p>{this.props.description}</p>
            <button
                onClick={this.buttonOnClick}
                type="button"
                className="btn btn-primary"
            >Click me!</button>
        </div>
    }
}

export default ClassComponent;
import React, { Component } from 'react';

class QuantityInput extends Component {

    // const getQuantityMessage = count => {
    //     if (count > 5) {
    //         return <div className="alert alert-success">
    //             All good bud!
    //             </div>
    //     }
    //     if (count > -1) {
    //         return <div className="alert alert-warning">
    //             Ooooooh noes!
    //             </div>
    //     }
    //     return <div className="alert alert-info">Don't give up!</div>
    // }

    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <button
                        onClick={this.DecreaseItem}
                        className="btn btn-outline-danger"
                        type="button">
                        <i class="fa fa-minus-circle"></i>
                    </button>
                </div>
                <input
                    readOnly
                    value={this.state.clicks}
                    type="text"
                    className="form-control text-center">
                </input>
                <div className="input-group-append">
                    <button
                        onClick={this.IncrementItem}
                        className="btn btn-outline-primary"
                        type="button">
                        <i class="fa fa-plus-circle"></i>
                    </button>
                </div>
                {/* {getQuantityMessage(count)} */}
            </div>
        )
    }
}

export default QuantityInput;

import React from 'react';
import QuantityInput from '../components/QuantityInput';


//This is a home page
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counts: [1, 2, 3, 4, 5]
        }
    }
    // getQuantityInputs = () => {
    //     const counts = this.state.counts;

    //     const inputs = counts.map(element = > {
    //         return <QuantityInput
    //         key={element}
    //         count={element}/>
    //     })

    //     return inputs;
    // }

    render() {
        return <div>
            <QuantityInput count={5} />
            {this.getQuantityInputs()}
        </div>
    }
}

export default Home;
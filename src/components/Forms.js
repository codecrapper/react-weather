import React from 'react';

const Forms = props => {
    return (
        <div>
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="City..." />
                <input type="text" name="country" placeholder="Country..." />
                <button>Get Weather</button>
            </form>
        </div>
    )
}

// class Forms extends React.Component {
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.props.getWeather}>
//                     <input type="text" name="city" placeholder="City..." />
//                     <input type="text" name="country" placeholder="Country..." />
//                     <button>Get Weather</button>
//                 </form>
//             </div>
//         )
//     }
// }

export default Forms;
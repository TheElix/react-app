import React from 'react';

// function car() {
//     return (
//         <h2>This is something...</h2>
//     )
// }

// const car = () => {
//     return (
//         <div>This is something...</div>
//     )
// };

// const car = () => (
//     <div>
//         This is something...
//         <strong>test</strong>
//     </div>
// );

export default props => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        { props.children }
    </div>
);

// export default car
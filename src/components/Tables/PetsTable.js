import React from 'react';

const PetsTable = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Pets
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.pets.map(p => (<tr key={p.type}><td>{p.name}</td></tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default PetsTable

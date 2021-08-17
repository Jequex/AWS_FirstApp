import React from 'react';

const CountriesTable = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Countries
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.countries.map(p => (<tr key={p.countrycode}><td>{p.countryname}</td></tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default CountriesTable;

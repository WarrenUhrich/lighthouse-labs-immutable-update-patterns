import { useState } from 'react';

const Crust = ({crust, setCrust}) => {
    const handleChange = (event) => {
        setCrust(event.target.value);
    };

    return (
        <form onSubmit={(event) => {event.preventDefault();}}>
            <label>
                Describe your Crust:
                <input
                    type="text"
                    value={crust}
                    onChange={handleChange} />
            </label>
        </form>
    );
};

export default Crust;

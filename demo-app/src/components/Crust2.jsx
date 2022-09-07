import { useState } from 'react';

const Crust = ({crust, updateCrust}) => {
    const handleChange = (event) => {
        updateCrust(event.target.value);
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

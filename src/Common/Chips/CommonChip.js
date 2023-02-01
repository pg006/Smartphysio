import React from 'react';
import Chips from "react-chips";
import "./CommonChip.scss"

const CommonChip = (props) => {
    const {
        chips = [],
        onChange,
        suggestions = ["Your", "Data", "Here"],
        keys = [13, 32]
    } = props

    return (
        <div className='hey'>
            <Chips
                value={chips}
                onChange={onChange}
                suggestions={suggestions}
                fromSuggestionsOnly={false}
                createChipKeys={keys}
                className="chips-data"
            />
        </div>
    );
}

export default CommonChip;
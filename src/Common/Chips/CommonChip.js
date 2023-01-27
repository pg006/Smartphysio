import React from 'react';
import Chips from "react-chips";

const CommonChip = (props) => {
    const {
        chips = [],
        onChange,
        suggestions = ["Your", "Data", "Here"],
        keys = [13, 32]
    } = props

    return (
        <div>
            <Chips
                value={chips}
                onChange={onChange}
                suggestions={suggestions}
                fromSuggestionsOnly={false}
                createChipKeys={keys}
            />
        </div>
    );
}

export default CommonChip;
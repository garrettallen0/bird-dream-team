import React from 'react';

const ListItem = ({date, bird1, bird2, bird3, bird4, bird5}) => {

    return (
        <div className="listItem">
            <li>{date}: {bird1}, {bird2}, {bird3}, {bird4}, {bird5}</li>
        </div>
    )
}

export default ListItem;
import React from 'react';
import '../sass/components/SubTitle.scss';

const SubTitle = ({subtitleValue}) => {

    return(
        <div className="subtitle" >
            <h3 className="subtitle-text">{subtitleValue}</h3>
        </div>
    );
}

export default SubTitle;
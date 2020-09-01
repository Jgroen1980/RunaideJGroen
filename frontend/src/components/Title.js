import React from "react";
import '../sass/components/Title.scss';

const Title = ({titleValue}) => {

    return(
        <div className="title">
            <h1 className="title-header">{titleValue}</h1>
        </div>
    );
}

export default Title;
import React from "react";
import '../sass/components/ButtonResult.scss';

const ButtonResult = ({textLinkTo, textLinkText}) => {

    return(
        <a href={textLinkTo} className="text-link-to-results">{textLinkText}</a>
    );
}

export default ButtonResult;
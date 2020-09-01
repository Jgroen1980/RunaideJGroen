import React from "react";
import "../sass/components/ButtenLink.scss";

const ButtonLink = ({textLinkTo, textLinkText, checkValuesEntered}) => {

    return(
        <a href={textLinkTo} onClick={checkValuesEntered} className="text-link-big">{textLinkText}</a>
    );
}

export default ButtonLink;
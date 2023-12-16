import "./CompoundButton.scss"



export const CompoundButton = ({buttonTitle, buttonSubtext, className="Compound-Button", subTextClass="Compound-Button-subtext"}) => {
    return(
        <button className={className}>
        {buttonTitle}
        <div className={subTextClass}>{buttonSubtext}</div>
        </button> 
    )
}
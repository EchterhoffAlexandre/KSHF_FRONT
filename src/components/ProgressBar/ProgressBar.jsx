
const ProgressBar = ({progress}) => {

    const containerStyles = {
        height:'10%',
        width:'100%',
        backgroundColor : 'grey',

    } 

    const fillerStyles = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor:'green',
        textAlign:'right',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
    }


    return(
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${progress}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar
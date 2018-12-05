const footBarWhatColor = (prevState=true, action={}) => {
    let { type, payload } = action;
    switch (type) {
        case "footBarColor":
        return payload;
        default :
        return prevState;
    }
}

export default footBarWhatColor;
const footBar = (prevState=true, action={}) => {
    let { type, payload } = action;
    switch (type) {
        case "footBarShow":
        return payload;
        case "footBarHidden":
        return payload;
        default :
        return prevState;
    }
}

export default footBar;
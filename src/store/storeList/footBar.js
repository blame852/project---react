const footBar = (prevState=true, action={}) => {
    let { type, payload } = action;
    switch (type) {
        case "navBarShow":
        return payload;
        case "navBarHidden":
        return payload;
        default :
        return prevState;
    }
}

export default footBar;
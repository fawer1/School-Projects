
//We use PascalCase in React
function Message() {
    const name = "Furkan";
    if(name)
        return <div>Hello {name}</div>;
    else
        return <div>Hello World</div>;
}

export default Message;
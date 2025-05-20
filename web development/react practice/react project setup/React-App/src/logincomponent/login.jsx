function Login(props){
    if(props.name == "html")
        {
            return(
                <div>
                    <p>{props.name}</p>
                    <p>youre logged in</p>
                </div>
            );
        }
    else{
        return(
            <p>hello world</p>
        );
    }
    
}


export default Login
function Completed(props){

    const mystyle ={
        color : "#CB2D2D"
        /*backgroundColor : "#E89393"*/
    }

    return(
        <div>
            <h3 style ={mystyle}>The task which are completed</h3>
            {
                props.newarr1.map((item) => (
                    <p>{item.title}</p>
                )

                )
            }
        </div>
    )
}
export default Completed;


/*return(
    <div>
        <h1 style ={mystyle}>the task which are pending</h1>
        {
            props.newarr.map((item) => (
                <p>{item.title}</p>
            )
            
            )
        }
    </div>
)*/
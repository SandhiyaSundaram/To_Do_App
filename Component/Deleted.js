function Deleted(props){

    const mystyle ={
        color : "#CB2D2D"
        /*backgroundColor : "#E89393"*/
    }

    return(
        <div>
            <h3 style ={mystyle}>The task which are deleted</h3>
            {
                props.newarr3.map((item) => (
                    <div>
                    <p>{item.title}</p>
                    <button type="button" class="btn btn-dark" onClick={()=>props.fun3(item.id)}>Restore</button>
                    </div>

                )

                )
            }
        </div>
    )
}
export default Deleted;
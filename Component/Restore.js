function Restore(props){

    const mystyle ={
        color : "#CB2D2D"
        /*backgroundColor : "#E89393"*/
    }

    return(
        <div>
            <h3 style ={mystyle}>Restore Items</h3>
            {
                props.newarr1.map((item) => (
                    <p>{item.title}</p>

                )

                )
            }
        </div>
    )
}
export default Restore;
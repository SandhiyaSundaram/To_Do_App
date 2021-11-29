function Pending(props){
   
    const mystyle ={
        color : "#CB2D2D"
        /*backgroundColor : "#E89393"*/
    }
    return(
        <div>
            <h3 style ={mystyle}>The task which are pending</h3>
            {
                props.newarr.map((item) => (
                  
                    <div>
                          <p>{item.title}</p>
                         <button  class="btn btn-dark" onClick={()=>props.fun1(item.id)} >Completed</button>
                         <button type="button" class="btn btn-dark" onClick={()=>props.fun2(item.id)}>Delete</button>

                    </div>

                   
                )
            
                )

            }
           

       
        </div>
    )
}
export default Pending;
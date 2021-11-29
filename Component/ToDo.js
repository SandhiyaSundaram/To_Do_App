import React from 'react';
import Pending from './Pending';
import Completed from './Completed';
import Deleted from './Deleted';
import Restore from './Restore';

let todos =[
    {
        "title": "Asignment Submission",
        "status": true,
        "id": 1,
        "deleted": false ,
        "restored":true
    },
    {
        "title": "Dinner with Friends",
        "status": false,
        "id": 2,
        "deleted": false,
        "restored":true
    },
    {
        "title": "Doing Exercise",
        "status": true,
        "id": 3,
        "deleted": false,
        "restored":true
    },
    {
        "title": "Shopping Accessories",
        "status": false,
        "id": 4,
        "deleted": false,
        "restored":true
    },
    {
        "title": "Buying Veggies",
        "status": true,
        "id": 5,
        "deleted": false,
        "restored":true
    }
]
class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            todos:todos
        }
    }
    getPendingItem = () =>{
        /*let newarr = []
            for (let i = 0; i < this.state.todos.length; i++){
                if(this.state.todos[i].status === false)
                newarr.push(this.state.todos[i].title)
            } */
        const newarr = this.state.todos.filter(
            (item) => item.status === false
        )    
        return newarr
    }
    getCompletedItem = () =>{
        const newarr1 = this.state.todos.filter(
            (item) => item.status === true
        )
        return newarr1 
    }
    moveToCompleted= (todoid) =>{
        const temp = [...this.state.todos];
        const temp1 =  temp.find((item) => item.id === todoid)
        console.log(temp1)
        temp1.status=(!temp1.status)
        console.log(temp)
        this.setState({todos:temp})
    }   
    moveToDeleted= (todoid) =>{
        const temp = [...this.state.todos];
        const temp1 =  temp.find((item) => item.id === todoid)
        console.log(temp1)
        temp1.deleted=(!temp1.deleted)
        console.log(temp)
        this.setState({todos:temp})
    }
    moveToRestore= (todoid) =>{
        const temp = [...this.state.todos];
        const temp1 =  temp.find((item) => item.id === todoid)
        console.log(temp1)
        temp1.restored=(!temp1.restored)
        console.log(temp)
        this.setState({todos:temp})
    }
    getDeletedItem =() =>{
        const newarr = this.state.todos.filter(
            (item) => item.deleted === true
        )
        return newarr
    }
    restoreItem =() =>{
        const newarr = this.state.todos.filter(
            (item) => item.restored === false
        )
        return newarr
    }
    render(){        
        return( 
            <div>
               <div class="card-group">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title">ToDo - Pending List </h1>
                            <p class="card-text">
                            <Pending newarr = {this.getPendingItem()} fun1 ={this.moveToCompleted} fun2 ={this.moveToDeleted}>
                            </Pending></p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title">ToDo - Completed List</h1>
                            <p class="card-text">
                            <Completed newarr1 = {this.getCompletedItem()}>
                            </Completed></p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title">ToDo - Deleted List</h1>
                            <p class="card-text">
                            <Deleted newarr3 = {this.getDeletedItem()} fun3 ={this.moveToRestore}>
                            </Deleted></p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title">ToDo - Restore List</h1>
                            <p class="card-text">
                            <Restore newarr1 = {this.restoreItem()}>
                            </Restore></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ToDo;
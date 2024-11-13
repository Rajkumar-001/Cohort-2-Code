 export function CreateTodos(){
    return <div>
        <input style={
            {
                padding:10,
                margin:10
            }
        } type="text" placeholder="Title" ></input>
        <br></br>
        <br></br>
        <input style={
            {
                margin:10,
                padding:10
            }
        } type="text" placeholder="Description" ></input>
        <br></br>
        <br></br>
        <button input style={
            {
                margin:10,
                padding:10
            }
        }> Add a todo</button>
        <br></br>
        <br></br>
    </div>
}
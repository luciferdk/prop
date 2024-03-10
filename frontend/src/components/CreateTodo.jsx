

export function CreateTodo() {
    

    return <div>
    <input type="text" onChange={function (params) {
        
    }} placeholder="title"></input>
    <input type="text" placeholder="description"></input>

    <button onClick={()=> {
        fetch("http://localhost:3000/todos"),{
            method:"POST",
            body: JSON.stringify( {
                title: title,
                description: "description"
            }),
            headers: {
                "Content-type": "application/json"
            }
        }
        .then(async function(res){
            const json = await res.json();
            alert("Todo added");
        })
    }}>Add New Todo</button>
    </div>
}

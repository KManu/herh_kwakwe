function Users({neighbours, removeNeighbour}){

    // const removeNeighbourFunction = ()=>{
    //     console.log('hi')
    //     console.log(removeNeighbour)
    // }

    return(
        <>
          {neighbours.map((neighbour)=>
              <div key={neighbour.id}>
                  <h3>Name: {neighbour.name}</h3>
                  <h4>Phone: {neighbour.phoneNumber}</h4>
                  <p>Location: {neighbour.location.toString()}</p>
                  <button onClick={()=>removeNeighbour(neighbour.id)}>Remove Neighbour</button>
              </div>
          )}
        </>
    )
}

export default Users
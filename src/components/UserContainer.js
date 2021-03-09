import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table from './Table'

function Container(){
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getRandomUsers()
    }, [])


    //&seed=seed if the same data is needed for testing 
    async function getRandomUsers(){
        const result = await axios.get('https://randomuser.me/api/?results=20&inc=name,phone,email,location,picture&seed=seed&nat=us,gb,fr')
        setUsers(result.data.results)
    }

    function getSearchResults(){
        console.log('Searching for:', search)
        const searchedUser = users.filter(user => search.indexOf(user.name.first)> -1 || search.indexOf(user.name.last)> -1)
        console.log(searchedUser)
        setUsers(searchedUser)
    }

    function clearSearch(){
        setSearch("")
        getRandomUsers()
    }

    function handleInputChange(event){
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        getSearchResults()
    }

    function sortName(){
        console.log('SORTING!!!!')
        const sorted = users.sort( function(item1, item2){
            if(item1.name.last+item1.name.first < item2.name.last+item2.name.first ){
                return -1
            }
            if (item1.name.last+item1.name.first > item2.name.last+item2.name.first){
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setUsers([...sorted])
    }

    function sortNameA(){
        console.log('SORTING!!!!')
        const sorted = users.sort( function(item2, item1){
            if(item1.name.last+item1.name.first < item2.name.last+item2.name.first ){
                return -1
            }
            if (item1.name.last+item1.name.first > item2.name.last+item2.name.first){
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setUsers([...sorted])
    }

    function sortEmail(){
        console.log('SORTING!!!!')
        const sorted = users.sort( function(item1, item2){
            if(item1.email < item2.email){
                return -1
            }
            if (item1.email > item2.email){
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setUsers([...sorted])
    }
    function sortEmailA(){
        console.log('SORTING!!!!')
        const sorted = users.sort( function(item2, item1){
            if(item1.email < item2.email){
                return -1
            }
            if (item1.email > item2.email){
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setUsers([...sorted])
    }

    function sortNumber(){
        console.log('SORTING!!!!')
        const sorted = users.sort( function(item1, item2){
            if(item1.phone < item2.phone){
                return -1
            }
            if (item1.phone > item2.phone){
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setUsers([...sorted])
    }

    function sortNumberA(){
        console.log('SORTING!!!!')
        const sorted = users.sort( function(item2, item1){
            if(item1.phone < item2.phone){
                return -1
            }
            if (item1.phone > item2.phone){
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setUsers([...sorted])
    }

    return(
        <div className="container" style={{marginTop: "20px", marginBottom: "20px"}}>
            {/* search function */}
            <div className="input-group mb-3 float-center">
                <input value={search} onChange={handleInputChange} type="text" className="form-control" placeholder="Filter by Employee Name" aria-label="Recipient's name" aria-describedby="button-addon2"/>
                <button onClick={handleFormSubmit} className="btn btn-outline-primary" type="submit" id="button-addon2"><i class="fa  fa-filter"></i>Filter</button>
                <button className="btn btn-outline-primary" onClick={clearSearch}><i class="fa fa-undo"></i>UnFilter</button>
                
            </div>
            <div style={{display: "flex", justifyContent: "center", color: "black"}}>
                <p><small>Hover to the right of the Name, Phone Number or Email to Sort Employees(Ascending or Descending)</small></p>
            </div>
            <Table list={users} sortName={sortName} sortNameA={sortNameA} sortEmail={sortEmail} sortEmailA={sortEmailA} sortNumber={sortNumber} sortNumberA={sortNumberA}/>
        </div>
    )
}

export default Container
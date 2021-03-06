import Styles from "./Search.module.css"

import { useNavigate } from "react-router-dom"



export function Search({search}){

    
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate("/?search=" + search)

    }
   
    

    


    return(
        <form className= {Styles.searchContainer} onSubmit={handleSubmit}>
            <div className = {Styles.searchBox}>
                <input 
                className= {Styles.searchInput} 
                type="text" 
                placeholder="Search Movie..."
                aria-label="search" 
                value={search} 
                onChange={(e)=>{
                    const value = e.target.value.toLowerCase();
                    navigate("/?search=" + value)
                }}>                    
                </input>
                <p className={Styles.searchButtom}>🔍</p>
                
            </div>
        </form>        
    )

    

}
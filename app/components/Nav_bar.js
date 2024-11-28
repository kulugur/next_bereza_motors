
import Link from "next/link"
import { FormEvent } from 'react'
const Nav_bar = () =>{
    return(
        
        <div className="nav_2">
			<div className="reg">
				<Link  className="reg_btn"href="/profile">Личный кабинет</Link>
				<Link  className="reg_a" href="/registration">Регистрация</Link>
				
				
			</div>
            <div className="nav_icon">
				<img className="img_icon" src="img/basket.png" alt=""width="24" height="24"/>
				<img className="img_icon" src="img/list.png" alt="" width="24" height="24"/>
			</div>
            <div >
				<form> 
  					<input className="nav_search search"type="search" name="text"  placeholder="Что вы хотите найти?"/>
  					<input type="submit" name="submit" className="search_btn" value="Найти"/>
				</form>
			</div>
            <div>
				<h2 className="nav_h2">Все марки</h2>
			</div>
            <div>
				<form> 
  					<input className="nav_search search"type="search" name="text"  placeholder="Что вы хотите найти?"/>
  					<input type="submit" name="submit" className="search_btn" value="Найти"/>
				</form>
			</div>
            
        </div>  
        
		
      
    )}
export default Nav_bar    
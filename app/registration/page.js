"use client"
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios';
import Link from "next/link"

export default function RegisterPage() {
	const router = useRouter()

	async function registration(event) {
    event.preventDefault()
 
    	const formData = new FormData(event.currentTarget)
    	const email = formData.get('email')
    	const password = formData.get('password')
		const phone = formData.get('phone')
		formData.set("is_active" , true)
		formData.set("is_superuser", false)
		formData.set("is_verified", false)
		const config = {
			"email": email,
			"password": password,
			"is_active": true,
			"is_superuser": false,
			"is_verified": false,
			"phone": phone
		  }
		try {  
    		const response = await axios.post('http://127.0.0.1:8000/auth/register',config,
      		{
          	headers:  { 'Content-Type': 'application/json' }
      		},
  			)

		
  			if (response.statusText) {
      		router.push('/auth')
    		} else {
      		
    		}
		} catch (error) {
			if(error.response.data.detail == "REGISTER_USER_ALREADY_EXISTS"){
				router.push('/auth')
			}
				
			
		  }	
  	}
 
  	return (
	<>
	<div className="exit"><Link  href="/">
		<img src="img/exit.png" alt=""width="24" height="24"/>
		</Link>  
		 </div>
		   
	<div className="login">
	
		<form className="login_form" onSubmit={registration} >
			<div className="row_logo">
				<h5>ЛИЧНЫЙ КАБИНЕТ</h5>
			  </div>
			  < div className="flex-row">
				<input id="phone" name="phone" className='lf--input' placeholder='Введите номер телефона' type='text'/>
			  </div>
			  <div className="flex-row">
				<input id="email" name="email" className='lf--input' placeholder='Введите E-mail' type='text'/>
			  </div>
			  <div className="flex-row">
				<input id="password" name="password" className='lf--input' placeholder='Введите пароль' type='password'/>
			  </div>
			  <div className="flex-row">
				
				
				<button  className='lf--submitReg' type="submit">ЗАРЕГЕСТРИРОВАТЬСЯ</button>
			  </div>
		  </form>
	
		  
</div>	
<div className="foter">
		
		</div>
</>
  )
}




'use client'
import { useParams } from 'next/navigation'
import Link from "next/link"

async function  fetcBrend(params){
  console.log(params)
  const brend =  await fetch('http://127.0.0.1:8000/'+decodeURIComponent(params.name))
  const res = await brend.json()
  console.log(res)
  return res
}



export default  async function brend( ) {
  const params = await useParams()
  const brend = await fetcBrend(params);
  
   
 
     

    return (
      <div key='Product_name'>
          {brend.map(al =>(
            <div className='detail'>
                    <h1>{al.Manufacturer}</h1>
                    <p>{ al.Model}</p>
                    <p>{ al.Product_name}</p>
                    <p>{ al.Price} Руб</p>
                   
                    <Link  href={al.Image}><img src={al.Image}  width="150" height="200"></img></Link>
                    <div className='contener_flex'  key='Product_buy'>
                    <button
                        type="submit"
                        className="lf--submit"
                        
                      > Купить</button>
                      <button
                        type="submit"
                        className="lf--submit"
                       
                        > В карзину</button>
                      
                    </div> 
                    
				                
				                 
				           
            </div> 
		            ))}; 
                
        </div>     
      
    )
    
  }
  
'use client'
import { useParams } from 'next/navigation'
import Link from "next/link"
import { useState, useEffect } from 'react';

export default function  fetcBrend(){
  const [brend, setBrend] = useState(null);
  const params = useParams()

  async function setBasket_key(e) {


        const token = localStorage.getItem('token');
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/set_basket/${e.target.value}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
  
  }
 



   
    
 
  
  useEffect(() => {
    async function fetchUser() {
      
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL+`/` +decodeURIComponent(params.name)}`)
      if (res.status == 200) {
        const json = await res.json();
        setBrend(json);
   
    }
  }
    fetchUser();
  }, []);
  
 
  
 


 

    return (<><div className="exit"><Link  href="/">
      <img src="../img/exit.png" alt=""width="24" height="24"/>
      </Link>  
       </div>
    {brend && (brend.map(al =>(<div key={al.key} className='detail'>
             <h1 key={al.key + 'Manufacturer'} >{al.Manufacturer}</h1>
              <p key={al.key + 'Model' }>{ al.Model}</p>
              <p key={al.key + 'Product_name' }>{ al.Product_name}</p>
               <p key={al.ke + 'Price'}>{ al.Price} Руб</p>

               <Link  key={al.key + 'link'} href={al.Image}><img src={al.Image}  width="150" height="200"></img></Link>
                    <div className='contener_flex widh_35'   key={al}>
                    <button
                     key={al.key + 'button'}
                        type="submit"
                        className="lf--submit"
                        
                      > Купить</button>
                      <button
                        type="button"
                        value={al.key}
                        className="lf--submit"
                        onClick={setBasket_key}
                        > В карзину</button>
                      
                    </div> 

               </div> 
      
    ) ))} </>
  )}
           
'use client'

import { useState, useEffect } from 'react';
import Link from "next/link"
export default function  BasketComponent() {
    const [basket, setBasket] = useState(null);
    const [res, setRes] = useState(null);
    useEffect(() => {
        async function fetchBasket() {
            const token = localStorage.getItem('token');
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_basket`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });
          if (res.status == 200) {
            const json = await res.json();
            setBasket(json);
       
        }
      }
      fetchBasket();
      }, []);
console.log("basket",basket)

return(<><div className="exit"><Link  href="/">
    <img src="../img/exit.png" alt=""width="24" height="24"/>
    </Link>
    <h1>Карзина</h1>  
     </div>
  {basket && (basket.map(al =>(<div key={al.key} className='detail'>
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
                   
                    <p>{"Шт-"+al.quantity}</p>
                    <p>{"Цена-"+ (al.quantity *  Number(al.Price))}</p>
                    
                  </div> 

             </div> 
    
  ) ))} </>

)

}
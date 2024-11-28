// @refresh reset
import Nav_brend from './components/Naw_brend'
import Nav_bar from './components/Nav_bar'
import Auto_box from'./components/Auto_box'

async function fetcBrends(){
  const brend = await fetch('http://127.0.0.1:8000/brands')
  const res = await brend.json()
console.log(res)
  return res
}





 export default async function Home() {
 
  return (
  <div>
    <div className='contener_flex'>
      

    <Nav_brend/>
    <Nav_bar/>
    
    </div>
    <Auto_box/>
    <div className="foter">
		
	</div>
  </div>  
    
  )
}; 

// @refresh reset
import Nav_brend from './components/Naw_brend'
import Nav_bar from './components/Nav_bar'
import Auto_box from'./components/Auto_box'




//1


 export default function Home() {
 
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

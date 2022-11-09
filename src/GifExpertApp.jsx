
import {useState} from 'react'


// ARCHIVO DE BARRIL
import { GifGrid,AddCategory } from './components'
export const GifExpertApp = () => {

    const [categories, setcategories] = useState([  'One Punch'  ])
  
    const onAddCategory = (newCategory) =>{
      
      if(categories.includes(newCategory)) return;

      if (newCategory) 
        setcategories([...categories, newCategory ]);

    }

    return (
    <>

    <h1>GifExpertApp</h1>
    <AddCategory  onNewCategory= { event => onAddCategory(event) } ></AddCategory>
        { categories.map( category => (<GifGrid key={category} category = {category}></GifGrid>)
       
        )}
       
    </>
  )
}

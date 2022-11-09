import { useState } from "react";



export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (event) => {

        event.preventDefault();
        //para evitar nulos
        if (inputValue.trim().length <= 1) return;

    //callback
        //setCategories(  categories =>  [ ...categories,inputValue ]);
        onNewCategory(inputValue.trim() );
        //Limpia caja de texto
        setInputValue('');
        
    }

  return (
    <form onSubmit={onSubmit}>
     <input type="text" placeholder="Buscar Gifs" value = {inputValue} onChange= { onInputChange }></input>

    </form>
  )
}

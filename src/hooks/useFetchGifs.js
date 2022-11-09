import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
 

      const [images, setimages] = useState([]);
      const[IsLoading, setIsLoading] = useState(true);


    const GetImages = async () => {
        const newImages = await getGifs(category);
        setimages(newImages);
        setIsLoading(false);
    }

    // se ejecuta ya que se construye componente
    useEffect(() => {
        GetImages();

    }, [])


    return {
        images,
        IsLoading
    }

}

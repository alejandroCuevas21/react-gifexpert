


export const getGifs = async(category) =>{
    
    const url =  `https://api.giphy.com/v1/gifs/search?api_key=nZMd05slUc03xZ81JzMxxGp9qI6VBx78&q=${ category }&limit=10`;
    const Resp = await fetch(url);
    const {data} = await Resp.json();

    const gifs = data.map(img=>  ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

    }))

   return gifs;
        
    } 
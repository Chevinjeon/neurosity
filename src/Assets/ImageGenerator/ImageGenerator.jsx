import React from 'react'
import './ImageGenerator.css'
import default_image from './default_image.svg'

const ImageGenerator = () => {

    const [image_url, setImage_url] = useState("/")

    const imageGenerator = async () =>{

        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:
                    "Bearer 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",
                    "User-Agent":"Chrome",
                },
                body:JSON.stringify({
                    prompt:`${inputRef.current.value}`,
                    n:1,
                    size:"512x512",
                }), 
            }
        );
        let data = await response.json();
        console.log(data);
 

    }


  return (
    <div className='ai-image-generator'>
        <div className="header">Emotion <span>Visualization</span></div>
        <div className="img-loading">
            <div className="image"><img src={image_url==="/"?default_image:image_url} alt="" /></div>
        </div>
        <div className="generate-btn" onClick={()=>{imageGenerator()}}>Generate</div>

    </div>
  )
}

export default ImageGenerator

import { useEffect, useRef } from "react"
import { addImagenPhotographer } from '../../services/photographer'
import './UploadWidget.css'
    
 function UploadWidget({dataImagen}) {

    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(() => {
        cloudinaryRef.current =window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dzewpalci',
            uploadPreset: 'preset_pabs'
        }, async function (error,result){
            if (result && result.event === "success") {
                console.log(dataImagen)
                console.log('Done! Here is the image info: ', result.info.url);
                dataImagen.url = result.info.url
                await addImagenPhotographer(dataImagen)
            }
        })
    },[dataImagen])
    return (
        <button className= "button" onClick={ () => widgetRef.current.open()}>
            Subir
        </button>
    )

}

export default UploadWidget
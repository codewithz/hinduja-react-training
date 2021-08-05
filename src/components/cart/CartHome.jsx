import React,{useState} from 'react'
import ProductComponent from './ProductComponent'

export default function CartHome() {

    const data=['A','B','C','D','E'];

    const [tags,setTags]=useState(data);

    return (
        <div>
            <ProductComponent />
          
            <ul>
                {
                    tags.map(element =>
                    <li>{element}</li>
                        )
                }
            </ul>
            
            
        </div>
    )
}

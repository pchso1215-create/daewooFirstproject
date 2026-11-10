import { useState } from 'react';

import {sizeFunc} from './sizeFunc';
import Shoes from '../pages/shoes';

function SizeSelector(){
    const [sizeList, setSizeList] = useState(250);
    const shoesSize = sizeFunc(220, 270, 5)

    return(
        <div className='sizeSelect'>
            {shoesSize.map((size)=>(
                <button 
                key={size}
                onClick={()=>setSizeList(size)}
                style={{
                    backgroundColor:sizeList == size ? '#333' : '#fdfdfd' ,
                    color:sizeList == size ? '#fdfdfd' : '#333'
                }}
                >{size}</button>
            ))}
        </div>
    )
}

export default SizeSelector
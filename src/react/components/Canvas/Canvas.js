import React from 'react'
import ArrayBar from './ArrayBar'
import { getArraySelector } from '../../../redux/selectors/StateSelectors'

export default function Canvas() {
    
    return (
        <div className="canvas">
            <ArrayBar></ArrayBar>
        </div>
    )
}

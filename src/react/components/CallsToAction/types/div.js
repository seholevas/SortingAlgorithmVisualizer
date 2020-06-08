import React from 'react'
import { BaseCTA } from "../BaseCTA";

export const RangedSliderCTA = ({
    min = "1",
    max = "100",
    className,
    ...props,
}) =>(
    <BaseCTA tag="div" className={className}{...props}>
    
    </BaseCTA>
)
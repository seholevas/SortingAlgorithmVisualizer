import React from 'react'
import { BaseCTA } from "../BaseCTA";

export const RangedSliderCTA = ({
    // id,
    min = "1",
    max = "100",
    className,
    onChange,
    ...props,
}) =>(
    <BaseCTA tag="input" type="range" className={className} min={min} max={max}  onChange={onChange}{...props}>
    </BaseCTA>
)
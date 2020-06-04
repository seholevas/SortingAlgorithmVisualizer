import React from 'react'
import { BaseCTA } from "../BaseCTA";

export const ButtonCTA = ({
    className,
    onClick,
    ...props,
}) =>(
    <BaseCTA className={className} onClick={onClick}{...props}>
    </BaseCTA>
)
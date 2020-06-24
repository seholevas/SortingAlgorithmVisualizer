import React from 'react'
import { BaseCTA } from "../BaseCTA";
import "../../../../ui-kit/custom/button.css"

export const ButtonCTA = ({
    className,
    onClick,
    ...props,
}) =>(
    <BaseCTA className={className, "btn btn-primary"} onClick={onClick}{...props}>
    </BaseCTA>
)
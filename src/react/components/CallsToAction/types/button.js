import React from 'react'
import { BaseCTA } from "../BaseCTA";
import "../../../../ui-kit/custom/buttons.css"

export const ButtonCTA = ({
    className,
    onClick,
    ...props,
}) =>(
    <BaseCTA className={className, "btn btn-primary btn-circle"} onClick={onClick}{...props}>
    </BaseCTA>
)
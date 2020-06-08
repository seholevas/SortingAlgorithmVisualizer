import React from 'react'
import { BaseCTA } from "../BaseCTA";

export const SelectCTA = ({
    className,
    onChange = ()=>{alert("onChange is not set!")},
    ...props,
}) => (
        <BaseCTA tag="select" className={className} onChange={onChange}{...props}>
            <option value="mergesort">MergeSort</option>
            <option value="selectionsort">SelectionSort</option>
            <option value="bubblesort">BubbleSort</option>
        </BaseCTA>
    )
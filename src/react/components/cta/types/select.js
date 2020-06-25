import React from 'react'
import { BaseCTA } from "../BaseCTA";
import "../../../../ui-kit/custom/choicebox.css"

export const SelectCTA = ({
    className,
    onChange = ()=>{alert("onChange is not set!")},
    ...props,
}) => (
        <BaseCTA tag="select" className={className + " choicebox"} onChange={onChange}{...props}>
            {/* <option value="mergesort">MergeSort</option> */}
            <option value="bubblesort">Bubble Sort</option>
            <option value="insertionsort">Insertion Sort</option>
            <option value="selectionsort">Selection Sort</option>
        </BaseCTA>
    )
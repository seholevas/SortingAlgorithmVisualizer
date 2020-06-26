import React from 'react'
import { BaseCTA } from "../BaseCTA";
import "../../../../ui-kit/custom/choicebox.css"

export const SelectCTA = ({
    className,
    onChange = () => { alert("onChange is not set!") },
    ...props,
}) => (
        <BaseCTA tag="select" className={className + " choicebox"} onChange={onChange}{...props}>
            <option value="bubblesort">Bubble Sort</option>
            {/* <option value="bubblesort">Cocktail Sort</option> */}
            <option value="insertionsort">Insertion Sort</option>
            {/* <option value="mergesort">Merge Sort</option> */}
            {/* <option value="quicksort">Quick Sort</option> */}
            <option value="selectionsort">Selection Sort</option>
        </BaseCTA>
    )
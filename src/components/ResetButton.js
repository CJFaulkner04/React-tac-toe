import React from 'react'

import "./ResetButton.css"

export const ResetButton = ({resetBoard}) => {
    return (
        <button class="reset" onClick={resetBoard}>Reset</button>
    )
}
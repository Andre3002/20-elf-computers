import React from 'react'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default function Total(props) {

    return (
        USCurrencyFormat.format(
            Object.keys(props.selected).reduce(
                (acc, curr) => acc + props.selected[curr].cost,
                0))
    )
}

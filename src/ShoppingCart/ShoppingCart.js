import React from 'react'
import SelectedItem from '../SelectedItem/SelectedItem'
import Total from '../Total/Total'

export default function ShoppingCart(props) {

    const summary = Object.keys(props.selected).map((feature, idx) => {
        return (
            <SelectedItem
                feature={feature}
                idx={idx}
                selected={props.selected}
                updateFeature={props.updateFeature}
                features={props.features}
            />
        )
    });

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    <Total
                        selected={props.selected}
                    />
                </div>
            </div>
        </section>
    )
}

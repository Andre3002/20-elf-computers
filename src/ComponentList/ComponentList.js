import React from 'react'
import Component from '../Component/Component'
import './ComponentList.css'
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default function ComponentList(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        return (
            <Component
                feature={feature}
                idx={idx}
                selected={props.selected}
                updateFeature={props.updateFeature}
                features={props.features}
            />
        )
    });

    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}

ComponentList.defaultProps = {
    features: []
}

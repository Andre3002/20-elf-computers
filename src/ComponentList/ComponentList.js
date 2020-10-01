import React from 'react'
import Component from '../Component/Component'
import './ComponentList.css'

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

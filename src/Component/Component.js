import React from 'react'
import Form from '../Form/Form'

export default function Component(props) {

    const featureHash = props.feature + '-' + props.idx;
    const options = props.features[props.feature].map(item => {
        return (
            <Form
                feature={props.feature}
                item={item}
                selected={props.selected}
                updateFeature={props.updateFeature}
                features={props.features}
            />
        )
    }); 

    return (
        <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{props.feature}</h3>
            </legend>
            {options}
        </fieldset>
    );
}
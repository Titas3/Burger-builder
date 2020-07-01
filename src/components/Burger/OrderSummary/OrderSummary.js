import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}:</span>
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>Delicious burger with the following ingredients</p>
      <ul>{ingredientSummary} </ul>
      <p>
        <strong>Total price: {props.price}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button clicked={props.cancel} style={{ color: '#5c9210' }}>
        {' '}
        CANCEL
      </Button>
      <Button clicked={props.continue} style={{ color: '#944317' }}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;

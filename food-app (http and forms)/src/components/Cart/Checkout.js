import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const [formCheck, setFormCheck] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const isEmpty = (e) => {
    return e.trim() === "";
  };
  const isHasFiveElement = (e) => {
    return e.trim().length === 5;
  };

  const confirmHandler = (event) => {
    event.preventDefault();

    const isNameValid = isEmpty(nameRef.current.value);
    const isStreetValid = isEmpty(streetRef.current.value);
    const isPostalValid = isHasFiveElement(postalRef.current.value);
    const isCityValid = isEmpty(cityRef.current.value);

    const allFormTrue =
      !isNameValid && !isStreetValid && isPostalValid && !isCityValid;

    setFormCheck({
      name: !isNameValid,
      street: !isStreetValid,
      postalCode: isPostalValid,
      city: !isCityValid,
    });
    if (!allFormTrue) {
      console.log("bro false");
      return;
    }
    props.onConfirm({
      name: nameRef.current.value,
      street: streetRef.current.value,
      postalCode: postalRef.current.value,
      city: cityRef.current.value,
    });
  };

  const NameCss = `${classes.control} ${formCheck.name ? "" : classes.invalid}`;
  const streetCss = `${classes.control} ${
    formCheck.street ? "" : classes.invalid
  }`;
  const postalCodeCss = `${classes.control} ${
    formCheck.postalCode ? "" : classes.invalid
  }`;
  const cityCss = `${classes.control} ${formCheck.city ? "" : classes.invalid}`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={NameCss}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formCheck.name && <p>Name Not be empty</p>}
      </div>
      <div className={streetCss}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formCheck.street && <p>street Not be empty</p>}
      </div>
      <div className={postalCodeCss}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formCheck.postalCode && (
          <p>Postal Code should consist of 5 element</p>
        )}
      </div>
      <div className={cityCss}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formCheck.city && <p>city Not be empty</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;

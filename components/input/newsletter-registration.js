import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailInputRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();

    const userEmail = emailInputRef.current.value;
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: userEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((data) => {
        throw new Error(data.message || 'Something went wrong!');
      });
    }).then((data) => {
      alert(data.message);
    }).catch((error) => {
      alert(error.message);
    });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailInputRef}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;

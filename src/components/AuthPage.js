import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { signIn, signUp } from '../services/fetch-utils.js';

export default function AuthPage() {
  const [formSignInEmail, setFormSignInEmail] = useState();
  const [formSignInPassword, setFormSignInPassword] = useState();
  const [formSignUpEmail, setFormSignUpEmail] = useState();
  const [formSignUpPassword, setFormSignUpPassword] = useState();

  return (
    <div>
      <form>
        <h3>Sign In</h3>
        <label>
          Email
          <input
            required
            type="email"
            value={formSignInEmail}
            onChange={(e) => setFormSignInEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            required
            type="password"
            value={formSignInPassword}
            onChange={(e) => setFormSignInPassword(e.target.value)}
          />
        </label>
        <Button>Sign In</Button>
      </form>
    </div>
  );
}

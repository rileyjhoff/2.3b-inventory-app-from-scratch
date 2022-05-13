import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { signIn, signUp } from '../services/fetch-utils.js';

export default function AuthPage({ setUser }) {
  const [formSignInEmail, setFormSignInEmail] = useState();
  const [formSignInPassword, setFormSignInPassword] = useState();
  const [formSignUpEmail, setFormSignUpEmail] = useState();
  const [formSignUpPassword, setFormSignUpPassword] = useState();

  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signIn(formSignInEmail, formSignInPassword);
    setUser(user);
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUp(formSignUpEmail, formSignUpPassword);
    setUser(user);
  }

  return (
    <div className="auth-page">
      <h1>Log In</h1>
      <div className="auth">
        <form onSubmit={handleSignIn}>
          <input
            required
            type="email"
            value={formSignInEmail}
            onChange={(e) => setFormSignInEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            required
            type="password"
            value={formSignInPassword}
            onChange={(e) => setFormSignInPassword(e.target.value)}
            placeholder="Password"
          />
          <Button type="submit">Sign In</Button>
        </form>
        <form onSubmit={handleSignUp}>
          <input
            required
            type="email"
            value={formSignUpEmail}
            onChange={(e) => setFormSignUpEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            required
            type="password"
            value={formSignUpPassword}
            onChange={(e) => setFormSignUpPassword(e.target.value)}
            placeholder="Password"
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  );
}

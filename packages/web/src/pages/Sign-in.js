import React from "react";

export default function SignIn() {
  return (
    <form action="/authenticate" method="POST">
      <fieldset>
        <label for="email">E-mail</label>
        <input type="text" id="email" name="email" inputmode="email" autocomplete="username" />
      </fieldset>
      <fieldset>
        <label for="password">Senha</label>
        <input type="password" id="password" name="password" autocomplete="current-password" />
      </fieldset>
      <button type="submit">Entrar</button>
    </form>
  );
}
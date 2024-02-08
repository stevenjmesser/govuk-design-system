---
title: Password input
description: Help users accessibly enter passwords
section: Components
aliases: pass word, pass phrase
backlogIssueId: 240
layout: layout-pane.njk
---

{% from "_example.njk" import example %}

Help users to accessibly create and enter passwords.

{{ example({ group: "components", item: "password-input", example: "default", html: true, nunjucks: true, open: false, size: "m", loading: "eager" }) }}

## When to use this component

You should use this component whenever you need users to create or enter a password.

Before using this pattern, you should also read the guidance on [asking users for passwords](/patterns/passwords/) and [creating user accounts](/patterns/create-accounts/).

## When not to use this component

Do not use this component if the information being asked for isn't a password.

If you're asking for other security information, such as multi-factor authentication codes, answers to security questions, or other personally-identifiable information, use a [text input](/components/text-input/).

## How it works

The password input component allows users to enter passwords and, optionally, make the password visible in plain text. This allows users to visually check their input before submitting it, reducing errors and allowing users to use less memorable and more secure passwords.

### Error messages

{{ example({ group: "components", item: "password-input", example: "error", html: true, nunjucks: true, open: false, size: "m", loading: "eager" }) }}

- Do not indicate whether the username or password was incorrect, avoid brute forcing data
- Should clear the password input rather than autofilling with the failed value
- How errors should work if two password fields need to match and don't

### Hide passwords by default

Users might be in a public space when entering or creating a password, so you should hide passwords by default.

When there are two or more password inputs on a page, the labels and 'show' and 'hide' toggles for each password input must be different.

For example, you can label the input "Password" as "show password" and label the second input "Re-enter password" as "show re-entered password".

<div class="app-wcag-22" id="wcag-interact-show-password" role="note">
  {{ govukTag({
    text: "WCAG 2.2",
    classes: "app-tag"
  }) }}
  <p>Make sure any ‘show password’ button is at least 24px by 24px in size, or have adequate spacing. This is to make sure users can easily interact with the button. This relates to WCAG 2.2 success criterion <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">2.5.8 Target Size (minimum)</a>.</p>
</div>

### Reset the input's type before submission

When the form is submitted, the password input should automatically change its `type` to `password`, if it isn't already.

This is to prevent browsers from remembering it as a previously provided value and potentially displaying it as an autofill option on non-password inputs.

### Use the autocomplete attribute

Use the `autocomplete` attribute on password inputs to help users complete forms more quickly. This lets you indicate to browsers and password managers what kind of password is needed so they can autofill the information on a user’s behalf.

Set the `autocomplete` attribute to `new-password` if the user is creating a password. Otherwise, use `current-password`.

Providing an `autocomplete` attribute is required to meet [WCAG 2.2](https://www.w3.org/TR/WCAG22/)'s [accessible authentication](https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum) criterion.

Note that even if `autocomplete` is omitted or set to `off`, many browsers will ignore this and continue to autofill password inputs.

### Allow users to paste their password

Do not disable paste on password fields. People may have very good reasons why they want to paste their password, for example if they’re using a password manager.

<div class="app-wcag-22" id="wcag-copy-paste-password" role="note">
  {{ govukTag({
    text: "WCAG 2.2",
    classes: "app-tag"
  }) }}
  <p>You must allow users to copy and paste or autofill their password. Avoid making the user memorise or transcribe a password from somewhere else in order to use your service. This is to comply with WCAG 2.2 success criterion <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">3.3.8 Accessible Authentication (Minimum)</a>.</p>
</div>

### Avoid restricting the user's input

Don't use the `maxlength` attribute. The attribute doesn't provide feedback to users that their text input has been truncated, and this is especially true where the text has been pasted from elsewhere or autofilled by a password manager. If a maximum length exists due to technical limitations, return [a visible error message](/patterns/validation/) instead.

- Also do not restrict allowed characters

### Do not spellcheck or autocapitalise the user's input

Some browsers may automatically change what the user is typing when the input's text is visible, such as correcting spelling or automatically turning on upper case letters at the start of sentences.

You can tell browsers not to correct spellings by setting the `spellcheck` attribute to `false`. Doing this can also prevent ['spell-jacking'](https://www.otto-js.com/news/article/chrome-and-edge-enhanced-spellcheck-features-expose-pii-even-your-passwords), where spell checking tools may send text to third-party services, potentially revealing the user's password to those services.

You can tell browsers not to autocapitalise values by setting the `autocapitalize` attribute to `off`.

## Research on this component

[TODO]

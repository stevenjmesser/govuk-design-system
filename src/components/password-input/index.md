---
title: Password input
description: Help users accessibly enter passwords
section: Components
aliases: pass word, pass phrase
backlogIssueId: 240
layout: layout-pane.njk
---

{% from "_example.njk" import example %}
{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}
{% from "govuk/components/tag/macro.njk" import govukTag %}

Help users to create and enter passwords.

{% set wcagCallout %}

{{ govukTag({
  text: "WCAG 2.2",
  classes: "app-tag"
}) }}

### New WCAG 2.2 criteria affects this pattern

To use the ‘Password input’ and meet the new Web Content Accessibility Guidelines (WCAG) 2.2 criteria, make sure that users can successfully:

- [interact with any 'show password' button](/components/password-input/#wcag-interact-show-password)
- [use `autocomplete` to securely create and enter passwords](/components/password-input/#wcag-autocomplete-attribute)
- [copy and paste into a password input](/components/password-input/#wcag-copy-paste-password)

See the full list of [components and patterns affected by WCAG 2.2](/accessibility/wcag-2.2/#components-and-patterns-affected-in-the-design-system).
{% endset %}

{{ govukInsetText({
  html: wcagCallout,
  classes: "app-inset-text"
}) }}

{{ example({ group: "components", item: "password-input", example: "default", html: true, nunjucks: true, open: false, size: "m", loading: "eager" }) }}

## When to use this component

You should use this component whenever you need users to create or enter a password.

Before using this pattern, you should also read the guidance on [asking users for passwords](/patterns/passwords/) and [creating user accounts](/patterns/create-accounts/).

## When not to use this component

Do not use this component to ask for any information other than a password.

If you’re asking for other security information, such as multi-factor authentication codes, answers to security questions or other personally identifiable information, use a [text input](/components/text-input/). Also see the [confirm a phone number](/patterns/confirm-a-phone-number/) pattern.

## How it works

This component allows users to enter a password, with an option to show what they’ve entered as plain text. This allows users to visually check their password before they submit it, which helps them reduce errors and choose passwords that are more unique and secure.

### Error messages

{{ example({ group: "components", item: "password-input", example: "error", html: true, nunjucks: true, open: false, size: "m", loading: "eager" }) }}

If a user enters a password incorrectly, do not reveal whether they got the username or password wrong. Clear any information entered into the password input.

If you choose to use a second ‘confirm password’ field, do not tell the user when the passwords entered do not match.

Revealing the source of the error can help fraudsters break into people’s accounts.

See how to handle incorrect login attempts and help users who forget their password in the [Ask users for passwords](/patterns/passwords/) pattern.

### Showing and hiding passwords

Hide passwords by default until the user chooses to show it by interacting with the ‘show’ button. Users might not be in a private space when entering or creating a password, so you should hide passwords by default.

When there are two or more password inputs on a page, the labels and ‘show’ and ‘hide’ toggles for each password input must be different.

For example, you can label the input “Password” as “show password” and label the second input “Re-enter password” as “show re-entered password”.

<div class="app-wcag-22" id="wcag-interact-show-password" role="note">
  {{ govukTag({
    text: "WCAG 2.2",
    classes: "app-tag"
  }) }}
  <p>Make sure any ‘show password’ button is at least 24px by 24px in size, or have adequate spacing. This is to make sure users can easily interact with the button. This relates to WCAG 2.2 success criterion <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">2.5.8 Target Size (minimum)</a>.</p>
</div>

### Define the input’s type as ‘password’

When the form is submitted, the password input should automatically change its `type` to `password`, if it has not already done so.

This is to prevent browsers from remembering it as a previously provided value and potentially displaying it as an autofill option on non-password inputs.

### Use the autocomplete attribute

Use the `autocomplete` attribute on password inputs to help users complete forms faster.

`Autocomplete` indicates to browsers and password managers what kind of password is needed so it can be entered for the user.

Set the `autocomplete` attribute to `new-password` if the user is creating a password. Otherwise, use `current-password`.

<div class="app-wcag-22" id="wcag-autocomplete-attribute" role="note">
  {{ govukTag({
    text: "WCAG 2.2",
    classes: "app-tag"
  }) }}
<p>Providing an `autocomplete` attribute is required to comply with WCAG 2.2 success criterion 3.3.8 <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">3.3.8 Accessible Authentication (Minimum)</a>.</p>
</div>

Many browsers will autofill password inputs, even when the `autocomplete` attribute is missing or set to `off`.

### Allow users to paste their password

Do not disable functionality to copy and paste in password fields. People may have very good reasons why they want to do this, for example if they’re using a password manager.

<div class="app-wcag-22" id="wcag-copy-paste-password" role="note">
  {{ govukTag({
    text: "WCAG 2.2",
    classes: "app-tag"
  }) }}
  <p>You must allow users to copy and paste or autofill their password. Avoid making the user memorise or transcribe a password from somewhere else in order to use your service. This is to comply with WCAG 2.2 success criterion <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">3.3.8 Accessible Authentication (Minimum)</a>.</p>
</div>

Users will not be able to copy any content from the password field when it’s set to ‘hide’ password, such as to save a password in a password manager. However, copying is possible when the field is set to ‘show’.

These are features of browser behaviour and cannot be overridden.

### Avoid restricting the user's input

See the [Ask users for Passwords](/patterns/passwords/) pattern to see how to help users choose strong, unique passwords.

Support all the characters users may need to enter a password, including numbers and symbols.

If you must place password restrictions on users, such as for technical or security reasons, be clear and consistent.

Any restrictions must be identical wherever the user creates or enters a password. If you change the restrictions over time, you must continue to support existing user passwords or ask them to set a new one.

#### Do not use `maxlength` to restrict password length

Users will not get any feedback when they’ve reached the `maxlength` and their text input has been truncated. This is particularly true when text has been pasted from elsewhere or autofilled by a password manager.

If you must restrict the length of a password, show an error message instead, using the [validation](/patterns/validation/) pattern.

### Do not spellcheck or autocapitalise the user's input

Some browsers might automatically change what the user is typing when the input’s text is visible, such as correcting spelling or automatically turning on upper case letters at the start of sentences.

You can tell browsers not to correct spellings by setting the `spellcheck` attribute to `false`.

Doing this can also prevent ['spell-jacking'](https://www.otto-js.com/news/article/chrome-and-edge-enhanced-spellcheck-features-expose-pii-even-your-passwords), where security researchers have found some spell checking tools gathering personal identifiable information, even user’s passwords, from password input fields to send to third party services.

You can tell browsers not to autocapitalise values by setting the `autocapitalize` attribute to `off`.

## Research on this component

Some browsers, password managers and similar tools will add their own show and hide functionality within the password input field. This might confuse users shown alongside this component’s show and hide button.

We investigated how this component interacts with the similar functionality and worked to prevent this duplication where possible.

<template>
  <section class="get-in-touch">
    <form class="contact-form row" action="http://localhost:3000/send-email" method="POST">
      <div class="form-field col x-50">
        <input id="name" class="input-text js-input" type="text" name="name" required>
        <label class="label" for="name">Name</label>
      </div>
      <div class="form-field col x-50">
        <input id="email" class="input-text js-input" type="email" name="email" required>
        <label class="label" for="email">E-mail</label>
      </div>
      <div class="form-field col x-100">
        <input id="message" class="input-text js-input" type="text" name="message" required>
        <label class="label" for="message">Message</label>
      </div>
      <div class="form-field col x-100 align-center">
        <input class="submit-btn btn btn--primary" type="submit" value="Submit">
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  // ...
}
</script>


<style>
/* Helpers */
.clearfix:after {
content: "";
display: table;
clear: both;
}

.align-center {
text-align: center;
}

/* Grid */
.row::after {
content: "";
display: table;
clear: both;
}
.row {
margin: -20px 0;
}
.row .col {
padding: 0 20px;
float: left;
box-sizing: border-box;
}
.row .col.x-50 {
width: 50%;
}
.row .col.x-100 {
width: 100%;
}

/* Content wrapper */
.content-wrapper {
min-height: 100%;
position: relative;
}

/* Get in touch */
.get-in-touch {
max-width: 650px;
margin: 0 auto;
position: relative;
top: 50%;
}
.get-in-touch .title {
text-align: center;
font-family: Raleway, sans-serif;
text-transform: uppercase;
letter-spacing: 3px;
font-size: 36px;
line-height: 48px;
padding-bottom: 48px;
}

/* Contact form */
.contact-form .form-field {
position: relative;
margin: 32px 0;
}
.contact-form .input-text {
display: block;
width: 100%;
height: 36px;
border-width: 0 0 2px 0;
border-color: #000;
font-size: 18px;
line-height: 26px;
font-weight: 400;
}
.contact-form .input-text:focus {
outline: none;
}
.contact-form .input-text:focus + .label,
.contact-form .input-text.not-empty + .label {
transform: translateY(-24px);
}
.contact-form .label {
position: absolute;
left: 20px;
bottom: 11px;
font-size: 18px;
line-height: 26px;
font-weight: 400;
color: #888;
cursor: text;
transition: transform .2s ease-in-out;
}
.contact-form .submit-btn {
display: inline-block;
background-color: #000;
color: #fff;
text-transform: uppercase;
letter-spacing: 2px;
font-size: 16px;
line-height: 24px;
padding: 8px 16px;
border: none;
cursor: pointer;
}

/* Note */
.note {
position: absolute;
left: 0;
bottom: 10px;
width: 100%;
text-align: center;
font-size: 16px;
line-height: 21px;
}
.note .link {
color: #888;
text-decoration: none;
}
.note .link:hover {
text-decoration: underline;
}
</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  body, ul, ol, h1, h2, h3, h4, h5, h6, p, dl, dd, dt, form, fieldset, legend, input, figure, figcaption,section {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
}

h1, h2, h3, h4, h5 {
  font-size: 16px;
  font-weight: normal;
}

i, em {
  font-style: normal;
}

b, strong {
  font-weight: normal;
}

a {
  text-decoration: none;
}

ul, ol, li {
  list-style: none;
}

input {
  outline: none;
}

img {
  vertical-align: top;
}
</style>

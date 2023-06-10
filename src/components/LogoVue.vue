<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="logo">
    <h1>
      <span class="name">Jorge</span>
      <span class="dev">{{"<"}}</span>
      <span class="slash">/</span>
      <span class="closeDev">{{">"}}</span>
      <span class="lastName">Morais</span>
    </h1>
  </div>
</template>

<script>

</script>

<style>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  color: #151515;
  margin: 0;
  position: relative;
  display: flex;
  transition: all 1s ease-in-out;
}

.name, .lastName {
  color: var(--color-primary);
  transition: all 1s ease-in-out;
}

.name {
  margin-right: 3px;
}

.lastName {
  margin-left: 3px;
}

.dev, .slash, .closeDev {
  color: #151515;
  transform-origin: center;
  transition: all 1s ease-in-out;
}

.dev:hover, .slash:hover, .closeDev:hover {
  transform: rotate(360deg);
}

.logo:hover .dev {
  transform: translateX(-113px);
}

.logo:hover .slash {
  transform: translateX(152px);
}

.logo:hover .closeDev {
  transform: translateX(154px);
}

.logo:hover .name {
  transform: translateX(33px);
}

.logo:hover .lastName {
  transform: translateX(-33px);
}
@media screen and (max-width: 425px) {
  h1 {
    font-size: 27px;
  }
}
</style>
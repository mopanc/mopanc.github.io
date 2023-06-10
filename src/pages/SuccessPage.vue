<template>
  <div class="container-success">
    <div class="content">
      <div class="checkmark"></div>
      <h1 class="title--success">Formulário enviado com sucesso!</h1>
      <a href="/" target="_blanck" class="btn btn--secondary">Voltar</a>
    </div>
  </div>
</template>

<style>
.container-success {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

.content {
  text-align: center;
}

.checkmark {
  width: 80px;
  height: 80px;
  background-color: var(--color-primary);
  border-radius: 50%;
  display: inline-block;
  position: relative;
}

.checkmark:after {
  content: '';
  position: absolute;
  width: 16px;
  height: 32px;
  border: solid white;
  border-width: 0 4px 4px 0;
  transform: rotate(45deg);
  top: 50%;
  left: 50%;
  margin-top: -18px;
  margin-left: -6px;
}

.btn--secondary {
  margin-top: 40px;
}

.title--success {
    margin-top: 40px;

}
</style>

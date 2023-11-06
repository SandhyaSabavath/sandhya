<template>
  <div class="home">
    <div class="centered">
      <img src="~/assets/profile.jpeg" alt="My Photo" />
      <h1>Sandhya Sabavath</h1>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.centered {
  text-align: center;
  margin-top: 20px;
}

h1 {
  font-size: 24px;
}

img {
  max-width: 150px;
  border-radius: 50%;
}
</style>

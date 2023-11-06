<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="about">
    <div class="profile">
      <img src="~/assets/profile.jpeg" alt="Your Photo" />
      <h1>Sandhya Sabavath</h1>
      <p class="location">Hyderbad</p>
    </div>
    <div class="quote">
      <p class="quote-text">"Life is short, but my to-do list is long"</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
};
</script>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
}

.profile img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

h1 {
  font-size: 28px;
  margin-top: 10px;
}

.location {
  color: #777;
  font-size: 18px;
}

.quote {
  margin-top: 20px;
}

.quote-text {
  font-style: italic;
  font-size: 20px;
  color: #333;
}

.quote-author {
  margin-top: 10px;
  font-size: 16px;
  color: #555;
}
</style>

<template>
  <div class="hobbies">
    <h2>Hobbies</h2>
    <div class="hobbies-list">
      <div class="hobby">
        <div class="hobby-icon">
          <img src="~/assets/bad.jpg" alt="Badminton" />
        </div>
        <h3>Playing Badminton</h3>
        <p>A great way to stay active and have fun!</p>
      </div>
      <div class="hobby">
        <div class="hobby-icon">
          <img src="~/assets/music.jpg" alt="Listening to Music" />
        </div>
        <h3>Listening to Music</h3>
        <p>Relax and enjoy your favorite tunes.</p>
      </div>
      <div class="hobby">
        <div class="hobby-icon">
          <img src="~/assets/dance.jpg" alt="Dancing" />
        </div>
        <h3>Dancing</h3>
        <p>Express yourself through dance!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hobbies",
};
</script>

<style scoped>
.hobbies {
  text-align: center;
  padding: 20px;
}

h2 {
  font-size: 24px;
}

.hobbies-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.hobby {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: transform 0.2s ease;
  text-align: center;
  min-width: 150px;
  max-width: 200px;
}

.hobby:hover {
  transform: scale(1.05);
}

.hobby h3 {
  font-size: 20px;
  margin: 10px 0;
}

.hobby p {
  color: #555;
  font-size: 16px;
}

.hobby-icon {
  text-align: center;
}

.hobby-icon img {
  width: 100px; /* Fixed width for all images */
  height: 100px; /* Fixed height for all images */
  max-width: 100%;
  max-height: 100%;
}
</style>

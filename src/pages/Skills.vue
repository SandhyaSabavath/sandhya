<template>
  <div class="skills">
    <h2>Skills</h2>
    <div class="skills-list">
      <div class="skill">
        <div class="skill-icon">
          <img src="~/assets/wind.jpg" alt="Windows" />
        </div>
        <h3>Windows</h3>
      </div>
      <div class="skill">
        <div class="skill-icon">
          <img src="~/assets/linux.jpg" alt="Linux" />
        </div>
        <h3>Linux</h3>
      </div>
      <div class="skill">
        <div class="skill-icon">
          <img src="~/assets/1.jpg" alt="HTML" />
        </div>
        <h3>HTML</h3>
      </div>
      <div class="skill">
        <div class="skill-icon">
          <img src="~/assets/2.jpg" alt="CSS" />
        </div>
        <h3>CSS</h3>
      </div>
      <div class="skill">
        <div class="skill-icon">
          <img src="~/assets/java.jpg" alt="Java" />
        </div>
        <h3>Java</h3>
      </div>
      <div class="skill">
        <div class="skill-icon">
          <img src="~/assets/dbms.jpg" alt="DBMS" />
        </div>
        <h3>DBMS</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Skills",
};
</script>

<style scoped>
.skills {
  text-align: center;
  padding: 20px;
}

h2 {
  font-size: 24px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.skill {
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

.skill:hover {
  transform: scale(1.05);
}

.skill h3 {
  font-size: 18px;
  margin: 10px 0;
}

.skill-icon {
  text-align: center;
}

.skill-icon img {
  max-width: 80px;
  max-height: 80px; /* Set max height to maintain consistency */
}
</style>

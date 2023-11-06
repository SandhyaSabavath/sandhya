<template>
  <div class="education">
    <h2>Education</h2>
    <ul class="education-list">
      <li>
        <h3>B.Tech</h3>
        <p>Computer Science and Engineering</p>
        <p>Vardhaman College of Engineering, Hyderabad</p>
        <p>(2020-2023)</p>
      </li>
      <li>
        <h3>Diploma</h3>
        <p>Computer Engineering</p>
        <p>TKR College of Engineering, Hyderabad</p>
        <P>(2017-2020)</P>
      </li>
      <li>
        <h3>High School</h3>
        <p>City Spirit High School, Hyderabad</p>
        <p>(2017)</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Education",
};
</script>

<style scoped>
.education {
  text-align: center;
  padding: 20px;
}

h2 {
  font-size: 24px;
}

.education-list {
  list-style: none;
  padding: 0;
}

li {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: transform 0.2s ease;
}

li:hover {
  transform: scale(1.05);
}

h3 {
  font-size: 20px;
}

p {
  color: #555;
  font-size: 16px;
}
</style>

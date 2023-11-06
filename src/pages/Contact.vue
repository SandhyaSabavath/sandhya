<template>
  <div class="contact">
    <h2>Contact</h2>
    <div class="social-links">
      <div class="social-link">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="~/assets/linkedin.jpg" alt="LinkedIn" />
        </a>
        <p>LinkedIn</p>
      </div>
      <div class="social-link">
        <a href="mailto:sandhyasabavath8@gmail.com">
          <img src="~/assets/gmail.jpg" alt="Gmail" />
        </a>
        <p>Email</p>
      </div>
      <div class="social-link">
        <a
          href="https://github.com/SandhyaSabavath"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="~/assets/github.jpg" alt="GitHub" />
        </a>
        <p>GitHub</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
};
</script>

<style scoped>
.contact {
  text-align: center;
  padding: 20px;
}

h2 {
  font-size: 24px;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-link {
  margin: 20px;
  text-align: center;
  transition: transform 0.2s ease;
}

.social-link:hover {
  transform: scale(1.05);
}

.social-link p {
  color: #555;
  font-size: 16px;
}

.social-link img {
  width: 100px; /* Fixed width for all icons */
  height: 100px; /* Fixed height for all icons */
  max-width: 100%;
  max-height: 100%;
}
</style>

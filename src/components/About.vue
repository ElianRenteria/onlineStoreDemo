<script>
</script>

<template>
  <div class="about">
    <h1>About Us</h1>
    <p>Welcome to our Brazilian Jewelry Store!</p>
    <p>We are passionate about bringing the beauty and culture of Brazil to the world through our exquisite collection of jewelry.</p>
    <p>Each piece in our collection is handcrafted by skilled artisans, showcasing the rich traditions and vibrant colors of Brazil.</p>
    <p>From sparkling gemstones to intricate designs, our jewelry reflects the natural beauty and cultural heritage of Brazil.</p>
    <br>
    <h2>Our Mission</h2>
    <p>At Brazilian Jewelry Store, our mission is to provide customers with high-quality, authentic Brazilian jewelry that celebrates the spirit of Brazil.</p>
    <p>We are committed to promoting sustainable practices and supporting local artisans, ensuring that each purchase makes a positive impact on both our customers and the communities we serve.</p>
    <br>
    <h2>Our Team</h2>
    <div class="team">
      <div class="team-member">
        <img src="../assets/placeholder.jpg" alt="Team Member 1" class="team-photo">
        <h3>John Doe</h3>
        <p>Founder & CEO</p>
      </div>
      <div class="team-member">
        <img src="../assets/placeholder.jpg" alt="Team Member 2" class="team-photo">
        <h3>Jane Smith</h3>
        <p>Lead Designer</p>
      </div>
      <!-- Add more team members here -->
    </div>
    <br>
    <h2>Testimonials</h2>
    <div class="testimonials">
      <div class="testimonial">
        <img src="../assets/placeholder.jpg" alt="Customer 1" class="testimonial-photo">
        <p class="testimonial-text">"I love the jewelry I purchased from Brazilian Jewelry Store. The quality is amazing and it arrived quickly!"</p>
        <p class="testimonial-author">- Mary Johnson</p>
      </div>
      <div class="testimonial">
        <img src="../assets/placeholder.jpg" alt="Customer 2" class="testimonial-photo">
        <p class="testimonial-text">"Beautiful pieces and excellent customer service. Highly recommended!"</p>
        <p class="testimonial-author">- Robert Smith</p>
      </div>
      <!-- Add more testimonials here -->
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

h1, h2 {
  color: #333;
  text-align: center;
  display: flex;
  justify-content: center;
}

p {
  line-height: 1.5;
  margin-bottom: 15px;
  text-align: center;
}

.team {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.team-member {
  text-align: center;
  margin: 0 20px;
}

.team-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.testimonials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.testimonial {
  width: 300px;
  margin: 0 10px 20px;
  text-align: center;
}

.testimonial-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.testimonial-text {
  font-style: italic;
}

.testimonial-author {
  font-weight: bold;
}
</style>

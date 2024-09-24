<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            <router-link class="nav-link" to="/service">Service</router-link>
            <router-link class="nav-link" to="/contact">Contact</router-link>
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* Ensure the navbar links are displayed horizontally in a row */
.navbar-nav {
  display: flex;
  flex-direction: row; /* Align the links horizontally in a row */
  justify-content: space-around; /* Distribute space evenly between the links */
  align-items: center; /* Center the links vertically */
  background-color: green; /* Background color */
}

.navbar-nav .nav-link {
  margin: 0 15px; /* Add some horizontal margin between the links */
  color: white; /* Text color for better contrast */
}
</style>

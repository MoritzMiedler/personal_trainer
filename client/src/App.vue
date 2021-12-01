<template>
  <v-app>
    <v-app-bar app color="transparent" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="mr-2"
          contain
          src="/Logo/Logo.svg"
          transition="scale-transition"
          width="175"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text active-class="amber--text darken-3 ">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn to="/Blog" text active-class="amber--text darken-3 ">
        <span class="mr-2">Blog</span>
      </v-btn>
      <v-btn to="/Login" text active-class="amber--text darken-3 ">
        <span class="mr-2">Login</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

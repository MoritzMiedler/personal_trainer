<template>
  <v-app>
    <v-app-bar app color="black--transparent" dark>
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

      <v-btn to="/" text active-class="amber--text darken-3 " class="mr-3">
        <span class="mx-auto">Home</span>
      </v-btn>
      <v-btn to="/Blog" text active-class="amber--text darken-3 " class="mr-3">
        <span class="mx-auto">Blog</span>
      </v-btn>
      <v-btn to="/Login" text active-class="amber--text darken-3 " class="mr-3">
        <span class="mx-auto">Login</span>
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
<style>
html::-webkit-scrollbar {
  width: 6px;
}
html::-webkit-scrollbar-thumb {
  background: rgb(255, 171, 60) 100%;
  border-radius: 5px;
}
html {
  scrollbar-width: thin;
  scrollbar-color: rgb(255, 171, 60) rgb(51, 51, 51);
}
</style>

<template>
  <div>
    <div
      class="parallax container-fluid d-flex justify-content-center align-content-center flex-column align-items-center text-light"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1
        class="display-3 text-center font-weight-bold text-center amber--text darken-3"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        LOREM IPSUM
      </h1>
      <h3
        class="text-center font-weight-bold text-center white--text"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMED
      </h3>
      <v-icon large color="white">mdi-chevron-down</v-icon>
    </div>
    <section class="p-5 bg-light">
      <div class="container">
        <h1
          class="display-3 text-center font-weight-bold"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Meine Pläne
        </h1>
        <div class="text-center">
          <img src="/icons/trenner.png" height="75px" alt="..." />
        </div>
        <h4 class="text-center" data-aos="fade-right" data-aos-duration="1000">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor
        </h4>
        <div class="row d-flex justify-content-around feature-list feature-list-sm">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="card p-3 mt-4 shadow-sm no-border rounded-4 aos-init aos-animate"
            style="width: 18rem"
          >
            <img src="/icons/icon_lose_weight.png" alt="..." class="card-img-top rounded-4" />
            <div class="card-body d-flex flex-column">
              <h3 class="card-title font-weight-bold text-center amber--text darken-3">ABNEHMEN</h3>

              <v-btn to="/plans" text active-class="amber--text darken-3 " class="mx-auto">
                <span class="align-text-bottom">Mehr erfahren</span>
              </v-btn>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="card p-3 mt-4 shadow-sm no-border rounded-4 aos-init aos-animate"
            style="width: 18rem"
          >
            <img src="/icons/icon_strength.png" alt="..." class="card-img-top rounded-4" />
            <div class="card-body d-flex flex-column">
              <h3 class="card-title font-weight-bold text-center amber--text darken-3">
                KRAFT AUFBAUEN
              </h3>
              <v-btn to="/plans" text active-class="amber--text darken-3 " class="mx-auto">
                <span class="align-text-bottom">Mehr erfahren</span>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="p-5 bg-white" style="height: 500px">
      <div class="container">
        <h1
          class="display-3 text-left font-weight-bold"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          ÜBER MICH
        </h1>
        <div>
          <v-row>
            <v-col class="col-8"
              ><h5 class="text-left" data-aos="fade-up" data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor
              </h5></v-col
            >
            <v-col>
              <v-img
                src="img/nicolas.PNG"
                class="rounded-xl"
                width="250px"
                data-aos="fade-left"
                data-aos-duration="1000"
              ></v-img>
            </v-col>
          </v-row>
        </div>
      </div>
    </section>
    <div class="container-fluid bg-light">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <router-link to="/imprint" class="nav-link px-2 text-muted">Impressum</router-link>
          </li>
          <li class="nav-item">
            <a href="https://www.instagram.com/nicolasroussel_/" class="nav-link px-2 text-muted"
              >Instagram</a
            >
          </li>
          <li class="nav-item">
            <a href="XYZ" class="nav-link px-2 text-muted">Anderer Link</a>
          </li>
        </ul>
        <p class="text-center text-muted">© 2021 Nicolas Roussel</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.parallax {
  background-image: url('../../public/img/images about/bg1.png');

  min-height: 700px;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.background {
  color: black;
}
</style>

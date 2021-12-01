<template>
  <div>
    <div class="parallax"></div>
    <section class="p-5 bg-light">
      <div class="container">
        <h1 class="display-4 text-center font-weight-bold">Meine Pläne</h1>
        <h4 class="text-center">
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

              <v-btn to="/plans" text active-class="amber--text darken-3 ">
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
              <v-btn to="/plans" text active-class="amber--text darken-3 ">
                <span class="align-text-bottom">Mehr erfahren</span>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="p-5 bg-white"></section>
    <div class="container"></div>
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
</style>

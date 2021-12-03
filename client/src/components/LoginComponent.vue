<template>
  <div>
    <v-row>
      <v-col class="col-2"> </v-col>
      <v-col class="col-8"
        ><v-card class="p-5">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="40"
              :rules="nameRules"
              label="Vor- und Nachname"
              required
            ></v-text-field>

            <v-text-field
              v-model="username"
              :rules="usernameRules"
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <!-- <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox> -->

            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
              Validate
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col class="col-2"> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Bitte Ihren Namen eingeben!',
      (v) => (v && v.length <= 40) || 'Name muss unter 40 Zeichen sein',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'Bitte Ihre Email eingeben!',
      (v) => /.+@.+\..+/.test(v) || 'E-mail muss gültig sein',
    ],
    usernameRules: [
      (v) => !!v || 'Bitte einen Usernamen eingeben!',
      (v) => (v && v.length <= 15) || 'Benutzername muss unter 15 Zeichen sein',
    ],
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="css" scoped></style>

<template>
  <q-page class="justify-center flex row items-center overflow-auto fondo">
    <div class="col-12 col-sm-6 form-container row justify-center">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat>
          <q-card-section class="top-card justify-center flex row q-pb-xl">
            <div class="col-12 full-width">
              <div class="row justify-between text-white">
                <q-btn flat round icon="arrow_back" />
                <span class="text-h5 text-capitalize">jorge Luis</span>
                <q-btn flat round icon="more_vert" />
              </div>
            </div>
            <div class="img-avatar q-mt-sm q-mb-md">
              <q-img src="/images/avatar1.png" />
            </div>

            <div class="col-12 text-white justify-center flex name-text">Jlroa82@misena.edu.co</div>
            <div class="col-12 text-white justify-center flex info-text">Admin</div>

          </q-card-section>

          <q-card-section class="bottom-card justify-center flex q-pa-none">
            <q-btn
                class=" q-mb-md text-capitalize btn-edit"
                rounded
                label="Editar"
                @click="editProfile()"
                />
                <div class="full-width content text-center">
                    Leer más <br>
                    <q-icon name="arrow_downward" color="blue" size="20px" />
                </div>
           
          </q-card-section>

          <q-separator />

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      stars: ref(4),
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

.fondo {
  background-image: url("/images/fondo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Ubuntu", sans-serif;
}
.fondo::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 26, 26, 0.521);
}
.my-card {
  width: 100%;
  max-width: 400px;
  min-width: 350px;
  border-radius: 15px;
  background: transparent;
}
.top-card {
  background-color: #0000009c;
  background-repeat: no-repeat;
  background-size: cover;

}
.bottom-card {
  background-color: #f0f0f0;
  border-radius:15px !important;
}

.img-avatar {
  width: 40%;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  padding: 3px;

}
.img-avatar img {
  width: 10%;
  height: 20%;
  border-radius: 50%;
}

.name-text{
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: capitalize;
}
.info-text{
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
}

.btn-edit{
    transform: translateY(-50%);
    background: white;
    padding: 7px 30px;
}

.content{
    font-family: "Ubuntu", sans-serif;
    width: 100%;
    transform: translateY(-40%);
    height: 100%;
    padding-bottom: 10px;
}

</style>

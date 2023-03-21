<template>
  <div class="container-fluid">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">Contáctanos</p>
    </div>
    <!-- Form Code -->
    <form @submit.prevent="validationCheck" class="my-5">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label>Nombre(s):*</label>
          <input
            type="text"
            class="form-control"
            v-model="firstName"
            name="firstName"
          />
          <div v-if="firstNameError" class="error">{{ firstNameError }}</div>
        </div>
        <div class="col-md-6 mb-3">
          <label>Apellidos:*</label>
          <input
            type="text"
            class="form-control"
            v-model="lastName"
            name="lastName"
          />
          <div v-if="lastNameError" class="error">{{ lastNameError }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label>Correo electrónico:*</label>
          <input
            type="text"
            class="form-control"
            placeholder="name@example.com"
            v-model="email"
            name="email"
          />
          <div v-if="emailError" class="error">{{ emailError }}</div>
        </div>
        <div class="col-md-6 mb-3">
          <label>Teléfono:*</label>
          <input
            type="tel"
            class="form-control"
            v-model="phoneNumber"
            name="phoneNumber"
          />
          <div v-if="phoneNumberError" class="error">
            {{ phoneNumberError }}
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Mensaje:*</label>
        <textarea
          class="form-control"
          rows="3"
          v-model="message"
          name="message"
        ></textarea>
      </div>
      <input type="hidden" v-model="pageName" name="pageName" />
      <div class="obligatorio">* Campos obligatorios</div>
      <div style="text-align: center">
        <button class="btn btn-secondary" type="submit">Enviar</button>
      </div>
    </form>
    <!-- End Form Code -->
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactoPage",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      pageName: "Gestión",
      // Errors
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      phoneNumberError: "",
      messageError: "",
    };
  },
  methods: {
    validationCheck(e) {
      if (this.myValidation()) {
        this.sendEmail(e);
        alert("Correo enviado");
      }
    },
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_35a5jvj",
          "template_p4kd1gb",
          e.target,
          "veS0t4YZbUSli8rN0",
          {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            message: this.message,
            pageName: this.pageName,
          }
        );
        console.log("Correo Enviado");
      } catch (error) {
        console.log("Error:");
        console.log({ error });
      }
      // Reset form field
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.phoneNumber = "";
      this.message = "";
    },
    myValidation() {
      // required validation
      if (
        !(
          this.firstName &&
          this.lastName &&
          this.email &&
          this.phoneNumber &&
          this.message
        )
      ) {
        alert("Todos los campos son obligatorios.");
        console.log("Todos los campos son obligatorios.");
        return false;
      }
      //First/Last name regular expression validator
      //Orlando, orlando, ORLANDO, orlando glez, Ana Sofia, Orlando González, McMiller, John D'Largy, John Doe-Smith
      var regName = /^[a-zA-z ,'.áéíóú-]+$/;
      this.firstNameError = regName.test(this.firstName)
        ? ""
        : "No debe contener números ni caracteres especiales";
      this.lastNameError = regName.test(this.lastName)
        ? ""
        : "No debe contener números ni caracteres especiales";
      //Email regular expression validator
      /* eslint-disable */
      var regEmail =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      this.emailError = regEmail.test(this.email) ? "" : "Correo no válido";
      //Phone number regular expression validator
      var regPhone = /^\d{10}$/;
      this.phoneNumberError = regPhone.test(this.phoneNumber)
        ? ""
        : "Debe ser un número de 10 dígitos";
      console.log(this.firstNameError);
      // true || true == true
      // true || false == true
      // false || true == true
      // false || false == false
      if (
        !(
          this.firstNameError ||
          this.lastNameError ||
          this.emailError ||
          this.phoneNumberError ||
          this.messageError
        )
      ) {
        console.log("Validación correcta");
        return true;
      } else {
        console.log("Validación incorrecta");
        return false;
      }
    },
  },
};
</script>

<style>
</style>
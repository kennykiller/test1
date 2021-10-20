const app = new Vue({
  el: "#app",
  data() {
    return {
      userName: "",
    };
  },
});

const form = document.querySelector("#form");

form.onsubmit = function (event) {
  event.preventDefault();
  const input = document.querySelector('#userNameInput');
  app.$data.userName = input.value;
  input.value = '';
};

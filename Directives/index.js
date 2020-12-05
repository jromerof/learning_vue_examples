let bindDirective = new Vue({
  el: "#directive-test",
  data: {
    bindTitle: "Ths is a binded title",
    seen: true,
    textList: ["This ", "is an array ", "rendered "],
  },
  methods: {
    toggleSeen: function () {
      this.seen = !this.seen;
    },
  },
});

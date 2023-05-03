// Importamos la función de Pinia para definir el store
import { defineStore } from "pinia";
import { ref } from "vue";

export const menuState = defineStore("menuState", () => {
  const menuIsOpen = ref(false);

  const toggleMenu = () => {
    menuIsOpen.value = !menuIsOpen.value;
  };

  return { menuIsOpen, toggleMenu };
});

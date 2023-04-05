
export const UI = defineStore('UI', () => {
  const isDark = ref(false) // para controlar el tema oscuro
  const linkActive = ref('') //Ruta activa actualmente 
  


  return { isDark, linkActive}
})

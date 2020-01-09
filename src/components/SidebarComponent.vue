<template lang="html">
  <div class="column is-mobile is-1">
    <div class="columns sidebar">
      <div class="column sidebar-image has-text-centered">
        image
      </div>
      <div class="column sidebar-button has-text-centered">
        <b-icon pack="fas" icon="globe"></b-icon>
        опросы
      </div>
      <div class="column sidebar-button has-text-centered">
        <b-icon pack="fas" icon="globe"></b-icon>
        пользователи
      </div>
      <div class="column sidebar-button has-text-centered">
        <b-icon pack="fas" icon="globe"></b-icon>
        черные списки
      </div>
      <div class="column sidebar-button has-text-centered">
        <b-icon pack="fas" icon="globe"></b-icon>
        колл-центр
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.sidebar {
    display: flex;
    flex-direction: column;
}
.sidebar-button {
  display:flex;
  flex-direction: column;
  padding: 0;
  margin-left: 15px;
  margin-right: 15px;
  color: black;
  border-radius: 10px;
}
.sidebar-button:hover {
  background-color: grey;
}
.icon {
  width: 100%;
}
</style>

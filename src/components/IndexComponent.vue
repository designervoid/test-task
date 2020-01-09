<template>
<div>
  <div class="columns">
    <SidebarComponent/>
    <div class="column is-mobile is-11">

      <div class="columns header-area">
        <div class="column is-mobile is-6">
          <b-field>
            <b-input placeholder="Search..." expanded></b-input>
          </b-field>
        </div>
        <div class="column is-mobile is-6 header-avatar">
          image
        </div>
      </div>

      <div class="columns navigation-area">
        <div class="column is-mobile is-1">
          <b-icon pack="fas" icon="home"></b-icon>
        </div>
        <div class="column is-mobile is-1">
          <b-icon pack="fas" icon="arrow-right"></b-icon>
        </div>
        <div class="column is-mobile is-2">
          Опросы
        </div>
        <div class="column is-mobile is-1">
          <b-icon pack="fas" icon="arrow-right"></b-icon>
        </div>
        <div class="column is-mobile is-2">
          Добавить опрос
        </div>
      </div>

      <div class="columns tabs-area">
        <div class="column is-mobile is-12">
          <b-tabs v-model="activeTab">
            <b-tab-item label="Параметры" disabled>

            </b-tab-item>

            <b-tab-item label="Вопросы" disabled>

            </b-tab-item>

            <b-tab-item label="Логика" disabled>

            </b-tab-item>

            <b-tab-item label="Условия" disabled>

            </b-tab-item>

            <b-tab-item label="Респонденты">
              <div class="columns respondents-area">
                <div class="column is-mobile is-12">
                  <div class="" v-if="isClicked">
                    <div class="">
                      <div class="" v-for="(conditionArea, index) in conditionAreas" v-bind:key="index">
                        <!-- @click="debug(conditionArea.conditionNum);" -->
                        <div class="columns">
                          <div class="column is-mobile is-4">
                            <h1>Условие {{ conditionArea.conditionNum }}</h1>
                          </div>
                          <div class="column is-mobile is-8">
                            <b-select placeholder="Select a name" v-model="conditionArea.selected">
                              <option>Возраст респондента</option>
                              <option>Тип карты лояльности</option>
                              <option>Статус карты лояльности</option>
                            </b-select>
                          </div>
                        </div>

                        <div class="" v-if="conditionArea.selected == 'Возраст респондента'">
                          <div class="columns">
                            <div class="column is-mobile is-4">
                              Диапазон 1
                            </div>
                            <div class="column is-mobile is-8">
                              от и до
                            </div>
                          </div>
                        </div>
                        <div class="" v-else-if="conditionArea.selected == 'Тип карты лояльности'">
                          <div class="columns">
                            <div class="column is-mobile is-4">
                              Тип 1
                            </div>
                            <div class="column is-mobile is-8">
                              тип bronze, silver, gold, premium
                            </div>
                          </div>
                        </div>
                        <div class="" v-else-if="conditionArea.selected == 'Статус карты лояльности'">
                          <div class="columns">
                            <div class="column is-mobile is-4">
                              Статус 1
                            </div>
                            <div class="column is-mobile is-8">
                              активно, неактивно
                            </div>
                          </div>
                        </div>

                        <b-button type="is-primary delete-button" @click="removeItem(conditionArea.conditionNum)">Удалить условие</b-button>
                      </div>
                    </div>
                  </div>

                  <b-button type="is-primary" expanded @click="addCondition();">Добавить условие</b-button>

                </div>
              </div>
            </b-tab-item>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SidebarComponent from './SidebarComponent.vue'
export default {
  name: 'IndexComponent',
  data() {
    return {
      activeTab: 4,
      isClicked: false,
      conditionCounter: 0,
      conditionAreas: []
    }
  },
  components: {
    SidebarComponent
  },
  methods: {
    addCondition() {
      this.isClicked = true;
      this.conditionCounter++;
      this.conditionAreas.push({ conditionNum: this.conditionCounter, selected: '' })
    },
    removeItem(num){
    for (var i = 0; i < this.conditionAreas.length; i++){
       if ( this.conditionAreas[i].conditionNum === num) {
         this.conditionAreas.splice(i, 1);
       }
    }
    }
  }
}
</script>

<style scoped lang="scss">
.header-area,
.navigation-area {
    display: flex;
    flex-direction: row;
}
.header-avatar {
    display: flex;
    justify-content: center;
}

.delete-button {
  margin-top: 10px;
  margin-bottom: 10px;
}

.header-avatar {
  align-self:center;
}
@media screen and (max-width: 774px) {
    .sidebar {
        flex-direction: row;
    }
}
</style>

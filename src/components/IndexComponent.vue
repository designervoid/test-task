<template>
<div>
  <div class="columns">
    <div class="column is-mobile is-2">
      <div class="columns sidebar">
        <div class="column">
          image
        </div>
        <div class="column">
          опросы
        </div>
        <div class="column">
          пользователи
        </div>
        <div class="column">
          черные списки
        </div>
        <div class="column">
          колл-центр
        </div>
      </div>
    </div>
    <div class="column is-mobile is-10">

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
          home
        </div>
        <div class="column is-mobile is-1">
          arrow
        </div>
        <div class="column is-mobile is-2">
          Опросы
        </div>
        <div class="column is-mobile is-1">
          arrow
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
                        <h1>Условие {{ conditionArea.conditionNum }}</h1>
                        <b-select placeholder="Select a name" v-model="conditionArea.selected">
                          <option>Возраст респондента</option>
                          <option>Тип карты лояльности</option>
                          <option>Статус карты лояльности</option>
                        </b-select>

                        <b-button type="is-primary" expanded>Удалить условие</b-button>

                        <div class="" v-if="conditionArea.selected == 'Возраст респондента'">
                          диапазон от и до
                        </div>
                        <div class="" v-else-if="conditionArea.selected == 'Тип карты лояльности'">
                          тип bronze, silver, gold, premium
                        </div>
                        <div class="" v-else-if="conditionArea.selected == 'Статус карты лояльности'">
                          статус активна, неактивна
                        </div>
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
  methods: {
    addCondition() {
      this.isClicked = true;
      this.conditionCounter++;
      this.conditionAreas.push({ conditionNum: this.conditionCounter, selected: '' })
      alert(JSON.stringify(this.conditionAreas))
    },
    debug(param) {
      alert(param);
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar {
    display: flex;
    flex-direction: column;
}
.header-area,
.navigation-area {
    display: flex;
    flex-direction: row;
}
.header-avatar {
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 774px) {
    .sidebar {
        flex-direction: row;
    }
}
</style>

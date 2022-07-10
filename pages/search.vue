<template>
  <div style="display: flex; justify-content:space-between; flex-direction:column">
    <div>
      <div class="searcher">
        <input
          v-model="inputValue"
          placeholder="Поиск..."
          class="searcher-input"
          type="text"
          @keyup.enter="getItem"
          @click="history = true"
          @mouseleave="history = false"
        />
        <div class="search-history" :style="history ? '' : 'display:none'">
          <div
            class="search-history-item"
            v-if="history"
            v-for="(i, id) in inputHistory"
            :key="id"
          >
            <img src="/icons/search.svg" alt="" />
            <p>{{ i }}</p>
          </div>
        </div>
        <div @click="getItem" class="searcher-button">
          <img src="/icons/search.svg" alt="" />
        </div>
      </div>
      <div>
        <div v-for="(res, id) in response" class="respItem">
          <div>
            <h1 style="font-size: 15px">{{ res.name }}</h1>
            <p style="font-size: 20px; font-weight: bold">
              {{ res.merchantname }}
            </p>
          </div>
          <p style="font-size: 20px">{{ res.cost }} ₽</p>
        </div>
      </div>
    </div>
    <div>
      <!-- <HotCasesSlider /> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import HotCasesSlider from "../components/HotCasesSlider.vue";
export default {
    data() {
        return {
            response: {},
            inputValue: "",
            inputHistory: [],
            history: false,
        };
    },
    methods: {
        ...mapActions(["set_input_history"]),
        async getItem() {
            try {
                let res = await axios.get(`http://5.23.55.230:8080/get_tovar_by_name?name=${this.inputValue}`);
                this.response = JSON.parse(JSON.stringify(res.data.result));
                console.log(this.response);
                this.inputHistory.push(this.inputValue);
                this.history = false;
                // this.set_input_history(this.inputValue);
            }
            catch (error) {
                console.log(error);
            }
        },
    },
    components: { HotCasesSlider }
};
</script>

<style scoped>
.searcher {
  display: flex;
  justify-content: center;
  position: relative;
}
.searcher-input {
  z-index: 3;
  border-radius: 20px 0px 0px 20px;
  border: none;
  background: #d2d2d2;
  padding: 5px 20px;
  font-size: 14px;
}
.searcher-button {
  z-index: 2;
  display: flex;
  background: #6572e1;
  padding: 6px 10px;
  border-radius: 0px 20px 20px 0px;
}
.search-history {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  top: 40px;
  z-index: 1;
  background: #6572e1;
  padding: 10px 5px 30px 0px;
  gap: 20px;
  max-width: 250px;
  width: 100%;
  border-radius: 0px 0px 50px 50px;
}
.search-history-item {
  display: flex;
  gap: 20px;
  color: black;
  align-items: center;
  border-bottom: 1px solid;
  padding: 0px 10px;
}
.respItem {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
  padding: 5px 10px;
  border-radius: 10px;
}
</style>

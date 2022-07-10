<template>
  <div class="cont">
    <div class="mainInfo">
      <div class="mainInfo-name">Иванова Арина Генадьевна</div>
      <div class="mainInfo-etc">
        <!-- <p>г. Краснодар</p> -->
        <CityChoser />
        <p>{{ $store.state.phone }}</p>
      </div>
    </div>
    <div class="cardInfo">
      <div class="cardInfo-items">
        <div class="cardInfo-reg">
          <p style="font-size: 12px">Карта Банкпро +</p>
          <p style="font-size: 12px">****4444</p>
        </div>
        <div class="cardInfo-notreg">
          <p>Добавить Карту</p>
          <p class="border-button">+</p>
        </div>
      </div>
      <div class="cardInfo-alert">
        <p>Кешбек начисляется моментально доступен для вывода на карту</p>
      </div>
    </div>
    <vsa-list>
      <vsa-item>
        <vsa-heading> Мои транзакции </vsa-heading>
        <vsa-content>
          <div class="items">
            <div v-for="i in 6" class="item">
              <div class="item-cont">
                <div class="item-logo">
                  <img src="/img/icons/purchase.svg" alt="" />
                </div>
                <div>
                  <div class="item-time">10.12.2022</div>
                  <div class="item-name">Оплата товаров и услуг</div>
                </div>
              </div>
              <div class="item-details">
                <div class="item-price">5999 ₽</div>
                <div class="item-back">
                  <img src="/img/icons/arrow.svg" alt="" />
                  <p>299.95 ₽(5%)</p>
                </div>
              </div>
            </div>
          </div>
        </vsa-content>
      </vsa-item>
    </vsa-list>
    <vsa-list>
      <vsa-item>
        <vsa-heading> Мои категории </vsa-heading>
        <vsa-content>
          <div class="items">
            <div v-for="i in 6" class="item">
              <div class="item-cont">
                <div class="item-logo">
                  <img src="/img/icons/purchase.svg" alt="" />
                </div>
                <div>
                  <div class="item-time">10.12.2022</div>
                  <div class="item-name">Оплата товаров и услуг</div>
                </div>
              </div>
              <div class="item-details">
                <div class="item-price">5999 ₽</div>
                <div class="item-back">
                  <img src="/img/icons/arrow.svg" alt="" />
                  <p>299.95 ₽(5%)</p>
                </div>
              </div>
            </div>
          </div>
        </vsa-content>
      </vsa-item>
    </vsa-list>
    <vsa-list>
      <vsa-item>
        <vsa-heading> Мои магазины </vsa-heading>
        <vsa-content>
          <div class="items">
            <div v-for="i in 6" class="item">
              <div class="item-cont">
                <div class="item-logo">
                  <img src="/img/icons/purchase.svg" alt="" />
                </div>
                <div>
                  <div class="item-time">10.12.2022</div>
                  <div class="item-name">Оплата товаров и услуг</div>
                </div>
              </div>
              <div class="item-details">
                <div class="item-price">5999 ₽</div>
                <div class="item-back">
                  <img src="/img/icons/arrow.svg" alt="" />
                  <p>299.95 ₽(5%)</p>
                </div>
              </div>
            </div>
          </div>
        </vsa-content>
      </vsa-item>
    </vsa-list>
    <HotCasesSlider />
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import CityChoser from "../components/CityChoser.vue";
import HotCasesSlider from "../components/HotCasesSlider.vue";
export default { components: { Title, CityChoser, HotCasesSlider } };
</script>

<style scoped>
.cont {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.mainInfo {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.mainInfo-etc {
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
}
.cardInfo {
  display: flex;
  /* align-items: centers; */
  flex-direction: column;
  /* gap: 10px; */
}
.cardInfo-items {
  display: flex;
  gap: 10px;

  justify-content: center;
}
.cardInfo-reg {
  background: #6572e1;
  color: white;
  border-radius: 5px;
  padding: 10px;
  max-width: 150px;
  width: 100%;
}
.cardInfo-notreg {
  background: #a3a3a31a;
  border-radius: 5px;
  font-size: 12px;
  padding: 10px;
  max-width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.cardInfo-alert {
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 10px;
  width: 100%;
}
.border-button {
  padding: 4px;
  border-radius: 50%;
  background: #6572e1;
  width: 12px;
  height: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: lighter;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.item {
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: white;
  justify-content: space-between;
  padding: 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
}
.item-name {
  font-size: 14px;
  color: black;
}
.item-time {
  font-size: 12px;
  color: black;
}
.item-cont {
  display: flex;
  align-items: center;
  gap: 5px;
}
.item-details {
  color: black;
  display: flex;
  flex-direction: column;
  text-align: right;
}
.item-price {
  font-size: 14px;
  font-weight: bold;
  color: #424242;
}
.item-back {
  display: flex;
  gap: 5px;
  font-size: 12px;
  align-items: centers;
}
</style>

<template>
    <div class="container">
        <div class="card">
          <div class="card-header">
            <h1>
                <i class="bi bi-fire text-danger" ></i>
                疯抢专区
            </h1>
          </div>
          <div class="row text-center">
            <div class="col-sm-3 p-3 border" v-for="(item,index) in crazy_buy" :key="index">
              <div class="creay_good bg-light">
                <img class="rounded img-fluid" :src="'src/assets/image/'+item.image" alt="">
                <h5 class="mt-3">
                  <svg t="1683035524861" class="icon p-0 m-0" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3367" width="30" height="20"><path d="M1009.770667 393.536C1018.282667 390.528 1024 382.464 1024 373.397333l0-131.242667c0-52.352-42.56-94.976-94.912-94.976L94.976 147.178667c-52.352 0-94.954667 42.624-94.954667 94.976l0 131.242667c0 9.045333 5.696 17.130667 14.250667 20.138667C64.426667 411.264 98.133333 458.858667 98.133333 512c0 53.12-33.706667 100.757333-83.882667 118.506667C5.696 633.450667 0 641.578667 0 650.624l0 131.242667c0 52.330667 42.602667 94.954667 94.954667 94.954667L929.066667 876.821333c52.330667 0 94.933333-42.624 94.933333-94.954667l0-131.242667c0-9.045333-5.674667-17.130667-14.229333-20.117333-50.218667-17.749333-83.946667-65.365333-83.946667-118.506667S959.552 411.285333 1009.770667 393.536zM883.114667 512c0 66.048 38.869333 125.717333 98.154667 152.981333l0 116.885333c0 28.778667-23.402667 52.202667-52.202667 52.202667L94.954667 834.069333c-28.8 0-52.224-23.424-52.224-52.202667l0-116.885333c59.264-27.264 98.133333-86.933333 98.133333-152.981333 0-66.048-38.869333-125.738667-98.133333-152.981333l0-116.864c0-28.8 23.402667-52.224 52.224-52.224L929.066667 189.930667c28.778667 0 52.202667 23.402667 52.202667 52.224l0 116.864C921.962667 386.282667 883.114667 445.952 883.114667 512z" p-id="3368" fill="#d81e06"></path><path d="M683.690667 392.533333l-144.682667 0 86.293333-86.208c8.384-8.362667 8.384-21.888 0-30.229333-8.341333-8.341333-21.824-8.341333-30.208 0L512 359.104l-83.008-82.986667c-8.384-8.362667-21.866667-8.362667-30.208 0-8.362667 8.362667-8.362667 21.866667 0 30.208l86.229333 86.208-144.768 0c-11.776 0-21.354667 9.557333-21.354667 21.354667 0 11.797333 9.578667 21.376 21.354667 21.376l150.4 0 0 79.893333L364.8 515.157333c-11.818667 0-21.376 9.557333-21.376 21.376 0 11.818667 9.557333 21.333333 21.376 21.333333l125.845333 0 0 174.869333c0 11.84 9.557333 21.376 21.354667 21.376 11.84 0 21.376-9.578667 21.376-21.376L533.376 557.866667l125.76 0c11.861333 0 21.418667-9.536 21.418667-21.333333s-9.536-21.376-21.376-21.376l-125.781333 0 0-79.893333 150.357333 0c11.776 0 21.312-9.6 21.312-21.376C705.045333 402.112 695.509333 392.533333 683.690667 392.533333z" p-id="3369" fill="#d81e06"></path></svg>
                  <span>{{ item.name }}</span><span>{{ item.quantity }}</span>
                </h5>
                <p class="text-danger"><span>￥</span><strong>{{item.price}}</strong></p>
                <router-link :to="{name: 'Buy', params: {id: item.id }}"><button class="btn btn-outline-danger mb-3">立即购买</button></router-link>
              </div>
            </div>
          </div> 
        </div>
      </div>
</template>

<script setup>
import { RouterView,RouterLink } from 'vue-router';
import { reactive } from 'vue'
import { getHotSaleAndCrazyProducts } from '@/api/getHotSaleAndCrazyProducts';

const crazy_buy = reactive ([])

const get_crazybuy = async () =>{
    await getHotSaleAndCrazyProducts({categoryName: "疯抢"}).then(response => {
        // console.log(response);
        for (let i = 0; i < response.data.data.length;i++) {
          crazy_buy.push(response.data.data[i])
        }
    })
}

get_crazybuy();

</script>

<style lang="scss" scoped>
.container{
    padding: 0 0 1rem 0;
    max-width: 1200px;
}

.card .row{
  width: 100%;
  margin:0;
  padding:0;
  border-radius: 2px;
}

.creay_good img{
  width: 200px;
  height: 200px;
}

@media screen and (min-width: 1140px) {
  .card .row{
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: scroll;
    overflow-y: hidden;
  }
}
</style>
<template>
    <div id="app">
        <navBar></navBar>
        <div class="personal d-flex justify-content-start">
            <div class="personal_main border rounded p-2">
                <ul class="p-0 m-0 text-center">
                    <li class="personal_top d-flex align-items-center border rounded-top p-2">
                        <div class="demo-image__preview">
                            <el-image
                              style="width: 50px; height: 50px"
                              :src="'src/assets/image/User/avater/'+user.avatar"
                              :preview-src-list="srcList"
                              fit="cover"
                              class="rounded-circle"
                            />
                        </div>
                        <div class="personal_information">
                            <h5 class="p-0 m-0"><strong>{{user.userName}}</strong></h5>
                            <span>已实名</span>
                        </div>
                        <div class="ms-5 ps-5">
                            <button type="button" class="btn btn-sm btn-outline-primary" @click="dialogVisible = true">
                                更换头像
                            </button>
                            <el-dialog v-model="dialogVisible" title="更换头像" width="50%" draggable>
                                <UpLoad></UpLoad>
                                    <template #footer>
                                      <span class="dialog-footer">
                                        <el-button @click="dialogVisible = false">返回</el-button>
                                      </span>
                                    </template>
                            </el-dialog>
                        </div>
                    </li>
                    <li class="border">
                        <router-link :to="{name: 'MyInformation'}">
                            <i class="bi bi-person-vcard"></i>
                            <span>我的信息</span>
                        </router-link>
                    </li>
                    
                    <li class="border"> 
                        <router-link :to="{name: 'MyCollections'}">
                            <i class="bi bi-ui-checks"></i>
                            <span>我的收藏</span>
                        </router-link>
                    </li>

                    <li class="border"> 
                        <router-link :to="{name: 'MyAddress'}">
                            <i class="bi bi-geo-alt-fill"></i>
                            <span>我的地址</span>
                        </router-link>
                    </li>

                    <li class="border rounded-bottom"> 
                        <router-link :to="{name: 'ComplaintsFeedback'}">
                            <i class="bi bi-envelope-paper-fill"></i>
                            <span>投诉与反馈</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { RouterLink,RouterView,useRouter } from "vue-router";
import navBar from '@/components/header.vue'
import UpLoad from '@/components/UpLoad.vue'
import { reactive,ref } from 'vue'
import { pinyin } from 'pinyin-pro'

import pinia from '@/stores/store'
import useUserStore from '@/stores/user';

const userStore = useUserStore(pinia);
const dialogVisible = ref(false)

let user = reactive(userStore.user)

const srcList = [
    'src/assets/image/User/avater/'+user.avatar,
]

</script>

<style scoped>

.personal_main{
    width: 30%;
    height: max-content;
    user-select: none;
}

.personal_main{
    background-color: rgba(182, 224, 240, 0.709);
}

.personal_main ul li{
    height: 4rem;
    background-color: rgba(255, 255, 255, 0.617);
}

.personal_main ul li:not(:first-child){
    line-height: 4rem;
}

.personal_main ul li a:not(:first-child):hover{
    color: skyblue;
    cursor: pointer;
}

.router-link-active{
    color: skyblue;
}

.demo-image__error .image-slot {
    font-size: 30px;
  }
  .demo-image__error .image-slot .el-icon {
    font-size: 30px;
  }
  .demo-image__error .el-image {
    width: 100%;
    height: 200px;
  }

</style>
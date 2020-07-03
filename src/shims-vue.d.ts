
import Vue from 'vue';
import vueAxios from 'vue-axios';
import Platform from '@/plugins/platform';

declare module 'vue/types/vue' {
    interface Vue {
        // 以下是在main.ts中挂载到Vue.prototype上的变量
        $platform: Platform;
    }
}
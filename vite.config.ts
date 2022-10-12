import  Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  Components({
    dirs: ['src/components','src/views'],
    extensions: ['vue'],
    deep: true,
    dts: "src/components.d.ts",
    types: [{
      from: 'vue-router',
      names: ['RouterLink', 'RouterView'],
      
    }],
  }),
  AutoImport({
    imports:['vue'],
    dts:true
  })
  ],

})

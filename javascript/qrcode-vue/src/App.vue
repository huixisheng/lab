<template>
  <div>
    <qrcode-vue
      :size="size"
      :value="value"
      :logo="logo"
      :bgColor="bgColor"
      :fgColor="fgColor"
    ></qrcode-vue>
  </div>
</template>
<script>
  import qrcodeVue from 'qrcode-vue'
  export default {
    data () {
      return {
        size: 128,
        bgColor: '#fff',
        fgColor: '#000',
        value: '15990112169',
        logo: 'http://img0.cosmeapp.com/Fi_7Q66wn5LH8XWllY0YbIij86Rt'
      }
    },
    components: {
      qrcodeVue
    }
  }
</script>

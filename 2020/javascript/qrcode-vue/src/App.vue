<template>
  <div>
    <h2>qrcode-vue</h2>
    <qrcode-vue
      :size="size"
      :value="value"
      :logo="logo"
      :bgColor="bgColor"
      :fgColor="fgColor"
    ></qrcode-vue>
    <h2>@xkeshi/vue-qrcode</h2>
    <qrcode value="huixisheng" :options="{ size: 200 }"></qrcode>
    <h2>arale-qrcode</h2>
    <div id="qrcodeCanvas"></div>
    <!-- <h2>vue-qr</h2>
    <vue-qr :bgSrc='bg' :logoSrc="logo" text="huixisheng" height="200" width="200"></vue-qr> -->
  </div>
</template>
<script>
  import qrcodeVue from 'qrcode-vue'
  import VueQrcode from '@xkeshi/vue-qrcode'
  import AraleQRCode from 'arale-qrcode'
  // import VueQr from 'vue-qr'

  export default {
    data () {
      return {
        size: 128,
        bgColor: '#fff',
        fgColor: '#000',
        value: '15990112169',
        logo: 'http://img0.cosmeapp.com/Fi_7Q66wn5LH8XWllY0YbIij86Rt',
        bg: ''
      }
    },
    components: {
      qrcodeVue,
      qrcode: VueQrcode,
      // VueQr
    },
    mounted() {
      const qrnode = new AraleQRCode({
        render: 'canvas',
        correctLevel: 0,
        text: 'huixisheng',
        size: 300,
        background: '#ffffff',
        foreground: '#000',
        pdground: '#00aaee',
        image : 'http://img0.cosmeapp.com/Fi_7Q66wn5LH8XWllY0YbIij86Rt',
        imageSize : 40
      });
      document.getElementById('qrcodeCanvas').appendChild(qrnode);
    }
  }
</script>

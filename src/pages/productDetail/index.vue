<template>
  <div id="magazine" ref="magazine">
    <div
      v-for="(img, i) in imgList"
      :key="i"
      :style="{ background: `url(${img})` }"
      class="imgItem"
    ></div>
  </div>
</template>

<script>
let imgList = new Array(5).fill(1).map((t, i) => {
  return require(`@/assets/banner${i+1}.jpg`);
});
export default {
  data() {
    return {
      imgList,
    };
  },

  components: {},

  computed: {},

  mounted() {
    let $ = window.$;
    console.log($("#magazine"));
    $("#magazine").turn({
      display: "double",
      acceleration: true,
      gradients: !$.isTouch,
      elevation: 50,
      // when: {
      //   turned: function (e, page) {
      //     console.log(e);
      //     console.log(page);
      //     /*console.log('Current view: ', $(this).turn('view'));*/
      //   },
      // },
    });

    // $(window).bind("keydown", function (e) {
    //   if (e.keyCode == 37) $("#magazine").turn("previous");
    //   else if (e.keyCode == 39) $("#magazine").turn("next");
    // });
  },

  methods: {},
};
</script>
<style lang='less' scoped>
#magazine {
  width:800px;
  height: 160px;
  margin:0 auto;
}

.imgItem{
  background-size: 100% 100% !important;
}
</style>
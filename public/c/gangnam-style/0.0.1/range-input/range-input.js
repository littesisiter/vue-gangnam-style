define("gangnam-style/0.0.1/range-input/range-input.js",function(n,e,a){"use strict";a.exports=Vue.component("range-input",{template:'<div class="range-input">\r\n    缩小\r\n        <input type="range" min=".5" step=".1" max="2" v-model="value" v-on="change: onChange"/>\r\n    放大\r\n</div>',data:{value:1},methods:{onChange:function(){this.$dispatch("range-change",this.$data.value)}}})});
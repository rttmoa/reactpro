import { mapGetters } from 'vuex'




// 加入购物车，动态为tabBar设置数字徽标
export default {
  computed: {
    ...mapGetters('m_cart', ['total'])
  },
  watch: {
    total() {
      this.setBadge()
    }
  },
  // 在页面刚显示出来的时候，立即调用setBadge()方法，为tarBar设置数字徽标
  onShow() {
    this.setBadge()
  },
  methods: {
    setBadge() {
      // 为购物车设置右上角的徽标
      uni.setTabBarBadge({
        index: 2,  // 购物车
        text: this.total + '',    // 徽标只能是数字类型     转换：将数字转换为字符串 + ''
      })
    }
  }
}

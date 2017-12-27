<template>
  <div class="indexNavThree">
    <ul>
      <li>
        <router-link to="/index" class="Arouter-link">
          <i class="icon-index"></i>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/classify" class="Arouter-link">
          <i class="icon-classify"></i>
          <span>分类</span>
        </router-link>
      </li>
      <li>
        <router-link to="/new" class="Arouter-link">
          <i class="icon-new"></i>
          <span>消息</span>
        </router-link>
      </li>
      <li>
        <router-link to="/shopCart" class="Arouter-link">
          <i class="icon-shopCart"></i>
          <span>购物车</span>
        </router-link>
      </li>
      <li>
        <router-link to="/personal" class="Arouter-link">
          <i class="icon-personal"></i>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style>
  .indexNavThree {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: .48rem;
    background: #fff;
    border-top: 1px solid #efeff4;
  }

  .indexNavThree ul li {
    float: left;
    width: 20%;
  }

  .Arouter-link {
    display: block;
    width: 100%;
    height: .5rem;
    text-align: center;
    font-size: .1rem;
    color: #666;
  }

  .indexNavThree li img {
    width: .22rem;
    height: .22rem;
    margin-top: .06rem;
  }

  .icon-index {
    background: url(../../images/navBom.png);
    background-size: 100% 100%;
    width: .22rem;
    height: .22rem;
    display: inline-block;
    margin-top: .04rem;
  }

  .icon-classify {
    background: url(../../images/navBom1.png);
    background-size: 100% 100%;
    width: .22rem;
    height: .22rem;
    display: inline-block;
    margin-top: .04rem;
  }

  .icon-shopCart {
    background: url(../../images/navBom2.png);
    background-size: 100% 100%;
    width: .22rem;
    height: .22rem;
    display: inline-block;
    margin-top: .04rem;
  }

  .icon-personal {
    background: url(../../images/navBom3.png);
    background-size: 100% 100%;
    width: .22rem;
    height: .22rem;
    display: inline-block;
    margin-top: .04rem;
  }

  .icon-new {
    background: url(../../images/navBom4.png);
    background-size: 100% 100%;
    width: .24rem;
    height: .22rem;
    display: inline-block;
    margin-top: .04rem;
  }

  .indexNavThree li span {
    display: block;
  }

  .indexNavThree .router-link-active {
    color: #F6AB00;
  }

  .router-link-active .icon-index {
    background: url(../../images/navBom-1.png);
    background-size: 100% 100%;
    width: .22rem;
    height: .22rem;
    display: inline-block;
    margin-top: .04rem;
  }

  .router-link-active .icon-classify {
    background: url(../../images/navBom1-1.png);
    background-size: 100% 100%;
    width: .22rem;
    height: .22rem;
    display: inline-block;
    margin-top: .04rem;
  }

  .router-link-active .icon-shopCart {
    background: url(../../images/navBom2-1.png);
    background-size: 100% 100%;
    width: .22rem;
    height: .22rem;
    display: inline-block;
    margin-top: .04rem;
  }

  .router-link-active .icon-personal {
    background: url(../../images/navBom3-1.png);
    background-size: 100% 100%;
    width: .22rem;
    height: .22rem;
    display: inline-block;
    margin-top: .04rem;
  }

  .router-link-active .icon-new {
    background: url(../../images/navBom4-1.png);
    background-size: 100% 100%;
    width: .24rem;
    height: .22rem;
    display: inline-block;
    margin-top: .04rem;
  }
</style>

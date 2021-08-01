<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        
        <div class="notify__wrapper">

          <div class="notify__title">
            <p>Notify App</p>
          </div>

          <div class="notify__content">
            <Notify
              :messages="messages"
            />
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
  import Notify from '@/components/Notify.vue'

  export default {
    components: {
      Notify
    },
    data () {
      return {
        messages: [
          { title: 'message 1' },
          { title: 'message 2' },
          { title: 'message 3' },
          { title: 'message 4' },
          { title: 'message 5' },
          { title: 'message 6' },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }

  .notify__wrapper{
    width: 400px;
    background-color: #fff;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 12px 22px 0 rgba($color: #000000, $alpha: .1);
  }

  .notify__content{
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 300px;
  }

  .notify__title {
    p {
      font-size: 24px;
    }
  }
</style>
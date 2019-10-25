<template>
    <view class="container">
        <text-input class="text-input" />
        <touchable-opacity class="button">
            <text class="button-text">Add</text>
        </touchable-opacity>
    </view>
</template>

<script>
    export default {}
</script>

<style>
  .container {
      flex-direction: row;
      padding: 20px;
  }
  .text-input {
      background-color: white;
      margin-right: 5px;
      flex: 3;
  }
  .button {
      flex: 1;
      background-color: #008080;
      margin-left: 5px;
      align-items: center;
      justify-content: center;
      padding-top: 10px;
      padding-bottom: 10px;
  }
  .button-text {
      color: white;
      font-weight: normal;
  }
</style>
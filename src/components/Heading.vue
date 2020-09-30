<template>
  <div class="parent">
    <div class="caption">
      <div class="text-box">
        <div>Blazing Fast</div>
        <div>Ad-free</div>
        <div>Modern</div>
      </div>
      URL Shortener
    </div>
    <h5>
      Powered by
      <a href="https://redis.io/">
        <img src="@/assets/redis.svg" alt="redis" style="width:4em" />
      </a>
    </h5>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.parent {
  position: relative;
  left: 50%;
  margin-top: 50%;
  transform: translate(-50%, -50%);
}
@media only screen and (max-width: 600px) {
  .parent {
    margin-top: 100%;
  }
}
h2 {
  font-family: "Asap", sans-serif;
}
.caption {
  font-family: "Bebas Neue", cursive;
  line-height: 100px;

  font-size: calc(4em + 2vw);
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
}

.text-box div {
  left: 0;
  right: 0;
  position: absolute;
  transform: rotateX(-90deg);
  opacity: 0;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  animation-timing-function: ease;
}

.text-box div:nth-child(1) {
  animation: rollDown 10s forwards infinite;
}

.text-box div:nth-child(2) {
  animation: rollDown2 10s forwards infinite;
}

.text-box div:nth-child(3) {
  animation: rollDown3 10s forwards infinite;
}

@keyframes rollDown {
  0% {
    top: -200px;
    transform: rotateX(-90deg);
  }
  11% {
    top: -74px;
    transform: rotateX(0deg);
    opacity: 1;
  }
  22% {
    top: -74px;
    transform: rotateX(0deg);
    opacity: 1;
  }
  33% {
    top: 50px;
    transform: rotateX(30deg);
    opacity: 0;
  }
}

@keyframes rollDown2 {
  33% {
    top: -200px;
    transform: rotateX(-90deg);
  }
  44% {
    top: -74px;
    transform: rotateX(0deg);
    opacity: 1;
  }
  55% {
    top: -74px;
    transform: rotateX(0deg);
    opacity: 1;
  }
  66% {
    top: 50px;
    transform: rotateX(30deg);
    opacity: 0;
  }
}

@keyframes rollDown3 {
  66% {
    top: -200px;
    transform: rotateX(-90deg);
  }
  77% {
    top: -74px;
    transform: rotateX(0deg);
    opacity: 1;
  }
  88% {
    top: -74px;
    transform: rotateX(0deg);
    opacity: 1;
  }
  99% {
    top: 50px;
    transform: rotateX(30deg);
    opacity: 0;
  }
}
</style>

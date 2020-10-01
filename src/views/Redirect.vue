<template>
  <div class="title">
    <h1>REDIRECTING...</h1>
  </div>
</template>

<script>
import "@/animation-helpers/redirect";
import { requestsMixin } from "@/mixins/requestMixins";
import { userShortLinks, firebase } from "@/firebase";

export default {
  name: "Redirect",
  mixins: [requestsMixin],
  async mounted() {
    var shortId = this.$route.params.id;
    var { redirectUrl } = await this.getUrl(shortId);
    userShortLinks.doc(shortId).update({
      clicks: firebase.firestore.FieldValue.increment(1)
    });

    console.log(redirectUrl);
    var url = new URL(redirectUrl);
    window.location.replace(url.href);
  },
  created() {
    document.title = "ShortR | Redirecting...";
  }
};
</script>
<style>
body {
  background-image: none;
}
</style>
<style lang="sass" scoped>
body
  margin: 0
  padding: 0
  overflow: hidden
  width: 100%
  height: 100%
  background: #EFEFEF


.title
  z-index: 10
  position: absolute
  left: 50%
  top: 50%
  transform: translateX(-50%) translateY(-50%)
  text-align: center
  width: 100%
  h1
    position: relative
    color: #121212
    font-weight: 600
    font-size: 60px
    padding: 0
    margin: 0
    line-height: 1
</style>

<style></style>

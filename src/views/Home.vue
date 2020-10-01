<template>
  <b-container>
    <Header></Header>
    <b-row>
      <b-col cols="12" md="6">
        <div style="position:relative">
          <Heading></Heading>
        </div>
      </b-col>
      <b-col cols="12" md="6" align-self="center">
        <b-form @submit.prevent="generateShortUrl" v-if="!shortId">
          <div class="text-input">
            <b-form-input
              type="text"
              id="input1"
              v-model="originalUrl"
              placeholder="Type or paste any URL!"
              pattern="[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
              title="Invalid URL"
              required
            />
            <label for="input1">URL</label>
          </div>
          <b-button
            variant="dark"
            class="mt-2"
            type="submit"
            :disabled="loading"
          >
            Shorten
          </b-button>
        </b-form>
        <div v-else>
          <b-input-group>
            <template v-slot:prepend>
              <b-input-group-text style="background: #e03616;color: white;"
                >Short Url</b-input-group-text
              >
            </template>
            <b-form-input
              readonly
              :value="getHost + '/' + shortId"
            ></b-form-input>

            <template v-slot:append>
              <b-button
                variant="success"
                v-clipboard="() => getHost + '/' + shortId"
              >
                <b-icon
                  icon="clipboard-plus"
                  aria-label="Copy to clipboard"
                ></b-icon>
              </b-button>
            </template>
          </b-input-group>
          <b-button variant="dark" class="mt-2" @click="clear()">
            Try another!
          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { userShortLinks } from "@/firebase";
import { requestsMixin } from "@/mixins/requestMixins";
export default {
  data() {
    return {
      originalUrl: String(),
      shortId: null,
      loading: Boolean(false),
      error: String()
    };
  },
  components: {
    Heading: () => import("@/components/Heading.vue"),
    Header: () => import("@/components/Header.vue")
  },
  mixins: [requestsMixin],
  name: "Home",
  methods: {
    async generateShortUrl() {
      try {
        this.loading = true;
        const res = await this.addUrl(this.originalUrl);
        console.log(res);
        const { shortId, redirectUrl } = res.data;
        console.log(shortId);
        userShortLinks.doc(shortId).set({
          uid: this.$store.state.user.uid,
          clicks: Number(0),
          url: redirectUrl
        });

        this.shortId = shortId;
        this.loading = false;
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    },
    clear() {
      this.originalUrl = null;
      this.shortId = null;
      this.error = null;
      this.loading = false;
    }
  },
  computed: {
    getHost() {
      return window.location.origin;
    }
  },
  created() {
    document.title = "ShortR | Free URL Shortener";
  }
};
</script>

<style>
body {
  background-image: url("/img/background.svg");
  background-size: auto 100%;
  background-position: right -30% top;
  background-repeat: no-repeat;
  height: 100vh;
}
@media only screen and (max-width: 600px) {
  body {
    background-position: right top;
  }
}
</style>
<style lang="scss" scoped>
.promo {
  background: rgba(255, 255, 255, 0.3);
}

.text-input {
  position: relative;
  margin-top: 50px;

  input[type="text"] {
    display: inline-block;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 10px 10px 10px 100px;
    transition: all 0.1s ease-out;
  }
  .input-group-text {
    background: #e03616;
    color: white;
  }

  input[type="text"] + label {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    color: white;
    border-radius: 3px 0 0 3px;
    padding: 0 20px;
    background: #e03616;
    transform: translateZ(0) translateX(0);
    transition: all 0.3s ease-in;
    transition-delay: 0.2s;
  }

  input[type="text"]:focus + label {
    transform: translateY(-120%) translateX(0%);
    border-radius: 3px;
    transition: all 0.1s ease-out;
  }

  input[type="text"]:focus {
    padding: 10px;
    transition: all 0.3s ease-out;
    transition-delay: 0.2s;
  }
}
</style>

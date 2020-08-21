<template>
  <div>
    <div
      class="hero is-medium heroBackgroundImage"
      v-bind:style="{ backgroundImage: 'url(' + subjectPage.image +')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }"
    >
      <div class="hero-head">
        <NavigationBar v-bind:user="this.user"></NavigationBar>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">{{subject}}</h1>
        </div>
      </div>
    </div>
    <section class="section is-medium has-text-centered">
      <p v-scrollanimation id="citation" class="title citat">{{subjectPage.citation}}</p>
    </section>
    <div v-if="subject == 'OM'">
      <section class="section is-small has-text-centered">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-8">
              <p
                v-scrollanimation
                class="content"
              >essou er en platform, hvor din mentale sundhed og balance er i fokus. Gennem deling af personlige erfaringer, faglig viden og kærlige værktøjer til dagligdagen ønsker vi at inspirere til en kultur, hvor du står øverst på to-do listen. Vi vil bidrage til en nuancering af, hvilken betydning og påvirkning stress har for den enkelte gennem fortællinger, man kan spejle sig i, og hvor den positive vinkel skaber håb om, at stress kan være en øjenåbner og anledning til at ændre retning i livet. Ved at se travlhed og stress som en mulighed for at gentænke din livsstil samt genfinde dig selv og dine værdier, kan du designe en mere meningsfuld tilværelse med alt det, der opløfter dig. Du har ansvaret og evnerne til at skabe dit bedste liv, og det er vores intention at styrke din bevidsthed om, hvordan det kan se ud i praksis.</p>
              <br />
              <h1 class="title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style="height: 32px; width: 32px;"
                >
                  <path d="M0 0h512v512H0z" fill="#000000" fill-opacity="0.01" />
                  <g class transform="translate(0,0)" style="touch-action: none;">
                    <g transform="translate(0, 0) scale(1, 1) rotate(-90, 256, 256)">
                      <path
                        d="M256 23C127.424 23 23 127.424 23 256C23 384.576 127.424 489 256 489C384.576 489 489 384.576 489 256C489 127.424 384.576 23 256 23Z"
                        class
                        fill="#000000"
                        fill-opacity="1"
                      />
                      <path
                        d="M249.906 41.09C128.036 47.807 130.066 256 256 256C381.215 256 383.935 461.872 264.168 470.83C261.458 470.93 258.736 471 256 471C137.152 471 41 374.848 41 256C41 139.19 133.883 44.31 249.906 41.09Z"
                        class
                        fill="#ffffff"
                        fill-opacity="1"
                      />
                      <path
                        d="M256 103C278.537 103 297 121.463 297 144C297 166.537 278.537 185 256 185C233.463 185 215 166.537 215 144C215 121.463 233.463 103 256 103Z"
                        class
                        fill="#ffffff"
                        fill-opacity="1"
                      />
                      <path
                        d="M256 327C233.463 327 215 345.463 215 368C215 390.537 233.463 409 256 409C278.537 409 297 390.537 297 368C297 345.463 278.537 327 256 327Z"
                        class="selected"
                        fill="#000000"
                        fill-opacity="1"
                      />
                    </g>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style="height: 32px; width: 32px;"
                >
                  <path d="M0 0h512v512H0z" fill="#000000" fill-opacity="0.01" />
                  <g class transform="translate(0,0)" style="touch-action: none;">
                    <g transform="translate(0, 0) scale(1, 1) rotate(-90, 256, 256)">
                      <path
                        d="M256 23C127.424 23 23 127.424 23 256C23 384.576 127.424 489 256 489C384.576 489 489 384.576 489 256C489 127.424 384.576 23 256 23Z"
                        class
                        fill="#000000"
                        fill-opacity="1"
                      />
                      <path
                        d="M249.906 41.09C128.036 47.807 130.066 256 256 256C381.215 256 383.935 461.872 264.168 470.83C261.458 470.93 258.736 471 256 471C137.152 471 41 374.848 41 256C41 139.19 133.883 44.31 249.906 41.09Z"
                        class
                        fill="#ffffff"
                        fill-opacity="1"
                      />
                      <path
                        d="M256 103C278.537 103 297 121.463 297 144C297 166.537 278.537 185 256 185C233.463 185 215 166.537 215 144C215 121.463 233.463 103 256 103Z"
                        class
                        fill="#ffffff"
                        fill-opacity="1"
                      />
                      <path
                        d="M256 327C233.463 327 215 345.463 215 368C215 390.537 233.463 409 256 409C278.537 409 297 390.537 297 368C297 345.463 278.537 327 256 327Z"
                        class="selected"
                        fill="#000000"
                        fill-opacity="1"
                      />
                    </g>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style="height: 32px; width: 32px;"
                >
                  <path d="M0 0h512v512H0z" fill="#000000" fill-opacity="0.01" />
                  <g class transform="translate(0,0)" style="touch-action: none;">
                    <g transform="translate(0, 0) scale(1, 1) rotate(-90, 256, 256)">
                      <path
                        d="M256 23C127.424 23 23 127.424 23 256C23 384.576 127.424 489 256 489C384.576 489 489 384.576 489 256C489 127.424 384.576 23 256 23Z"
                        class
                        fill="#000000"
                        fill-opacity="1"
                      />
                      <path
                        d="M249.906 41.09C128.036 47.807 130.066 256 256 256C381.215 256 383.935 461.872 264.168 470.83C261.458 470.93 258.736 471 256 471C137.152 471 41 374.848 41 256C41 139.19 133.883 44.31 249.906 41.09Z"
                        class
                        fill="#ffffff"
                        fill-opacity="1"
                      />
                      <path
                        d="M256 103C278.537 103 297 121.463 297 144C297 166.537 278.537 185 256 185C233.463 185 215 166.537 215 144C215 121.463 233.463 103 256 103Z"
                        class
                        fill="#ffffff"
                        fill-opacity="1"
                      />
                      <path
                        d="M256 327C233.463 327 215 345.463 215 368C215 390.537 233.463 409 256 409C278.537 409 297 390.537 297 368C297 345.463 278.537 327 256 327Z"
                        class="selected"
                        fill="#000000"
                        fill-opacity="1"
                      />
                    </g>
                  </g>
                </svg>
              </h1>
              <br />
              <p class="subtitle">For spørgsmål eller samarbejde</p>
              <p class="content">
                <a href="mailto:kontakt@essou.dk">kontakt@essou.dk</a>
              </p>
              <br />
              <h2 v-scrollanimation class="subtitle">BIOGRAFI</h2>
              <p
                v-scrollanimation
                class="content"
              >Simone Løkke er cand.merc i strategisk kommunikation og marketing fra Copenhagen Business School og har senest arbejdet med sociale medier, marketing, PR og events. Som følge af stress har hendes personlige rejse affødt en nysgerrighed for udvikling, selvindsigt og bevidsthed, der netop har resulteret i gennemførelsen af et seks måneders intensivt coachingforløb om menneskets og sindets potentiale.</p>
              <p
                v-scrollanimation
                class="content"
              >“For mig var stress reaktionen på en årelang negligering af mig selv og mine behov. Det blev en omvej i den rigtige retning med livslektien om at sænke tempoet, sætte grænser, sige nej tak og fylde min egen kop op før andres. Jeg nyder i dag et liv med langt større glæde, overskud og balance, og det er derfor mit ønske at være ambassadør for, at stress kan være en konstruktiv mulighed for at skabe en hverdag i større overensstemmelse med din essens. Denne platform er manifestationen af det indre arbejde med mig selv og drømmen om at viderebringe min viden og erfaring til gavn for dig. Jeg er ufatteligt taknemmelig for, at du læser med og håber, at du vil blive inspireret til at foretage kærlige ændringer i dit eget liv.”</p>
              <p v-scrollanimation class="content is-italic">-- Simone Løkke</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <ArticleGrid v-scrollanimation v-bind:subject="subject" />
    <InstagramGrid v-scrollanimation />
  </div>
</template>

<script>
import NavigationBar from "../components/Navigation.vue";
import ArticleGrid from "../components/ArticleGrid.vue";
import InstagramGrid from "../components/InstagramGrid.vue";
import subhomeDoc from "../subhome.js";

export default {
  Name: "SubHome",
  props: {
    user: {
      required: true,
      type: String,
    },
    subject: {
      required: true,
      type: String,
    },
  },
  components: {
    NavigationBar,
    ArticleGrid,
    InstagramGrid,
  },
  computed: {
    subjectPage: function () {
      return subhomeDoc.pages.find((element) => element.name === this.subject);
    },
  },
};
</script>

<style>
</style>

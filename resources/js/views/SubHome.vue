<template>
  <div>
    <div class="hero is-medium" v-bind:style="{ backgroundImage: 'url(' + subjectPage.image +')' }">
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
      <section class="section is-medium has-text-centered">
        <div class="container">
          <p v-scrollanimation
            class="content"
          >essou er en platform, hvor din mentale sundhed og balance er i fokus. Gennem deling af personlige erfaringer, faglig viden og kærlige værktøjer til dagligdagen ønsker vi at inspirere til en kultur, hvor du står øverst på to-do listen. Vi vil bidrage til en nuancering af, hvilken betydning og påvirkning stress har for den enkelte gennem fortællinger, man kan spejle sig i, og hvor den positive vinkel skaber håb om, at stress kan være en øjenåbner og anledning til at ændre retning i livet. Ved at se travlhed og stress som en mulighed for at gentænke din livsstil samt genfinde dig selv og dine værdier, kan du designe en mere meningsfuld tilværelse med alt det, der opløfter dig. Du har ansvaret og evnerne til at skabe dit bedste liv, og det er vores intention at styrke din bevidsthed om, hvordan det kan se ud i praksis.</p>
          <br />
          <h1 class="title">☯☯☯</h1>
          <br />
          <p class="subtitle">For spørgsmål eller samarbejde</p>
          <p class="content">
            <a href="mailto:kontakt@essou.dk">kontakt@essou.dk</a>
          </p>
          <br />
          <h2 v-scrollanimation class="subtitle">BIOGRAFI</h2>
          <p v-scrollanimation class="content">Simone Løkke er cand.merc i strategisk kommunikation og marketing fra Copenhagen Business School og har senest arbejdet med sociale medier, marketing, PR og events. Som følge af stress har hendes personlige rejse affødt en nysgerrighed for udvikling, selvindsigt og bevidsthed, der netop har resulteret i gennemførelsen af et seks måneders intensivt coachingforløb om menneskets og sindets potentiale.</p>
          <p v-scrollanimation class="content">“For mig var stress reaktionen på en årelang negligering af mig selv og mine behov. Det blev en omvej i den rigtige retning med livslektien om at sænke tempoet, sætte grænser, sige nej tak og fylde min egen kop op før andres. Jeg nyder i dag et liv med langt større glæde, overskud og balance, og det er derfor mit ønske at være ambassadør for, at stress kan være en konstruktiv mulighed for at skabe en hverdag i større overensstemmelse med din essens. Denne platform er manifestationen af det indre arbejde med mig selv og drømmen om at viderebringe min viden og erfaring til gavn for dig. Jeg er ufatteligt taknemmelig for, at du læser med og håber, at du vil blive inspireret til at foretage kærlige ændringer i dit eget liv.”</p>
          <p v-scrollanimation class="content is-italic">__ Simone Løkke</p>
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
      type: String
    },
    subject: {
      required: true,
      type: String
    }
  },
  components: {
    NavigationBar,
    ArticleGrid,
    InstagramGrid
  },
  computed: {
    subjectPage: function() {
      return subhomeDoc.pages.find(element => element.name === this.subject);
    }
  },
};
</script>

<style>
</style>

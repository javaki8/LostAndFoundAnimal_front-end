 <template>
  <v-container grid-list-xl>
    <MenuItem />
    <v-container>
      <v-layout row wrap>
        <v-btn @click="write()" depressed color="primary">글쓰기 </v-btn>
      </v-layout>
    </v-container>

    <v-layout row wrap>
      <v-flex xs12 sm4>
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>찾습니다.</v-card-title>

          <v-divider class="mx-4"></v-divider>
          <v-card-title
            v-for="(item, i) in list"
            :key="i"
            :item="item"
            :index="i"
          ></v-card-title>
          <v-card-title> </v-card-title>

          <v-btn @click="details(item.id)"> 상세보기 </v-btn>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4>
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>찾았어요.</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0"> </v-row>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>설명</v-card-title>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2"> 상세보기 </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4>
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>찾았어요.</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0"> </v-row>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-title>설명</v-card-title>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2"> 상세보기 </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-pagination v-model="page" :length="6"> </v-pagination>
  </v-container>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";
import api from "@/api/lostandfound";

export default {
  components: {
    MenuItem,
  },

  data: () => ({
    list: [],
    page: 1,
    dialog: false,
  }),
  mounted() {
    this.getLostAndFounds();
  },
  computed: {
    item() {
      return this.$store.state.list;
    },
  },
  methods: {
    async getLostAndFounds() {
      const result = await api.list();
      console.log(result);
      console.log(result.data);
      if (result.status == 200) {
        this.lostandfounds = result.data;
      }
    },
    details(id) {
      this.$router.push({ name: "details", params: { id } });
    },

    write() {
      this.$router.push("/Composition");
    },
  },
};
</script>
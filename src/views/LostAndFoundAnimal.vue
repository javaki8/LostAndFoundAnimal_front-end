 <template>
  <v-container grid-list-xl>
    <MenuItem />

    <v-layout row wrap>
      <v-btn @click="write()" depressed color="primary">글쓰기 </v-btn>
    </v-layout>
    <v-row>
      <v-col
        v-for="(item, i) in list"
        :key="i"
        :item="item"
        :index="i"
        cols="12"
        sm="4"
      >
        <v-card class="mx-auto my-12" max-width="374" @click="details(item.id)">
          <v-img height="300" :src="list.dataUrl"></v-img>

          <v-card-title>{{ item.lost }} {{ item.found }}</v-card-title>

          <v-card-text>
            <v-container>
              <v-row align="center" class="mx-0">
                <v-col sm="6">
                  <v-card flat> {{ item.date }} </v-card>
                </v-col>
                <v-col sm="6">
                  <v-card flat> {{ item.type }} </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col sm="6">
                  <v-card flat> {{ item.gender }} </v-card>
                </v-col>
                <v-col sm="6">
                  <v-card flat> {{ item.area }} </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination
      class="my-4"
      :total-visible="10"
      @input="changePage"
    ></v-pagination>
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
    files: [],
  }),
  mounted() {
    this.getLostAndFounds();
  },

  methods: {
    async getLostAndFounds() {
      const result = await api.list();
      console.log(result);
      console.log("목록 result.data");
      console.log(result.data);

      if (result.status == 200) {
        this.list = result.data;
        console.log("저장 후 리스트");
        console.log(this.list);
        let dataUrl = this.list[0].files[0].dataUrl;
        this.list.dataUrl = dataUrl;
      }
    },
    async changePage(value) {
      let page = value - 1;

      const result = await api.list(page);
      if (result.status == 200) {
        this.lists = result.data;
      }
    },

    details(id) {
      this.$router.push({ name: "Detail", params: { id } });
    },

    write() {
      this.$router.push("/Composition");
    },
  },
};
</script>
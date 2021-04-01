 <template>
  <v-container grid-list-xl>
    <MenuItem />
    <v-btn absolute light outlined color="indigo" @click="write()"
      >글쓰기
    </v-btn>

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
          <v-img height="320" :src="item.files[0].dataUrl"></v-img>

          <v-card-title>[{{ item.state }}]</v-card-title>

          <v-card-subtitle> {{ item.date }} </v-card-subtitle>

          <v-divider></v-divider>
          <v-card-text>
            <v-container>
              <v-row align="center" class="mx-0">
                <v-col>
                  <v-card flat> 종: {{ item.type }} </v-card>
                </v-col>

                <v-col>
                  <v-card flat> 성별: {{ item.gender }} </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card flat> 지역: {{ item.area }} </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination
      class="my-4"
      :total-visible="5"
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
 <template>
  <v-container>
    <MenuItem />
    <v-row justify="end">
      <v-btn class="mr-16" color="primary" outlined @click="write()"
        >글쓰기
      </v-btn>
    </v-row>
    <v-row>
      <v-col
        v-for="(item, i) in list"
        :key="i"
        :item="item"
        :index="i"
        cols="12"
        sm="4"
      >
        <v-card
          class="mx-auto my-12"
          max-width="450"
          min-height="500"
          @click="details(item.id)"
        >
          <v-img
            height="320"
            :alt="list.name"
            :src="item.files[0].dataUrl"
          ></v-img>
          <v-row>
            <v-col>
              <v-card-title>[{{ item.state }}]</v-card-title>
            </v-col>
            <v-col>
              <v-card-subtitle>
                <v-icon left color="primary"> mdi-alarm-check </v-icon
                >{{ item.date }}
              </v-card-subtitle>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-card-text>
            <v-container>
              <v-row align="center" class="mx-0">
                <v-col>
                  <v-card flat> 축종: {{ item.type }} </v-card>
                </v-col>

                <v-col>
                  <v-card flat> 성별: {{ item.gender }} </v-card>
                </v-col>
              </v-row>
              <v-row align="center" class="mx-0">
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
      v-model="page"
      class="my-4"
      :length="totalPages"
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
    totalPages: 0,
    dialog: false,
    files: [],
  }),
  mounted() {
    this.getLostAndFounds();
  },

  methods: {
    async getLostAndFounds() {
      let page = 0;
      const result = await api.list(page);
      console.log(result);
      if (result.status == 200) {
        this.list = result.data.content;
        this.totalPages = result.data.totalPages;
      }
    },
    async changePage(value) {
      let page = value - 1;

      const result = await api.list(page);
      if (result.status == 200) {
        this.list = result.data.content;
      }
      const btnList = document.querySelectorAll(".v-pagination button");
      for (let btn of btnList) {
        btn.blur();
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
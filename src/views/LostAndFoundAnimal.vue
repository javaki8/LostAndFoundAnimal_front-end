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

          <v-card-title>
            {{ lostandfounds }}
          </v-card-title>

          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="deep-purple lighten-2"
                text
                v-bind="attrs"
                v-on="on"
              >
                상세보기
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline grey lighten-2">
                강아지를 찾습니다.
              </v-card-title>

              <v-card-text> 상세내용과 사진 </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  닫기
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
  data() {
    return {
      page: 1,
      dialog: false,
    };
  },
  mounted() {
    this.getLostAndFounds();
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
    async share() {
      const lostandfound = {
        name: this.name,
        area: this.area,
        color: this.color,
        gender: this.gender,
        number: this.number,
        lost: this.lost,
        found: this.found,
        date: this.date,
        content: this.content,
      };

      const result = await api.post(lostandfound);
      console.log(result);
      console.log(result.data);

      if (result.status == 200) {
        const newAnimal = result.data;
        newAnimal.files = [];

        if (this.files && this.files.length > 0) {
          const lostandfoundId = newAnimal.id;

          for (let file of this.files) {
            const form = new FormData();
            form.append("data", file);
            const result = await api.uploadFile(lostandfoundId, form);
            console.log(result.data);

            newAnimal.files.push({
              ...result.data,
            });
          }
        }
        console.log(newAnimal);
        this.lostandfounds.unshift(newAnimal);
      }

      this.post = "";
      this.files = [];
    },

    write() {
      this.$router.push("/Composition");
    },
  },
};
</script>
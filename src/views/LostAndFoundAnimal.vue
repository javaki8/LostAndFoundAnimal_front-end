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
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
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

          <v-card-text>
            <v-row align="center" class="mx-0"> </v-row>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>설명.</v-card-title>

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

              <v-card-text>
                상세내용 어쩌고 저쩌고 사진도 가져오고
              </v-card-text>

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
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
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
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              상세보기
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4>
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
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
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              상세보기
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-pagination v-model="page" :length="6"> </v-pagination>
  </v-container>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";
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

  methods: {
    write() {
      this.$router.push("/Composition");
    },
  },
};
</script>
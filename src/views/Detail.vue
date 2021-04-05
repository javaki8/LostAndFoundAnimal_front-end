<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="10" lg="4">
        <v-card>
          <v-img
            :alt="list.name"
            v-if="list.files"
            :src="list.files[0].dataUrl"
          >
            <v-chip class="headline ma-5 orange" text-color="white">
              {{ list.state }}
            </v-chip></v-img
          >
          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                성별
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.gender }} </v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                색깔
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.color }} </v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                이름
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.name }} </v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                연락처
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.number }} </v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                날짜
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.date }} </v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                지역
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.area }} </v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                특징
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.content }} </v-card-title>
            </v-col>
          </v-row>
        </v-card>
        <v-btn class="ma-2" outlined color="indigo" @click="animal">목록</v-btn>

        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="indigo" v-bind="attrs" v-on="on">
              전단지</v-btn
            >
          </template>

          <v-card>
            <v-card-title class="headline orange lighten-1">
              {{ list.type }}를 찾습니다.
            </v-card-title>
            <v-img
              :alt="list.name"
              v-if="list.files"
              :src="list.files[0].dataUrl"
            >
              <h3 class="orange lighten-3" align="center">
                여러분의 제보가 큰 힘이 됩니다.
              </h3></v-img
            >
            <v-row>
              <v-col>
                <v-card-title>
                  <v-chip class="ma-2" color="orange" label text-color="white">
                    축 종
                  </v-chip>
                  {{ list.type }}
                </v-card-title>
              </v-col>

              <v-col>
                <v-card-title>
                  <v-chip class="ma-2" color="orange" label text-color="white">
                    날 짜
                  </v-chip>
                  {{ list.date }}
                </v-card-title>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card-title>
                  <v-chip class="ma-2" color="orange" label text-color="white">
                    지 역
                  </v-chip>
                  {{ list.area }}
                </v-card-title>

                <v-card-title>
                  <v-chip class="ma-2" color="orange" label text-color="white">
                    색 깔
                  </v-chip>
                  {{ list.color }}</v-card-title
                >

                <v-card-title>
                  <v-chip class="ma-2" color="orange" label text-color="white">
                    성 별
                  </v-chip>
                  {{ list.gender }}
                </v-card-title>
              </v-col>
            </v-row>

            <v-card-title>
              <v-chip class="ma-2" color="orange" label text-color="white">
                특 징
              </v-chip>
              {{ list.content }}
            </v-card-title>

            <v-divider></v-divider>
            <v-card-title>
              <v-chip class="ma-2" color="orange" label text-color="white">
                TEL )
              </v-chip>
              {{ list.number }}
            </v-card-title>

            <v-divider></v-divider>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/api/lostandfound";

export default {
  name: "Detail",
  data: () => ({
    list: [],
    htmlUrl: "",
    dialog: false,
  }),
  mounted() {
    this.getDetails();
  },

  methods: {
    async getDetails() {
      let id = this.$route.params.id;
      const result = await api.details(id);
      console.log("---Detail data----");
      console.log(result.data);

      if (result.status == 200) {
        this.list = result.data;
      }
    },
    animal() {
      return this.$router.go(-1);
    },
  },
};
</script>
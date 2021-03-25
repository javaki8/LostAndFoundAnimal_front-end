<template>
  <div>
    <menu-tabs></menu-tabs>
    <v-container>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="6" align-self="center">
          <v-card class="mx-auto my-12" max-width="80%" flat>
            <v-img :src="lists.popfile"></v-img>
            <v-row>
              <v-col>
                <v-card-title class="headline mb-1">{{
                  list.processState
                }}</v-card-title>
              </v-col>
              <v-col> </v-col>
            </v-row>
            <v-card-text>
              <v-container>
                <v-list>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="#C7AD7F"> mdi-paw </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ list.gender }}/{{ list.color }}/{{ list.name }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="#C7AD7F"> mdi-paw </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        날짜: {{ list.date }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="#C7AD7F"> mdi-paw </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        지역: {{ list.area }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="#C7AD7F"> mdi-paw </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        연락처: {{ list.number }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="#C7AD7F"> mdi-paw </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        특징: {{ list.content }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-container>
            </v-card-text>
          </v-card>
          <v-btn depressed @click="animal">목록</v-btn>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from "@/api/lostandfound";
export default {
  name: "details",
  data: () => ({
    lists: [],
  }),
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      let id = this.$route.params.id;
      const result = await api.details(id);
      console.log("----result.data----");
      console.log(result.data);
      if (result.status == 200) {
        this.lists = result.data;
      }
    },

    animal() {
      return this.$router.go(-1);
    },
  },
};
</script>
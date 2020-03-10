<template>
  <div
    class="flex bg-white flex-no-shrink my-10 h-32 w-auto max-w-2xl rounded p-4 shadow-md hover:shadow-lg"
  >
    <div v-if="activeUser" class="flex">
      <img :src="activeUser.profile_img" alt="Profile Picture" class="w-24 h-24 rounded-full p-1">
      <div class="flex flex-col px-6 w-64">
        <span class="text-xl font-light">{{ activeUser.name }}</span>
        <span class="text-indigo-500 font-light">{{ activeUser.role }}</span>
        <span class="text-grey text-sm font-light">
          {{
          activeUser.email
          }}
        </span>
        <span class="text-grey text-sm font-light mb-2">
          {{
          activeUser.insta
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "User",
  created() {
    this.$store.dispatch("getUser");
  },
  computed: {
    ...mapGetters(["activeUser"])
  }
};
</script>

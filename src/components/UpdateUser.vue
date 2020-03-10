<template>
  <div class="w-5/6 md:w-3/4 lg:w-2/3 mx-auto mt-8" v-if="activeUser">
    <h2 class="font-light">Account Settings</h2>
    <div class="flex mt-8 pt-8 border-t border-grey-light">
      <div class="w-64 hidden md:block">
        <div class="mb-2">Profile</div>
        <span class="text-xs text-grey-dark">
          Keep your user infomation up to date so that team members can contact
          you.
        </span>
      </div>
      <form @submit.prevent="updateUser(user);" class="flex flex-col md:ml-8 w-full" :key="key">
        <label for="name" class="text-grey-darker font-light inline-block mb-2">Name</label>
        <input
          class="w-full appearance-none border rounded py-2 px-3 mb-6 text-grey-darkest"
          id="name"
          :value="activeUser.name"
          @input="updateLocalUser($event);"
        >
        <label for="role" class="text-grey-darker font-light inline-block mb-2">Title</label>
        <input
          class="w-full appearance-none border rounded py-2 px-3 mb-6 text-grey-darkest"
          id="role"
          :value="activeUser.role"
          @input="updateLocalUser($event);"
        >
        <label for="email" class="text-grey-darker font-light inline-block mb-2">Email</label>
        <input
          class="w-full appearance-none border rounded py-2 px-3 mb-6 text-grey-darkest"
          id="email"
          :value="activeUser.email"
          @input="updateLocalUser($event);"
        >
        <label for="insta" class="text-grey-darker font-light inline-block mb-2">Instagram</label>
        <input
          class="w-full appearance-none border rounded py-2 px-3 text-grey-darkest"
          id="insta"
          :value="activeUser.insta"
          @input="updateLocalUser($event);"
        >
        <div class="flex items-center">
          <input
            class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 my-6 rounded w-48 tracking-wide"
            type="submit"
            value="Submit"
          >
          <a class="text-blue hover:underline ml-4" @click="key++;">Reset</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UpdateUser",
  data() {
    return {
      user: {},
      key: 1
    };
  },
  computed: {
    ...mapGetters(["activeUser"])
  },
  methods: {
    ...mapActions(["updateUser"]),
    updateLocalUser(e) {
      this.$set(this.user, e.target.id, e.target.value);
    }
  }
};
</script>

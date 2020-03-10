<template>
  <main
    class="container mx-auto flex flex-col w-screen h-screen m-0 bg-grey-lighter justify-start items-center"
  >
    <User /> <UpdateUser />
  </main>
</template>

<script>
import User from "./User.vue";
import UpdateUser from "./UpdateUser.vue";

export default {
  name: "Home",
  components: {
    User,
    UpdateUser
  }
};
</script>
<style css>
body {
  background: #f1f5f8;
}
</style>

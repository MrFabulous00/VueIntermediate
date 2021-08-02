<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">회원 ID: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">비밀번호: </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <div>
      <label for="password">비밀번호 확인: </label>
      <!--<el-input
        placeholder="Please input password"
        v-model="input"
        show-password
        >비밀번호 확인:
      </el-input>-->
      <input id="password" type="password" v-model="password" />
    </div>
    <div>
      <label for="name">이름: </label>
      <input id="name" type="text" v-model="name" />
    </div>
    <div>
      <label for="homeNumber">집전화: </label>
      <input id="homeNumber" type="number" v-model="homeNumber" />
    </div>
    <div>
      <label for="phoneNumber">Phone: </label>
      <input id="phoneNumber" type="number" v-model="phoneNumber" />
    </div>
    <div>
      <label for="email">E-MAIL: </label>
      <input id="email" type="email" v-model="email" />
    </div>
    <div>
      <el-radio v-model="radio" label="1">Option A</el-radio>
      <el-radio v-model="radio" label="2">Option B</el-radio>
    </div>

    <button type="submit">제출</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      username: '',
      password: '',
      name: '',
      radio: '1',
      homeNumber: '',
      phoneNumber: '',
      email: '',
    };
  },
  methods: {
    submitForm: function() {
      // event.preventDefault();
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password,
        name: this.name,
      };

      axios
        .post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>

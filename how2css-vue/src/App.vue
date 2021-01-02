<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand" href="#">How2CSS</a>
        <ul class="navbar-nav">
            <li class="nav-item active"><a class="nav-link" routerLink="">Home</a></li>
            <li class="nav-item">
                <a class="nav-link" >Page 1</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" >Page 2</a>
            </li>
        </ul>
        <form class="navbar-form navbar-left form-inline">
            <div class="form-group">
                <input type="text" class="form-control mr-sm-2" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link to="/signup" class="nav-link"><span><i class="fas fa-user-plus"></i></span> Sign Up</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link"><span><i class="fas fa-sign-in-alt"></i></span> Sign In</router-link>
            </li>
        </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
      document.head.appendChild(recaptchaScript)
      recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js')
      document.head.appendChild(recaptchaScript)
      recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js')
      document.head.appendChild(recaptchaScript)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

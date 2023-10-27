<script lang="ts">
  // Deps
  import { Router, Link, Route } from "svelte-routing";

  // Routes
  import Home from "./routes/Home.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/" component={Home} />
  </div>
</Router>

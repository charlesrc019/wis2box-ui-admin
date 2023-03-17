<template id="app-nav">
  <div class="app-nav">
    <v-app-bar flat class="mb-2" color="#FFFFFF">
      <v-btn-toggle borderless>
        <v-hover
          v-for="(item, i) in items"
          :key="i"
          v-slot="{ isHovering, props }"
        >
          <v-btn
            v-bind="props"
            :href="item.href"
            :to="item.target"
            :target="`_window_${item.text}`"
            :color="isHovering ? '#014e9e' : undefined"
            class="font-weight-bold"
            variant="text"
          >
            {{ $t(`navigation.${item.text}`) }}
            <v-icon v-if="item.href !== undefined"> mdi-open-in-new </v-icon>
          </v-btn>
        </v-hover>
      </v-btn-toggle>
    </v-app-bar>
  </div>
</template>

<script>
import main from "../../../package";
let baseURL = window.VUE_ADMIN_URL;

import { defineComponent } from "vue";

export default defineComponent({
  name: "AppNav",
  template: "#app-nav",
  data: function () {
    return {
      items: [
        {
          text: "home",
          target: undefined,
          href: "/",
        },
        {
          text: "datasets",
          target: "/",
          href: undefined,
        },
        {
          text: "stations",
          target: "/stations",
          href: undefined,
        },
        {
          text: "monitoring",
          target: undefined,
          href: `${baseURL}monitoring`,
        },
        {
          text: "documentation",
          target: undefined,
          href: main.documentation,
        },
      ],
    };
  },
});
</script>

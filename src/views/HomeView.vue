<script setup>
import { useBackgroundStore } from "../store/useBackgroundStore";
import { storeToRefs } from "pinia";

const sceneStore = useBackgroundStore();

const { rotX, rotY, rotZ } = storeToRefs(sceneStore);
const { changeX, changeY } = sceneStore;
const moveMap = (x, y) => {
  changeX(x);
  changeY(y);
};

window.addEventListener("mousemove", function (e) {
  moveMap(e.clientX / 10000, e.clientY / 10000);
});
</script>

<template>
  <div class="home-container">
    <h1 style="text-shadow: 0 0 6px black">Welcome</h1>
    <Renderer orbit-ctrl :alpha="true" resize="window" class="scene">
      <Camera
        :position="{ x: 0, y: 0, z: 0 }"
        :lookAt="{ x: rotX + 6, y: rotY, z: 2 }"
        :fov="60"
      />
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <GltfModel
          src="/src/assets/3dFiles/ship_in_clouds/scene.gltf"
          @load="onReady"
          :position="{ x: rotX, y: rotY, z: 1.5 }"
        />
      </Scene>
    </Renderer>
  </div>
</template>

<script>
import {
  Box,
  Camera,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene,
  GltfModel,
} from "troisjs";
export default {
  components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene, GltfModel },
  methods: {
    onReady(model) {
      console.log(model);
    },
  },
};
</script>

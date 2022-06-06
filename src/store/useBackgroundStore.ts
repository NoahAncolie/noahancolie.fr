import { defineStore } from 'pinia'

export const useBackgroundStore = defineStore("backgroundStore", {
    state: () => ({
        rotX: 0,
        rotY: 0,
        rotZ: 1
    }),
    actions: {
        changeX(value){
            this.rotX = value
        },
        changeY(value){
            this.rotY = value
        },
        changeZ(value){
            this.rotZ = value
        }
    }
})
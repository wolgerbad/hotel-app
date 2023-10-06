import {defineStore} from "pinia"
import axios from "axios"
import {Item} from "../interfaces/Item"



export const useRoomStore = defineStore("room-store", {
    state: () => ({
        rooms:<Item[]>[],
         } ),
    actions: {
        getRooms() {
            axios.get("http://localhost:3000/data")
            .then(res=> this.rooms = res.data)
        }
    },
    getters: {
        boughtRooms(): Item[] {
            return this.rooms.filter(room => room.isBought === true)
            
        }
    }
})
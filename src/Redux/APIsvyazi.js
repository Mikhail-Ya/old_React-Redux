import * as axios from "axios";

const nominal = axios.create({

})

export const PolzovateliAPI = {
    pokazPolzovateley() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
    },
}
export const DialogAPI = {
    chat() {
        axios.get('')
    },
    soobshenie() {
        axios.get('')
    },
}
export const ProfileAPI = {
    anketa(id) {
        axios.get(''+ id)
    },
    publikaciya() {
        axios.post('',{})
    },
    dayPublikacii(id) {
        axios.get(''+ id)
    }
}
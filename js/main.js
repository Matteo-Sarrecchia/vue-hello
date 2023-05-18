const {createApp} = Vue;

createApp ({
    data(){
        return {
            message: "Hello Word",
            miaClasse: "red",
            img: "img/01.webp"
        }
    },
    method(){
        miaClasse = "blue"
    }
}).mount("#app")

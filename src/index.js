import Vue from 'vue'
import App from './components/App.vue'

new Vue({
    render:h=>h(App)
}).$mount("#app")

function isValidJSON(text) {
    try {
        JSON.parse(text);
        return true;
    } catch {
        return false;
    }
}

console.log(isValidJSON(`{"name:"lopez"}`))
console.log("funciona")
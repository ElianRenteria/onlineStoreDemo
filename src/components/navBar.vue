<script>
    import { useRoute, useRouter } from 'vue-router'

    export default {
        setup() {
            const route = useRoute();
            const router = useRouter();

            const navigateTo = (path) => {
                router.push(path);
            }

            return {
                navigateTo,
                isHome: route.name === 'Home',
                isShop: route.name === 'Shop',
                isContact: route.name === 'Contact',
                isAbout: route.name === 'About',
                isCart: route.name === 'Cart'
            }
        }
    };
</script>

<template>
    <div id="menu">
        <Button class="logo" @click="navigateTo('/')"><h1>LOGO</h1></Button>
        <ul>
            <li class="active"><Button label="Home" :class="{ active: isShop }" @click="navigateTo('/')"></Button></li>
            <li><Button label="Shop" :class="{ active: isShop }" @click="navigateTo('/shop')"></Button></li>
            <li><Button label="Contact" :class="{ active: isContact }" @click="navigateTo('/contact')"></Button></li>
            <li><Button label="About" :class="{ active: isAbout }" @click="navigateTo('/about')"></Button></li>
        </ul>
        <Button id="shoppingCart" :class="{ active: isCart }" @click="navigateTo('/cart')"><i class="pi pi-shopping-cart" style="font-size: 1.5rem"></i></Button>
    </div>
</template>

<style scoped>
    #menu {
        background-color: var(--surface-section);
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
        width: 100%;
    }  
    #menu ul {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        color: rgb(22, 10, 10);
        padding: 10px;
        width: 100%;
    }
    #menu ul li {
        list-style-type: none;
    }
    #menu ul li Button{
        background-color: var(--surface-section);
        color: var(--text-color);
        border: none;
    }
    .logo {
        background-color: var(--surface-section);
        color: var(--text-color);
        border: none;
    }
    #shoppingCart {
        background-color: var(--surface-section);
        color: var(--text-color);
        border: none;
    }
    .active {
        color: Blue;
    }
    h1 {
        color: var(--text-color);
    }
</style>
<template>
    <div>
        <p>未到找指定页面</p>
        <Row type="flex" justify="center">
            <Button class="back" @click="back">返回页面</Button>
        </Row>
        
    </div>
</template>

<script>
export default {
    name: 'error',
    data() {
        return {
        }
    },
    methods: {
        back() {
            this.$router.back()
        },
    },
}
</script>

<style scoped>
div {
    width: 100%;
    height: 100%;
    background: #f8f5ec;
}
p {
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
}
.back {
    text-align:center;
}
</style>
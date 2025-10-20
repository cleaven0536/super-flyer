<template>
  <div class="stats-card">
    <h2>欢迎回来！管理员</h2>
    <div class="stats-card-introduction" style="display: flex; align-items: center; justify-content: space-between;">
        <h3 style="margin: 0;">无人机货物量</h3>
    </div>

    <div class="amount">
        <img class="immg" src="../images/test.png" alt="暂定图标"/>
    </div>

    <div class="stats-card-introduction" style="display: flex; align-items: center; justify-content: space-between;">
        <h3 style="margin: 0;">赈灾应急物流调配</h3>
        <div class="sos">
            <div class="sos-img">
                <img src=" " alt="救援图标  " />
                <p>灾情管理范围</p>
            </div>
            <div class="sos-img">
                <img src=" " alt="救援图标  " />
                <p>无人机所在地</p>
            </div>
        </div>
    </div>
    <div class="amount">
        <img class="immg" src="../images/test.png" alt="暂定图标"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Information'
}
</script>

<style scoped>
.sos{
    display: flex;
    height: 30px;
    width: 250px;
    background: #fff;
    flex-direction: column;
    padding: 10px 20px;
}
.sos-img{
    flex: 1;
    display: flex;
    align-items: center;
    margin-right: 20px;
    gap: 8px;
}
.immg{
    height: 220px;
    width: 80%;
    margin: 20px 0;
    text-align: center; 
}
</style>
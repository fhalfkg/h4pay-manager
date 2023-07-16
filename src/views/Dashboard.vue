<script setup lang="ts"></script>

<template>
	<div class="container">
		<section class="dashboard">
			<div class="panel">
				<div class="title">판매량</div>
				<div class="typography-box">
					<div class="typography">50건<span style="font-size: 2rem; color: green">↑</span></div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.container {
	background: white;
	padding-left: 260px;
	width: 100%;
	height: 100vh;
	margin: auto;
}

.panel .title {
	color: grey;
	font-size: 1rem;
	line-height: 1;
}

.panel .typography-box {
	position: relative;
	display: flex;
	flex: 1 1 auto;
	margin-bottom: 1rem;
	justify-content: center;
	align-items: center;
}

.panel .typography {
	font-size: 3rem;
	font-weight: bold;
}

.panel {
	display: flex;
	flex-direction: column;
	max-width: 300px;
	min-height: 300px;
	background: white;
	border-radius: 16px;
  box-shadow: 0px 3px 10px rgba(217,217,217,0.8);
	padding: 24px;
}

.dashboard {
	padding: 40px 0;
	width: calc(100% - 96px);
	height: 100%;
	margin: 0 auto;
}
</style>

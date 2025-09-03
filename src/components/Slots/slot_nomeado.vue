
<template>
	<div>
		<h2>Componente Pai</h2>
		<FilhoSlotNomeado>
			<template #header>
				<h3 style="color: #1976d2;">Título passado pelo slot nomeado!</h3>
			</template>
			<template #default>
				<p>Conteúdo principal passado pelo slot padrão.</p>
			</template>
			<template #footer>
				<small>Rodapé passado pelo slot nomeado!</small>
			</template>
		</FilhoSlotNomeado>
	</div>
</template>

<script>
export default {
	name: 'PaiComFilhoSlotNomeado',
	components: {
		FilhoSlotNomeado: {
			template: `
				<div class="slot-nomeado-container">
					<header>
						<slot name=\"header\"></slot>
					</header>
					<main>
						<slot></slot>
					</main>
					<footer>
						<slot name=\"footer\"></slot>
					</footer>
				</div>
			`
		}
	}
}
</script>

<style scoped>
.slot-nomeado-container {
	border: 1px solid #ccc;
	padding: 16px;
	border-radius: 8px;
	background: #f1f8e9;
	margin-top: 16px;
}
header {
	margin-bottom: 8px;
}
footer {
	margin-top: 8px;
	color: #888;
}
</style>

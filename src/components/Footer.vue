<template>
	<footer class="bg-light py-3 mt-4 border-top">
		<div class="container d-flex flex-column align-items-center">
			<nav aria-label="Footer navigation">
				<ul class="list-unstyled d-flex justify-content-center gap-5 mb-0">
					<li>
						<a href="/mentions-legales" class="text-decoration-none text-muted">Mentions légales</a>
					</li>
					<li>
						<a href="/a-propos" class="text-decoration-none text-muted">À propos</a>

					</li>
				</ul>

			</nav>
		</div>
	</footer>
</template>


<script setup>
import { ref } from 'vue';

const year = new Date().getFullYear();
</script>

<style scoped>
footer a {
  color: hsl(232, 29%, 44%);
}

footer a:hover {
	text-decoration: underline;
}
</style>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	build: {
		outDir: "../dist", // don't put this inside src
		rollupOptions: {
			output: {
				preserveModules: true,
			},
			preserveEntrySignatures: "allow-extension", // required by preserveModules
		},
	},
	plugins: [
		react(),
	],
	root: "src",
})

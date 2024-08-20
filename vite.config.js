import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	build: {
		outDir: "../dist", // take it out of src and back up to the repository root
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

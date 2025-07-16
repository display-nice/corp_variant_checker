import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "./",
	build: {
		// избыточная настройка, можно отключить, но с ней
		// ⚠️ готовые файлы будут с простыми названиями index.js, index.css
		rollupOptions: {
			output: {
				entryFileNames: "assets/index.js", // не нужен хэш
				chunkFileNames: "assets/[name].js", // чтобы не было динамических чанков с CORS
				assetFileNames: "assets/[name][extname]", // тоже без хэшей
			},
		},		
	},

	server: {
		port: 3000,
	},
});

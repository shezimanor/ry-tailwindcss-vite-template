# Tailwind in vite (ts)

2024/07/20

- `vite` 內建支援 `postcss` 所以不需要另外安裝

- `vite.config.ts` 內寫 `postcss` 設定

- `index.scss` 掛在 `main.ts`

- `@types/node` 是另外安裝的，用來解決 `path` 的引用問題

- `index.scss` 因為引用 Tailwind 所以不能用 `vite.config.ts` `css.preprocessorOptions.scss.additionalData` 來掛載

教學用前端自動化工具 Gulp 實踐
==================

本專案旨在演示如何使用 Gulp 進行前端自動化。這包括編譯 Sass、壓縮圖片、壓縮 JavaScript 並同步瀏覽器。

開始
--

要開始使用此專案，請先確保已安裝 [Node.js](https://nodejs.org/) 和 [npm](https://www.npmjs.com/)（通常在安裝 Node.js 時會自動安裝）。

### 安裝依賴項

在專案根目錄下打開終端機，運行以下命令安裝所需的依賴項：

```
npm install
```

這將會安裝以下依賴項：

*   `gulp`
    
*   `gulp-sass`
    
*   `sass`
    
*   `gulp-imagemin`
    
*   `browser-sync`
    
*   `gulp-terser`
    
*   `gulp-babel`
    
*   `@babel/core`
    
*   `@babel/preset-env`
    

### 使用 Gulp 任務

在終端機中運行以下命令，將會執行所有 Gulp 任務，並啟動瀏覽器同步預覽。

```
gulp
```

任務詳解
----

以下是 Gulp 任務的詳細說明：

### `sass`

編譯 `assets/sass/*.scss` 下的所有 Sass 文件，輸出為壓縮後的 CSS 文件，並將其存儲到 `assets/css` 目錄下。

### `imagemin`

壓縮 `assets/images/*` 下的所有圖像文件，並將其存儲到 `dist/images` 目錄下。

### `uglify-js`

壓縮 `assets/js/*.js` 下的所有 JavaScript 文件，並將其存儲到 `dist/js` 目錄下。

### `browser-sync`

啟動瀏覽器同步，實時預覽專案。當檔案變更時，瀏覽器將自動重新載入。

### `watch`

監聽以下檔案的變更：

*   `assets/sass/*.scss`：變更時，執行 `sass` 任務。
    
*   `assets/images/*`：變更時，執行 `imagemin` 任務。
    
*   `assets/js/*.js`：變更時，執行 `uglify-js` 任務。
    
*   `*.html`：變更時，重新載入瀏覽器。
    

### `default`

預設任務，同時執行 `sass`、`imagemin`、`uglify-js`、`browser-sync` 和 `watch` 任務。

文件結構

*   `assets/`

*   `   sass/`：存放 Sass 檔案
    
*   `   css/`：存放編譯後的 CSS 檔案
    
*   `   images/`：存放原始圖片檔案
    
*   `   js/`：存放原始 JavaScript 檔案
    
*   `dist/`

*   `   images/`：存放壓縮後的圖片檔案
    
*   `   js/`：存放壓縮後的 JavaScript 檔案

*   `index.html`：專案的主頁面
    
*   `gulpfile.js`：包含 Gulp 任務的設定檔案
    
*   `package.json`：包含專案的元數據和依賴項列表
    
*   `node_modules/`：存放專案依賴項的目錄（通常不會提交到版本控制系統）
    

建議的 Node.js 版本

本專案建議使用 Node.js v14.0.0 以上的版本。要查看當前 Node.js 版本，您可以在終端機中運行 `node -v` 命令。若需更新 Node.js，請訪問 [Node.js 官方網站](https://nodejs.org/) 下載並安裝合適的版本。    

總結
--

本專案為前端自動化工具 Gulp 的教學示例，展示了如何使用 Gulp 進行 Sass 編譯、圖片壓縮、JavaScript 壓縮和瀏覽器同步。此外，專案還提供了監聽任務，以便在檔案發生變更時自動執行相應的任務。希望本專案對您的前端開發工作有所幫助。如有任何問題或需求，請隨時提出。
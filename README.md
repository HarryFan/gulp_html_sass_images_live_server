教學用前端自動化工具 Gulp 實踐
==================

本專案使用 Gulp 自動化前端開發流程，包括編譯 Sass、壓縮圖片、壓縮 JavaScript 和 HTML。

環境要求
----

*   Node.js 版本：10.x 以上
    


安裝依賴
----

在專案根目錄下執行以下命令：

```
npm install
```

運行 Gulp
-------

在專案根目錄下執行以下命令：

```
gulp
```

執行成功後，將自動開啟瀏覽器預覽 `dist/index.html`，並監聽相關文件的變化。

Gulp 任務
-------

*   `sass`：將 `assets/sass` 目錄下的 Sass 文件編譯成 CSS，並將輸出的 CSS 文件存放到 `dist/assets/css` 目錄下。
    
*   `imagemin`：將 `assets/images` 目錄下的圖片進行壓縮，並將壓縮後的圖片存放到 `dist/assets/images` 目錄下。
    
*   `uglify-js`：將 `assets/js` 目錄下的 JavaScript 文件進行壓縮，並將壓縮後的 JavaScript 文件存放到 `dist/assets/js` 目錄下。
    
*   `html`：將根目錄下的 HTML 文件複製到 `dist` 目錄下。
    
*   `browser-sync`：開啟瀏覽器同步預覽，並監聽 `dist` 目錄下的文件變化。
    
*   `watch`：監聽相關文件變化，並執行對應的 Gulp 任務。
    
*   `default`：預設任務，執行 `sass`、`imagemin`、`uglify-js`、`html`、`browser-sync` 和 `watch` 任務。
    

注意事項
----

執行 `gulp` 命令後，開發時請修改根目錄下的 `index.html`、`assets/sass`、`assets/images` 和 `assets/js` 目錄下的文件，Gulp 將自動監聽


這些文件的變化，並執行對應的任務，生成對應的輸出文件到 `dist` 目錄下。開發完成後，`dist` 目錄下的文件即為最終部署到線上環境的文件。



### 開發流程

1.  修改根目錄下的 `index.html`，添加或修改 HTML 內容。
    
2.  在 `assets/sass` 目錄下編寫 Sass 樣式，Gulp 會自動編譯成 CSS 並將其輸出到 `dist/assets/css` 目錄下。
    
3.  在 `assets/js` 目錄下編寫 JavaScript 代碼，Gulp 會自動壓縮並將其輸出到 `dist/assets/js` 目錄下。
    
4.  將需要壓縮的圖片放入 `assets/images` 目錄下，Gulp 會自動壓縮並將其輸出到 `dist/assets/images` 目錄下。
    
5.  使用瀏覽器同步預覽功能，實時查看開發效果。

### 部署

開發完成後，將 `dist` 目錄下的文件部署到線上環境，即可完成整個專案的開發和部署流程。


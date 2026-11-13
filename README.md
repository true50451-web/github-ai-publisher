# GitHub AI Publisher

簡易網站檔案整理工具，適合將 Gemini、Canva 或其他工具產生的 HTML 網站整理後，手動發布到 GitHub Pages。

## 功能
- 上傳 ZIP、整個資料夾或多個網站檔案
- 在瀏覽器中解壓縮 ZIP
- 檢查是否有首頁 index.html
- 初步檢查 HTML 引用的本機 CSS、JavaScript、圖片等資源路徑
- 將網站檔案重新打包成可上傳的 ZIP
- 提供 GitHub Pages 手動發布步驟

## 使用方式
1. 開啟 GitHub Pages 網站。
2. 上傳 ZIP 或選擇整個網站資料夾。
3. 按「檢查網站結構」。
4. 按「下載 GitHub ZIP」。
5. 解壓縮 ZIP，將裡面的網站檔案上傳到 GitHub Repository 根目錄。
6. 到 Settings → Pages，選擇 Deploy from a branch、main、/(root)，儲存後等待發布。

## 隱私與限制
- 檔案處理在使用者的瀏覽器內完成，不會上傳到本工具的伺服器。
- 本工具不要求 GitHub 密碼或 Personal Access Token。
- 檢查屬於初步靜態檢查，不會執行網站程式，也不保證所有功能正常。
- ZIP 建議不超過 50 MB，最多 1000 個檔案。
- 若原始網站的首頁位於子資料夾，請先確認 ZIP 內的 index.html 是否位於最外層；GitHub Pages 發布時需要正確的根目錄結構。

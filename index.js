const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const value = req.query.value;
  if (!value) {
    return res.send("Error: No value received");
  }
  console.log("Received value:", value);
  res.send("OK - Received: " + value);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);  // ← Burayı düzelttim (backtick yerine parantez)
});
```

## Değişiklik:
Son satırdaki **console.log\`...\`** → **console.log(\`...\`)** olmalı

## Güncelleme Adımları:

### 1. GitHub'ta dosyayı düzeltin
- GitHub'ta `index.js` dosyasını açın
- Kalem ikonuna tıklayın (Edit this file)
- Son satırı düzeltin
- "Commit changes" yapın

### 2. Railway otomatik deploy edecek
- 1-2 dakika bekleyin
- Railway yeni kodu otomatik çeker ve deploy eder

### 3. Test edin
STM32'yi çalıştırın veya tarayıcıdan:
```
https://stm32-api-production.up.railway.app/?value=84.5
```

### 4. Railway Deploy Logs'a bakın
Artık şunu göreceksiniz:
```
Server running on port 8080
Received value: 84.5



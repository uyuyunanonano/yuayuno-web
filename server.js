const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 静的ファイルの場所を指定
app.use(express.static('public'));

// EJSテンプレートエンジンを使う
app.set('view engine', 'ejs');

// ルートパスの設定
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

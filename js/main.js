$(document).ready(function(){
    // エリア選択セレクトïボックスの変更イベントリスナー
    $('#areaSelect').on('change', function(){
         // 選択されたエリアを取得
        var selectedArea = $(this).val();
        // リダイレクト先のURL
        var pageUrl; 
    // 選択されたエリアに応じてリダイレクト先のURLを設定
    switch(selectedArea) {
    case '梅田':
    pageUrl = 'umeda.html';
    break;
    case 'なんば':
    pageUrl = 'namba.html';
    break;
    case '天王寺':
    pageUrl = 'tennouji.html';
    break;
    case '京橋':
    pageUrl = 'kyoubashi.html';
    break;
    default:
// エラー処理：未定義のエリアが選択された場合はトーストメッセージなどで通知する
    alert('選択したエリアが見つかりません。');
    // 処理を中断して以降のコードが実行されないようにする
    return; 
    }

// リダイレクト
    window.location.href = pageUrl;
    });
});

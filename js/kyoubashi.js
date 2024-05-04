function recommendShop(preference, drinkType, foodType, moodType) {
    // おすすめの店を選択するロジックが正しく動作しているか確認するために、コンソールログを追加
    console.log("Preference:", preference);
    console.log("Drink Type:", drinkType);
    console.log("Food Type:", foodType);
    // デフォルト値を設定
    var recommendation = '';

    //   以下分岐
    // 安くてうまい店がいいの場合
    if (preference === '安くてうまい店がいい') {
        if (drinkType === '立ち飲み') {
            if (foodType === '海鮮が食べたい') {
                recommendation = '庶民';
            } else if (foodType === 'いろいろ食べたい') {
                recommendation = 'リンカーン食堂';
            }
        } else if (drinkType === '座り飲み') {
            recommendation = 'おくまん';
        }
        //   綺麗な店がいいの場合
    } else if (preference === '綺麗な店がいい') {
        if (drinkType === '立ち飲み') {
            if (moodType === 'とにかく安く飲みたい') {
                recommendation = 'リンカーン食堂';
            } else if (moodType === '女性でも入りやすい') {
                recommendation = 'いなせ屋';
            }
        } else if (drinkType === '座り飲み') {
            recommendation = 'おくまん';
        }
        //   お腹いっぱい食べたいの場合
    } else if (preference === 'お腹いっぱい食べたい') {
        if (drinkType === '立ち飲み') {
            if (foodType === '焼き鳥が食べたい') {
                recommendation = '八とり';
            } else if (foodType === 'いろいろ食べたい') {
                recommendation = 'リンカーン食堂';
            }
        } else if (drinkType === '座り飲み') {
            recommendation = 'おくまん';
        }
    }
    // おすすめの店を返す
    return recommendation;
}
// おすすめの店に基づいて写真を表示する関数
function displayShopPhoto(recommendedShop) {
    console.log("displayShopPhoto関数が呼び出されました。");
    var shopPhotoContainer = $('#shopPhotoContainer');
    shopPhotoContainer.removeClass('hidden'); // hiddenクラスを削除

    // 店名に基づいて画像ファイル名を選択
    var photoFileNames = [];
    if (recommendedShop === '庶民') {
        photoFileNames = ['syomin.jpg', 'syomin_2.jpg'];
    } else if (recommendedShop === 'リンカーン食堂') {
        photoFileNames = ['lincoln.jpg', 'lincoln_2.jpg'];
    } else if (recommendedShop === 'おくまん') {
        photoFileNames = ['okuman.jpg', 'okuman_2.jpg'];
    } else if (recommendedShop === 'いなせ屋') {
        photoFileNames = ['inaseya.jpg', 'inaseya_2.jpg'];
    } else if (recommendedShop === '八とり') {
        photoFileNames = ['hattori.jpg', 'hattori_2.jpg'];
    }
    // コンソールログでimgパスとファイル名を確認
    console.log("Image Path:", 'img/' + photoFileName);

    // 画像要素を作成して設定
    for (var i = 0; i < photoFileNames.length; i++) {
        var imgElement = $('<img>');
        var photoFileName = photoFileNames[i];

        // 画像のパスを設定
        imgElement.attr('src', 'img/' + photoFileName);
        // alt属性を空に設定
        imgElement.attr('alt', '');
        // 画像を表示領域に追加
        shopPhotoContainer.append(imgElement);
    }
}

// ボタンクリック時の処理
$('#recommendBtn').on('click', function () {
    // 選択した希望を取得
    var preference = $('#preferenceSelect').val();
    // 選択した飲み方を取得
    var drinkType = $('#drinkTypeSelect').val();
    // 選択した食べたいものを取得
    var foodType = $('#foodTypeSelect').val();
    // 選択した雰囲気を取得
    var moodType = $('#moodTypeSelect').val();
    // 以下が最終的な表示
    var recommendation = recommendShop(preference, drinkType, foodType, moodType);
    $('#recommendation').text('おすすめのお店は「' + recommendation + '」です。');
    console.log(recommendation)
    // おすすめの店が選択された場合のみ写真を表示する
    if (recommendation) {
        displayShopPhoto(recommendation);
    }
});

// ページ読み込み時に写真の領域を非表示にする
$(document).ready(function () {
    $('#shopPhotoContainer').addClass('hidden');
});

// 飲み方が座り飲みを選んだ時の処理
// additionalOptionsを表示
$('#drinkTypeSelect').on('change', function () {
    if ($(this).val() === '立ち飲み') {
        $('#additionalOptions').show();
    } else {
        $('#additionalOptions').hide();
    }
});

// 安くてうまい店がいい→立ち飲みを選んだ時の処理
// 焼き鳥の選択肢を非表示
$('#drinkTypeSelect').on('change', function () {
    // 選択した希望を取得
    var preference = $('#preferenceSelect').val();
    // 選択した飲み方を取得
    var drinkType = $(this).val();

    if (preference === '安くてうまい店がいい' && drinkType === '立ち飲み') {
        $('#foodTypeSelect option[value="焼き鳥が食べたい"]').hide();
    } else {
        $('#foodTypeSelect option[value="焼き鳥が食べたい"]').show();
    }
});

// 飲み方が立ち飲みを選んだ時の処理
$('#drinkTypeSelect').on('change', function () {
    if ($(this).val() === '立ち飲み') {
        // 立ち飲みを選択したらadditionalOptionsを表示
        $('#additionalOptions').show();
    } else {
        // 座り飲みを選択したらadditionalOptionsを非表示
        $('#additionalOptions').hide();
    }

    // 希望が「綺麗な店がいい」かつ飲み方が「立ち飲み」の場合、 additionalOptionsを非表示にし、additionalOptions_2を表示
    // 選択した希望を取得
    var preference = $('#preferenceSelect').val();
    if (preference === '綺麗な店がいい' && $(this).val() === '立ち飲み') {
        $('#additionalOptions').hide();
        $('#additionalOptions_2').show();
    } else {
        $('#additionalOptions_2').hide();
    }
});

// 希望が「お腹いっぱい食べたい」かつ飲み方が「立ち飲み」の場合、海鮮の選択肢を非表示
$('#drinkTypeSelect').on('change', function () {
    // 選択した希望を取得
    var preference = $('#preferenceSelect').val();
    // 選択した飲み方を取得
    var drinkType = $(this).val();

    if (preference === 'お腹いっぱい食べたい' && drinkType === '立ち飲み') {
        $('#foodTypeSelect option[value="海鮮が食べたい"]').hide();
    } else {
        $('#foodTypeSelect option[value="海鮮が食べたい"]').show();
    }
});

// ページが読み込まれたときに実行する処理
$(document).ready(function () {
    // ホームに戻るボタンがクリックされた時の処理
    $('#homeBtn').click(function () {
        window.location.href = 'index.html'; // ホームページへリダイレクト
    });

    // リロードボタンがクリックされた時の処理
    $('#reloadBtn').click(function () {
        location.reload(); // ページをリロード
    });
});
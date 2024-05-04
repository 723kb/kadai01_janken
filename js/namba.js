function recommendShop(area, preference, drinkType, foodType) {
  // おすすめの店を選択するロジックが正しく動作しているか確認するために、コンソールログを追加
  console.log("Area:", area);
  console.log("Preference:", preference);
  console.log("Drink Type:", drinkType);
  console.log("Food Type:", foodType);
  // デフォルト値を設定
  var recommendation = '';

  //   以下分岐
  // 安くてうまい店がいいの場合
  if (preference === '安くてうまい店がいい') {
    if (drinkType === '立ち飲み') {
      if (foodType === '焼き鳥が食べたい') {
        recommendation = 'ダテダチ';
      } else if (foodType === 'いろいろ食べたい') {
        recommendation = 'テッケン';
      } else if (foodType === '海鮮が食べたい') {
        recommendation = 'ひでぞう';
      }
    } else if (drinkType === '座り飲み') {
      recommendation = 'わらまさ';
    }
    //   綺麗な店がいいの場合
  } else if (preference === '綺麗な店がいい') {
    if (drinkType === '立ち飲み') {
      if (foodType === '焼き鳥が食べたい') {
        recommendation = 'ダテダチ';
      } else if (foodType === 'いろいろ食べたい') {
        recommendation = 'テッケン';
      } else if (foodType === '海鮮が食べたい') {
        recommendation = '立ち寿司ひでぞう';
      }
    } else if (drinkType === '座り飲み') {
      recommendation = 'わらまさ';
    }
    //   お腹いっぱい食べたいの場合
  } else if (preference === 'お腹いっぱい食べたい') {
    if (foodType === '焼き鳥が食べたい') {
      recommendation = 'ダテダチ';
    } else if (foodType === '海鮮が食べたい') {
      recommendation = 'ひでぞう';
    } else if (foodType === 'いろいろ食べたい') {
      recommendation = 'テッケン';
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
  if (recommendedShop === 'ダテダチ') {
    photoFileNames = ['datedachi.jpg', 'datedachi_2.jpg'];
  } else if (recommendedShop === 'テッケン') {
    photoFileNames = ['tekken.jpg', 'tekken_2.jpg'];
  } else if (recommendedShop === 'ひでぞう') {
    photoFileNames = ['hidezou.jpg', 'hidezou_2.jpg'];
  } else if (recommendedShop === 'わらまさ') {
    photoFileNames = ['waramasa.jpg', 'waramasa_2.jpg'];
  } else if (recommendedShop === '立ち寿司ひでぞう') {
    photoFileNames = ['tatizushihidezou.jpg', 'tatizushihidezou_2.jpg'];
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
  // 選択したエリアを取得
  var area = $('#areaSelect').val();
  // 選択した希望を取得
  var preference = $('#preferenceSelect').val();
  // 選択した飲み方を取得
  var drinkType = $('#drinkTypeSelect').val();
  // 選択した食べたいものを取得
  var foodType = $('#foodTypeSelect').val();
  // 以下が最終的な表示
  var recommendation = recommendShop(area, preference, drinkType, foodType);
  $('#recommendation').text('おすすめのお店は「' + recommendation + '」です。');

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

// お腹いっぱい食べたいを選んだ時の処理
$('#preferenceSelect').on('change', function () {
  if ($(this).val() === 'お腹いっぱい食べたい') {
    // additionalOptions_1を非表示にする
    $('#additionalOptions').show();
    $('#additionalOptions_1').hide();
  } else {
    // それ以外の場合はadditionalOptions_1を表示する
    $('#additionalOptions_1').show();
    $('#additionalOptions').hide();
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
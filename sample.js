// ==============================
// 事前質問の回答
// ==============================

let age = "";
let gender = "";
let genre = "";
let frequency = "";


// ==============================
// 問題データ
// ==============================

const questions = [

    // 問題1 均等に
    [
        "その世界に、空はなかった。","孤独な人に味方できる唯一の職業 弁護士","銀河鉄道の夜","どこよりも遠い場所にいる君へ",
        "人生を やってることには なってるが あまりそういう 感じではない","整然と並ぶ机の 隙間には 無数の十字架 (僕には見える)","竜巻いて鮮脳","永遠の不在証明",
        "表に出るとか気が引ける だけど俺は楽器が弾ける！","割れたハートは翼にも見える…でしょ？","ものみな素描で終わる","あしたが、まだ永遠だったころ",
        "神の視座にて 命を論ず","幼魚と逆罰","葦を啣む雁[あしをふくむかり]","画竜点睛",
        "二頭の象が争うとき、傷つくのは草たち","行き止まりの世界に生まれて","すきだよ　しぬほど","何も残せないまま 死にたくないから"
    ],

    // 問題2 均等に
    [
        "やがて、いのちに変わるもの。","書き換えることができるだろうか――彼女の、その運命を――","現代に生きる魔法使い ただし見習い",
        "かっとばし党の長い夏","チエルアルコは流星の","セピア色の孤独",
        "伴いし夜想曲[ノクターン]","艶めく剝奪","世界を喰らう底なしの渇愛",
        "居合白禊流[いあいびゃっけいりゅう]","捨象次元","月を捉うものへ告ぐ",
        "物語のような星の雫 その中に細い線路を築く","僕の言葉が死んだ時 アスファルトは気がつきやしないだろう",
        "君が好きな歌 私も好きになれるのかな！","潜潜話[ひそひそばなし]","花弁、それにまつわる音声",
        "水光接天","人はなぜラブレターを書くのか","夜明けまでバス停で"
    ],

    // 問題3 曲名・歌詞など
    [
        "メッセンジャーフロム全世界","文明開化輪舞-シティ・ハレルヤ-","静謐甘美秋暮抒情","スイサイ/アンブレラ/ロクガツ/ドライフラワ",
        "ポケットサイズ・ドキュメンタリ","星巡り、君に金星","しあわせシンドローム","幻燈",
        "最上級パンチライン","シェードの埃は延長","雨晴るる","至心酩酊存在証明",
        "ほだされた頭ふたつぶら下げて君に逢いにゆく","うだるような日差しには魔法というには粗末な過ちを生む謎がある",
        "100年サイズの砂時計 止まらなくても 続けていく","君が一人ぼっちだって手をつなげば二人ぼっちだぞ",
        "知恵の輪の改札を抜けて 人ごみの中で ふと君を探す","好きなところ、優しいとこ。嫌いなとこも、優しいとこ。",
        "裏と表じゃないの 傷口と絆創膏","孤独な気分は おそろいな気がしてるよ"
    ],

    // 問題4 AIと混合
    [
        "正欲","アヒルと鴨のコインロッカー","あまりに写実的な","朱夏期、音楽泥棒",
        "並べた弱音の数はきっと 憧れの裏返し","お別れした事は 出会った事と繋がっている",
        "──才能は開花させるもの　──センスは磨くもの","重力を振り切って、征かねば。声を振り絞って、歌わねば。",
        "誤植あり。中野駅前徒歩十二年。それでいいかもしれないけれど","たくさんのおんなのひとがいるなかでわたしをみつけてくれてありがとう",

        //AIによる生成
        "月が眠るまで","透明な午後","君のいない駅で、春を待つ。","さよならだけが、まだ温かい。",
        "海辺で嘘をつく","午前二時の忘れもの","忘れることは、嫌いになること？","誰にも言わないから、泣いて。",
        "春風に ほどけた髪を 追いながら 君の名前を まだ呼べずいる","雪の朝 足跡だけが 先に行く 僕は昨日に まだ置いていかれ"
    ],

    // 問題5 AIと混合2
    [
        "馴れ合いサーブ","林檎売りの泡沫少女","味のしない風と 匂いのない飛沫 儚いな それでも","世界は神様の群像劇の様",
        "汝、星のごとく","地球儀のスライス","人は線を引くことでしか 表現できないことがある──","最初の客には、最期の客である権利と義務があるんだ って",
        "その町にいればどこからでも見えるでかい時計の狂ってる町","君の死後、われの死後にも青々とねこじゃらし見ゆ まだ揺れている",
        
        //AIによる生成
        "雨粒の向こう側","さよならの温度","夜はいつも、秘密を知っている。","君の影を、風がさらっていく。",
        "君のいない天気予報","眠れない星のための手紙","君が笑うと、季節が変わる。","じゃあね、の続きは夢で。",
        "月明かり ひとりの部屋を 満たしても 君の不在は 影より深い","秋雨に 傘を忘れて 立ち尽くす 君との日々も こんなふうなら"
    ]
];


// ==============================
// 現在の問題番号
// ==============================

let currentQuestion = 0;


// ==============================
// 各問題の回答を保存
// ==============================

const answers = [];


// ==============================
// ページを開いた時刻
// ==============================

const startTime = Date.now();


// 問題ごとの開始時刻
let questionStartTime = Date.now();


// ==============================
// 回答者ID
// ==============================

let userId = localStorage.getItem("userId");

if (!userId) {

    userId = crypto.randomUUID();

    localStorage.setItem("userId", userId);

}

console.log("回答者ID:", userId);


// ==============================
// HTML要素
// ==============================

const list = document.getElementById("list");

const button = document.getElementById("button");

const status = document.getElementById("status");

const questionTitle = document.getElementById("questionTitle");

const nextQuestionButton =
    document.getElementById("nextQuestionButton");


// ==============================
// 配列をシャッフル
// ==============================

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
        [array[j], array[i]];

    }

    return array;

}


// ==============================
// 問題を表示する関数
// ==============================

function showQuestion(questionNumber) {

    // 現在の問題を取得
    const sentences =
        [...questions[questionNumber]];


    // ランダムに並べる
    shuffle(sentences);


    // 既存の短文を削除
    list.innerHTML = "";


    // 短文を表示
    sentences.forEach(sentence => {

        const li = document.createElement("li");

        li.textContent = sentence;

        list.appendChild(li);

    });


    // 問題番号を表示
    questionTitle.textContent =
        "問題" + (questionNumber + 1);


    // 問題開始時刻を記録
    questionStartTime = Date.now();

}


// ==============================
// SortableJS
// ==============================

new Sortable(list, {

    animation: 150

});


// ==============================
// 最初の問題を表示
// ==============================

showQuestion(0);

// ==============================
// 「次の問題へ / 送信する」ボタン
// ==============================

nextQuestionButton.addEventListener("click", () => {

    // 現在の問題番号
    const questionNumber = currentQuestion + 1;

    // 現在の並び順を取得
    const order =
        [...document.querySelectorAll("#list li")]
        .map(item => item.textContent);

    // 現在の問題の回答時間
    const questionElapsedTime =
        Date.now() - questionStartTime;


    // ==============================
    // 確認画面
    // ==============================

    let confirmationText =
        "【問題" + questionNumber + "の確認】\n\n" +
        "以下の順番で回答を確定します。\n\n";

    confirmationText += order.join("\n");

    confirmationText +=
        "\n\nこの内容でよろしいですか？\n" +
        "OKを押すと回答を確定します。\n" +
        "キャンセルを押すと並び替えに戻ります。";


    const confirmed = confirm(confirmationText);


    // キャンセルされた場合
    if (!confirmed) {
        return;
    }


    // ==============================
    // 回答を保存
    // ==============================

    answers.push({
        questionId: questionNumber,
        order: order,
        elapsedTime: questionElapsedTime
    });


    console.log(
        "保存した問題:",
        questionNumber
    );

    console.log(
        "保存した並び順:",
        order
    );


    // ==============================
    // 問題5の場合
    // ==============================

    if (questionNumber === questions.length) {

        console.log("最後の問題です。送信します。");
        console.log("すべての回答:", answers);

        nextQuestionButton.disabled = true;
        nextQuestionButton.textContent = "送信中…";

        status.textContent = "送信中…";


        // ==========================
        // GASへ送信
        // ==========================

        const elapsedTime =
            Date.now() - startTime;


        fetch(
            "https://script.google.com/macros/s/AKfycbwOQUdTm3o2CgmYjLP9xQEzqxQcPZT3avwh6fnfbInnydIP-iADGV30-OcKa_7tH3FF/exec",
            {
                method: "POST",

                body: JSON.stringify({

                    userId: userId,

                    questionId: "multiple",

                    age: age,

                    gender: gender,

                    genre: genre,

                    frequency: frequency,

                    answers: answers,

                    elapsedTime: elapsedTime

                })
            }
        )

        .then(response => response.json())

            .then(data => {
                // 短文アンケートの送信完了
                nextQuestionButton.style.display = "none";

                status.textContent =
                    "短文アンケートの回答を送信しました。";
                // 短文アンケート画面を非表示
                document.getElementById("survey-screen").style.display = "none";

                // 事後アンケート画面を表示
                document.getElementById("post-survey-screen").style.display = "block";

                // 画面を一番上へ
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            })
            .catch(error => {

                console.error(error);

                nextQuestionButton.disabled = false;

                nextQuestionButton.textContent =
                    "送信する";

                status.textContent =
                    "送信に失敗しました。もう一度お試しください。";
            });


        // 問題6へ進まないために終了
        return;
    }
    
    // ==============================
    // 問題5ではない場合
    // → 次の問題へ
    // ==============================

    currentQuestion++;

    showQuestion(currentQuestion);

    // 画面を一番上まで戻す
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // ==============================
    // 問題5になったら
    // ボタンを「送信する」に変更
    // ==============================

    if (currentQuestion === questions.length - 1) {

        nextQuestionButton.textContent =
            "送信する";

    } else {

        nextQuestionButton.textContent =
            "次の問題へ";

    }

});

// ==============================
// 「次へ」ボタン
// ==============================

document
.getElementById("nextButton")
.addEventListener("click", () => {


    // 事前質問の回答を取得

    age =
        document.getElementById("age").value;

    gender =
        document.getElementById("gender").value;

    genre =
        document.getElementById("genre").value;

    frequency =
        document.getElementById("frequency").value;


    // 未回答チェック

    if (age === "") {

        alert("年齢を選択してください。");

        return;

    }


    if (gender === "") {

        alert("性別を選択してください。");

        return;

    }


    if (genre === "") {

        alert(
            "普段読む文章のジャンルを選択してください。"
        );

        return;

    }


    if (frequency === "") {

        alert(
            "文章を読む頻度を選択してください。"
        );

        return;

    }


    // 回答内容を確認

    console.log("年齢:", age);

    console.log("性別:", gender);

    console.log("文章ジャンル:", genre);

    console.log("読む頻度:", frequency);


    // 事前質問画面を非表示

    document
    .getElementById("profile-screen")
    .style.display = "none";


    // 短文画面を表示

    document
    .getElementById("survey-screen")
    .style.display = "block";
    
    // 画面を一番上まで戻す
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

});

// ==============================
// 事後アンケート送信
// ==============================

document
.getElementById("postSurveyButton")
.addEventListener("click", () => {

    // 回答を取得
    const conceptAwareness =
        document.getElementById("conceptAwareness").value;

    const sentenceGenre =
        document.getElementById("sentenceGenre").value;

    const aiAwareness =
        document.getElementById("aiAwareness").value;

    const postComment =
        document.getElementById("postComment").value;


    // 未回答チェック
    if (conceptAwareness === "") {

        alert("問題3についての質問に回答してください。");

        return;

    }

    if (sentenceGenre === "") {

        alert("短文のジャンルについて回答してください。");

        return;

    }

    if (aiAwareness === "") {

        alert("AI生成文についての質問に回答してください。");

        return;

    }


    // 二重送信防止
    const postSurveyButton =
        document.getElementById("postSurveyButton");

    postSurveyButton.disabled = true;

    document.getElementById("postSurveyStatus").textContent =
        "送信中…";


    // GASへ送信
    fetch(
        "https://script.google.com/macros/s/AKfycbwOQUdTm3o2CgmYjLP9xQEzqxQcPZT3avwh6fnfbInnydIP-iADGV30-OcKa_7tH3FF/exec",
        {

            method: "POST",

            body: JSON.stringify({

                type: "postSurvey",

                userId: userId,

                conceptAwareness: conceptAwareness,

                sentenceGenre: sentenceGenre,

                aiAwareness: aiAwareness,

                postComment: postComment

            })

        }
    )

    .then(response => response.json())

    .then(data => {

        document.getElementById("postSurveyStatus").textContent =
            "ご回答ありがとうございました。";

        postSurveyButton.textContent =
            "送信済み";

        postSurveyButton.disabled = true;

    })

    .catch(error => {

        console.error(error);

        document.getElementById("postSurveyStatus").textContent =
            "送信に失敗しました。もう一度お試しください。";

        postSurveyButton.disabled = false;

    });

});

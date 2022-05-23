import "./styles.css";

/**
 * 追加ボタンを押下した時の処理
 */
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("textAdd").value;
  document.getElementById("textAdd").value = "";

/**
 * 押された削除ボタンの親の親タグ（li）を未完了リストから削除
 * @param {Element} target
 */
const deleteFromIncompleteList = (target) => {
  document.getElementById("listIncomplete").removeChild(target);
};

  // liタグの生成
  const li = document.createElement("li");
  li.className = "list-row";

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-content";

  // pタグの生成
  const p = document.createElement("p");
  p.className = "label";
  p.innerText = inputText;

  // button(完了)タグの生成
  const buttonComplete = document.createElement("button");
  buttonComplete.classList = "button-complete";
  buttonComplete.textContent = "完了";
  buttonComplete.addEventListener("click", () => {
    // 押された削除ボタンの親の親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(buttonDelete.parentNode.parentNode);

    // 完了リストに追加する要素
    const targetAdd = buttonComplete.parentNode.parentNode;

    // TODO内容テキストを取得
    const div = targetAdd.firstElementChild;
    const text = div.firstElementChild.innerText;

    // div以下を初期化
    div.textContent = null;

    // liを生成
    const li = document.createElement("li");
    li.classList = "list-row";

    // pタグの生成
    const p = document.createElement("p");
    p.classList = "label";
    p.innerText = text;

    // buttonタグの生成
    const buttonReturn = document.createElement("button");
    buttonReturn.classList = "button-return";
    buttonReturn.textContent = "戻す";
    buttonReturn.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了から削除
      const targetDelete = buttonReturn.parentNode.parentNode;
      document.getElementById("listComplete").removeChild(targetDelete);
    });

    // divの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(buttonReturn);
    li.appendChild(div);

    // listComplete配下に追加
    document.getElementById("listComplete").appendChild(li);
  });

  // button(削除)タグの生成
  const buttonDelete = document.createElement("button");
  buttonDelete.classList = "button-delete";
  buttonDelete.textContent = "削除";
  buttonDelete.addEventListener("click", () => {
    deleteFromIncompleteList(buttonDelete.parentNode.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(buttonComplete);
  div.appendChild(buttonDelete);
  // divタグをliの子要素に設定
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("listIncomplete").appendChild(li);
};

document
  .getElementById("buttonAdd")
  .addEventListener("click", () => onClickAdd());

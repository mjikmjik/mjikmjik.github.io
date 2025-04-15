document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      alert('ようこそ！StylishSiteへ 🚀');
    });
  }

  // Aboutページの「もっと見る」ボタン動作
  const moreBtn = document.querySelector('.about .btn');
  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      const message = `
      👋 はじめまして！

      - 名前：〇〇（お好きな名前を入れてください）
      - 職業：Webデザイナー / フロントエンドエンジニア
      - スキル：HTML / CSS / JavaScript / React / Figma
      - 趣味：カフェ巡り ☕、写真 📷、アニメ 🎬
      - モットー：「シンプル is ベスト」

      見てくれてありがとう！
      `;
      alert(message);
    });
  }
});

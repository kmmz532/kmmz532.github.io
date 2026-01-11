"use client";
import styles from "../page.module.css";
import Link from "next/link";
import { Carousel } from "react-bootstrap";

export default function Works() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1>Works</h1>
        <div className={styles.content}>
          <h2>ガラポン抽選器</h2>
          <Carousel className="w-100">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/upload/kng44pcfes-1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/upload/kng44pcfes-2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/upload/kng44pcfes-3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <p>
            大阪府立金剛高校のインターネット部の文化祭で開発したガラガラ抽選器です。高3の時に部長をしていたのでその頃です。<br />
            教室にQRコードを貼っていたのでそれを来場者に読み込ませてこのウェブアプリにアクセスし、ガラガラを回させます。<br />
            1等、2等、3等あるため、結果画面が表示されているスマートフォンを部員に見せて景品を渡すという企画でした。<br />
            一人一回のみにするため、IPアドレスで回したことを記録していました。
            <br /><br />
            GitHub: <Link href="https://github.com/kmmz532/kng-44-pc-fes" target="_blank" rel="noopener noreferrer" title="GitHub">https://github.com/kmmz532/kng-44-pc-fes</Link>
          </p>

          <h2>Rubir.io</h2>
          <Carousel className="w-100">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/upload/rubirio-1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/upload/rubirio-2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/upload/rubirio-3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <p>
            大学の講義で作成したゲーム「Rubir.io」です。<br />
            Agar.ioという粒、敵を吸収して大きくなっていくゲームが元ネタです。Rubyで開発したのでRubir.ioという名前にしました。<br />
            この1回生のフィールドプラクティスという講義で初めてRubyを使い、開発期間はその講義内で3,4回ほど、約2～3週間の短期間だったかと思います。普段、趣味ではウェブやアプリとかばっかりでなかなかゲームなんて作らないので作っていて楽しかったです！<br />
            <br />
            GitHub: <Link href="https://github.com/kmmz532/rubirio"target="_blank" rel="noopener noreferrer" title="GitHub">https://github.com/kmmz532/rubirio</Link>
          </p>

          <h2>SQLダンジョン</h2>
          <Carousel className="w-100">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/upload/sqldungeons-1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/upload/sqldungeons-2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/upload/sqldungeons-3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <p>
            SQLを学習するためのRPG風ゲームです。<br />
            ちょうどその頃は2回生で応用情報技術者試験を勉強していた時期であり、データベース言語をよくわかっていなかったので理解するためにSQLを学習するためのゲーム的なものをつくっちまおうという発想から生まれたものです。生JSで作ってAIも利用しつつなんとか作ったのですが、やはりフレームワークを使わずに大規模なものをつくるのは保守が大変だなと思いました。<br />
            ここ最近はReactとTypeScriptを使うことが増えているのでこういうのはReactが向いてるんだろうなと思いました。<br />
            なお、PWAに対応させているのでインストールすることもできます！<br />
            
            <br />
            SQLダンジョン: <Link href="https://kmmz532.github.io/sql-dungeons/" target="_blank" rel="noopener noreferrer" title="SQLダンジョン">https://kmmz532.github.io/sql-dungeons/</Link><br />
            GitHub: <Link href="https://github.com/kmmz532/sql-dungeons" target="_blank" rel="noopener noreferrer" title="GitHub">https://github.com/kmmz532/sql-dungeons</Link>
          </p>

          <h2>電研公式サイト</h2>
          <Carousel className="w-100">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/upload/osu-denken-web-1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/upload/osu-denken-web-2.png"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
          <p>
            大阪産業大学 電子計算研究部の公式サイトです。コンピュータ系のクラブなのだからウェブサイトぐらいは必要でしょうと1回生の頃に思ってました。そのため、2回生の頃に開発し、入部フォームもアクセスしやすくして部員がブログを編集できるシステムを開発しました。<br />
            フロントエンドはNext.js + Vite + TypeScript + Node.jsでの実装でバックエンド(OSU-Denken Web API)はCloudflare Workersを用いてTypeScriptで実装しています。<br />
            
            <br />
            電研公式サイト: <Link href="https://osu-denken.github.io/" target="_blank" rel="noopener noreferrer" title="電子計算研究部">https://osu-denken.github.io/</Link><br />            
            GitHub: <Link href="https://github.com/osu-denken/osu-denken.github.io" target="_blank" rel="noopener noreferrer" title="GitHub">https://github.com/osu-denken/osu-denken.github.io</Link>
          </p>

          <h2>Pyssembler</h2>
          <p>
            当時、1回生の頃、コンピュータの仕組みという講義でアセンブラ言語に少しだけ触れたんですよね。
            それがとにかく、面白くて普段使っている高級言語とは違って実際の処理の動きを直接書いているようで面白みを感じました。とはいえ機械語までは触れてませんが。<br />
            そのため、Python上で動くインタプリタの疑似アセンブラ言語を作りたいと思ったわけです。<br />
            <br />
            GitHub: <Link href="https://github.com/kmmz532/pyssembler" target="_blank" rel="noopener noreferrer" title="GitHub">https://github.com/kmmz532/pyssembler</Link>
          </p>

          <h2>PHPMLearning (AI駆動開発)</h2>
          <p>
            PHP上で機械学習っぽいことをしてみたかったのでニューラルネットワーク風のものを作ってみました。<br />
            LLMを使いながらニューラルネットワークをPHPで作ってみました。これってつまり、ニューラルネットワークが活用されたAIがニューラルネットワークを間接的に実装したってことですよね（笑）<br />
            これを開発してニューラルネットワークの仕組みがなんとなくわかったような気がして面白かったです。そしてAIも進化してきたのでより勉強しやすくなった時代に入ったと思いました。とはいっても、複雑なものとなるとまだまだおかしなところもあるので人の手の修正も必要ではありました。<br />
            <br />
            GitHub: <Link href="https://github.com/kmmz532/PHPMLearning" target="_blank" rel="noopener noreferrer" title="GitHub">https://github.com/kmmz532/PHPMLearning</Link>
          </p>

          <h2>このKmmz1127のウェブサイト</h2>
          <p>
            Next.js + Vite + TypeScript + Bootstrap + Bunを用いて実装しています。<br />
            GitHub Pages上でホスティングしてます。
          </p>

        </div>
      </main>
    </div>  
  );
}

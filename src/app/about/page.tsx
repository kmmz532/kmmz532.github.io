import parentStyles from "../page.module.css";
import styles from "./about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faDiagramProject,
  faClockRotateLeft,
  faRocket,
  faBullseye,
  faCode,
  faShieldHalved,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className={parentStyles.page}>
      <main className={parentStyles.main}>
        <h1>About</h1>

        <section className={styles.section}>
          <h2>
            <FontAwesomeIcon icon={faUser} /> プロフィール
          </h2>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>氏名</th>
                <td>上中野 瑞人（かみなかの みずと）</td>
              </tr>
              <tr>
                <th>出身</th>
                <td>大阪府堺市</td>
              </tr>
              <tr>
                <th>生年</th>
                <td>2005年生まれ (平成17年)</td>
              </tr>
              <tr>
                <th>所属</th>
                <td>大阪産業大学 デザイン工学部 情報システム学科</td>
              </tr>
              <tr>
                <th>関心分野</th>
                <td>
                  プログラミング / アプリ開発 / ウェブ開発 / ネットワーク
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>
            <FontAwesomeIcon icon={faDiagramProject} /> 概要
          </h2>
          <p>
            高校時代の文化祭でのイベント用Webアプリ開発をきっかけに、
            IT技術を実際に使われる形で提供することに関心を持つようになりました。
          </p>
          <p>
            現在は大学でネットワークやセキュリティの基礎を体系的に学び、
            個人でもソフトウェアやWebサービスの開発をしています。
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            <FontAwesomeIcon icon={faClockRotateLeft} /> これまでの歩み
          </h2>

          <ul className={styles.timeline}>
            <li className={styles.timelineItem}>
              <div className={styles.timelineTitle}>小学生</div>
              <p>
                自宅にパソコンはありませんでしたが、
                3DSの「プチコン3号」を使ってBASIC風の言語で簡単なゲームを作って遊んでいました。
              </p>
              <p>
                また、携帯ゲーム機のブラウザを使い、
                HTMLの入門サイトを見ながらウェブサイトを作ってみるなど、
                今思えばかなり無理のある環境で触れていたと思います。
              </p>
            </li>

            <li className={styles.timelineItem}>
              <div className={styles.timelineTitle}>中学生</div>
              <p>
                中学生になってから安くノートパソコンを購入し、
                メモリが足りなかったため増設するなど、
                パソコンの仕組みにも興味を持ち始めました。
              </p>
              <p>
                その後はサーバーを立てたり、プログラムを書いたりして遊ぶようになり、
                だんだんとものを使うというユーザー側からものをつくるという開発者側へと意識が変わっていきました。
              </p>
            </li>

            <li className={styles.timelineItem}>
              <div className={styles.timelineTitle}>高校生</div>
              <p>
                高校ではインターネット部に所属し、
                文化祭ではイベント用の抽選器となるWebアプリを開発しました。
              </p>
              <p>
                部長として普段の活動をどうすべきか考えるのは難しく、
                まとめていくことに悩む場面も多くありましたが、
                高校3年生という忙しい時期の中でも、なんとか形にすることができました。
              </p>
              <p>
                友人の協力があってこそ成し遂げられた経験であり、
                チームで取り組むことの大切さを学びました。
                また、体育祭では応援団にも参加していました。
              </p>
              <p>
                当時は自分で調べながらコードを書き、
                Webを公開するためにVPSを借りるなど、
                試行錯誤しながら開発していました。
              </p>
            </li>

            <li className={styles.timelineItem}>
              <div className={styles.timelineTitle}>大学生（現在）</div>
              <p>
                大学生になってからは教養科目を学びつつ、
                専門科目や資格勉強を通して、
                これまで独学で学んできた知識を改めて整理・修正できていると感じています。
              </p>
              <p>
                講義や資格では要件定義や設計、アルゴリズム、
                ネットワーク、セキュリティなどに触れており、
                それらを個人開発にも活かしています。
              </p>
              <p>
                以前は独学だったので自己流でコードを書きながら開発することが多かったのですが、
                大学や資格の学習を通じて、
                企業での開発にも対応できる考え方を学べていると感じています。
              </p>
              <p>
                最近は自分のサービスやアプリのユーザーも増えてきたため、
                このタイミングでセキュリティを学べているのは
                ちょうど良かったと感じています。
              </p>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            <FontAwesomeIcon icon={faRocket} /> 現在の活動
          </h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faCode} />
              <br />
              <strong>個人開発</strong>
              <p>
                ウェブ/ソフトウェア開発を継続。
                実際のユーザーを意識した改善や運用を行っています。
              </p>
            </div>

            <div className={styles.card}>
              <FontAwesomeIcon icon={faShieldHalved} />
              <br />
              <strong>セキュリティ/ネットワーク</strong>
              <p>
                大学・資格学習を通じて、
                サービス運営に必要な知識を強化しています。
              </p>
            </div>

            <div className={styles.card}>
              <FontAwesomeIcon icon={faPeopleGroup} />
              <br />
              <strong>課外活動</strong>
              <p>
                クラブ活動や大学祭、オープンキャンパス運営を通じて、
                人と関わる経験も積んでいます。
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            <FontAwesomeIcon icon={faBullseye} /> これから
          </h2>
          <p>
            現在は大学でITを学びつつ、個人での開発も続けています。
          </p>
          <p>
            将来的にはIT技術を活かし、
            社会に貢献できるエンジニアになりたいと考えています。
          </p>
        </section>
      </main>
    </div>
  );
}
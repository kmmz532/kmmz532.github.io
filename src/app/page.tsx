import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Top() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.textContainer}>
            <h1>Mizuto, Kaminakano</h1>
            <p>
              Developer / Undergraduate Student of Information System
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/icon.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className={styles.profileImage}
            />
          </div>
        </div>

        <div className={styles.links}>
          <Link href="https://x.com/kmmz1127" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
            <FontAwesomeIcon icon={faTwitter} className={styles.linkIcon} />
          </Link>
          <Link href="https://www.instagram.com/_miz210/" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
            <FontAwesomeIcon icon={faInstagram} className={styles.linkIcon} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61572863020497&ref=_ig_profile_ac" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
            <FontAwesomeIcon icon={faFacebook} className={styles.linkIcon} />
          </Link>
          <Link href="https://github.com/kmmz532" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FontAwesomeIcon icon={faGithub} className={styles.linkIcon} />
          </Link>
          <Link href="mailto:contact@kmmz.jp" target="_blank" rel="noopener noreferrer" title="Email">
            <FontAwesomeIcon icon={faEnvelope } className={styles.linkIcon} />
          </Link>
        </div>

        <div className={styles.content}>
          <h2>About Me</h2>
          <p>
            仕組みを理解して作ることを大切にしているIT系の大学生です。高校時代の文化祭でのイベント用のアプリ作成をきっかけに、現在は大学でネットワーク、セキュリティの基礎を固めています。Web開発（バックエンド/フロントエンド）に加え、アプリ開発などにも興味を持ち、日々コードを書いています。
          </p>

          <h2>Skills</h2>
          <div className={styles.skills}>

            <div className={styles.skillCard}>
              <h3>資格/免許</h3>
              <div className={styles.skillTags}>
                <span>ITパスポート</span>
                <span>基本情報技術者試験</span>
                <span>応用情報技術者試験</span>
                <span>英検準2級</span>
                <span>MT普通自動車</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>プログラミング/その他言語</h3>
              <div className={styles.skillTags}>
                <span>Java</span>
                <span>PHP</span>
                <span>C/C++</span>
                <span>C#</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
              </div>
              <br />
              <div className={styles.skillTags}>
                <span>HTML</span>
                <span>CSS</span>
                <span>SQL</span>
                <span>Bash</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>フレームワーク</h3>
              <div className={styles.skillTags}>
                <span>Next.js</span>
                <span>React</span>
                <span>.NET</span>
                <span>Node.js/Bun</span>
                <span>MUI</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>オペレーティングシステム</h3>
              <div className={styles.skillTags}>
                <span>Windows</span>
                <span>macOS</span>
                <span>Ubuntu</span>
                <span>CentOS</span>
                <span>Debian</span>
                <span>RasbianOS</span>
                <span>Android</span>
                <span>iOS</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>ツール/IDE</h3>
              <div className={styles.skillTags}>
                <span>Visual Studio Code</span>
                <span>Visual Studio</span>
                <span>IntelliJ IDEA</span>
                <span>EmEditor</span>
                <span>Vim</span>
              </div>

              <br />
              
              <div className={styles.skillTags}>
                <span>Git</span>
                <span>Docker</span>
                <span>XAMPP</span>
                <span>MySQL</span>
                <span>SQLite</span>
                <span>GitHub</span>
                <span>Cloudflare</span>
                <span>Firebase</span>
                <span>Apache</span>
                <span>Gemini</span>
                <span>ChatGPT</span>
                <span>Claude</span>
                <span>NotebookLM</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>I LOVE SOFTWARE</h3>
              <div className={styles.skillTags}>
                <span>EmEditor</span>
                <span>PukiWiki</span>
                <span>Blender</span>
                <span>FireAlpaca</span>
                <span>AviUtl</span>
                <span>GodotEngine</span>
                <span>Minecraft</span>
              </div>
            </div>
          </div>

          <h2>Education</h2>
          <ul>
            <li>
              <strong>2024.4 - 大阪産業大学 デザイン工学部 情報システム学科 入学</strong>
            </li>
            <li>
              <strong>2024.3 - 大阪府立金剛高等学校 普通科 卒業</strong>
            </li>
            <li>
              <strong>2021.4 - 大阪府立金剛高等学校 普通科 入学</strong>
            </li>
          </ul>

          <h2>Other/Works</h2>
          <p>
            PGP公開鍵: <Link href="/public.asc">public.asc</Link><br /><br />
            <Link href="https://tool.kmmz.jp/">かみみずツール</Link> - 開発したウェブツール<br />
            <Link href="https://sv.kmmz.jp/wiki/">かみみず備忘録</Link> - 自宅サーバに設置したウィキ<br />
            <Link href="https://kmmz532.github.io/sql-dungeons/">SQLダンジョン</Link> - SQLをゲーム感覚で学習できるウェブアプリ<br />
            <Link href="https://osu-denken.github.io">電研公式サイト</Link> - 大阪産業大学 電子計算研究部の公式サイト<br />
          </p>
        </div>
      </main>
    </div>
  );
}

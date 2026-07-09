"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import parentStyles from "../page.module.css";
import styles from "./contact.module.css";

// Turnstile Site Key(公開値)
const TURNSTILE_SITE_KEY = "0x4AAAAAADyRYCvHAM1eOAFG";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending">("idle");
  const [result, setResult] = useState("");
  const [token, setToken] = useState("");

  const widgetContainer = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  function renderWidget() {
    if (!window.turnstile || !widgetContainer.current || widgetId.current) {
      return;
    }
    widgetId.current = window.turnstile.render(widgetContainer.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: (t) => setToken(t),
      "error-callback": () => setToken(""),
      "expired-callback": () => setToken(""),
    });
  }

  useEffect(() => {
    // スクリプトが既に読み込まれている場合(クライアント遷移)に描画
    renderWidget();
    return () => {
      if (window.turnstile && widgetId.current) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, []);

  function resetWidget() {
    if (window.turnstile && widgetId.current) {
      window.turnstile.reset(widgetId.current);
    }
    setToken("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!token) {
      setResult("認証を完了してから送信してください。");
      return;
    }

    setStatus("sending");
    setResult("送信中…");

    try {
      const res = await fetch("https://api.kmmz.jp/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          token,
        }),
      });
      if (res.status === 403) {
        setResult("認証に失敗しました。お手数ですが再度お試しください。");
        return;
      }
      if (!res.ok) throw new Error();
      setResult("送信しました。ありがとうございます。");
      form.reset();
    } catch {
      setResult("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setStatus("idle");
      // トークンは1回限り有効なので毎回リセットする
      resetWidget();
    }
  }

  return (
    <div className={parentStyles.page}>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <main className={parentStyles.main}>
        <h1>Contact</h1>
        <p>
          <a href="mailto:contact@kmmz.jp">contact@kmmz.jp</a>からご連絡、もしくは下記のフォームからお願いいたします。
        </p>

        <h2>お問い合わせフォーム</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>お名前</span>
            <input type="text" name="name" required maxLength={100} />
          </label>
          <label className={styles.field}>
            <span>メールアドレス</span>
            <input type="email" name="email" required maxLength={254} placeholder="abc123@example.com" />
          </label>
          <label className={styles.field}>
            <span>内容</span>
            <textarea name="message" required maxLength={5000} rows={6} />
          </label>
          <div ref={widgetContainer} />
          <button type="submit" disabled={status === "sending" || !token}>
            送信
          </button>
          <p className={styles.result} role="status" aria-live="polite">
            {result}
          </p>
        </form>
      </main>
    </div>
  );
};

export default Contact;

"use client";

import { useState } from "react";
import parentStyles from "../page.module.css";
import styles from "./contact.module.css";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending">("idle");
  const [result, setResult] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

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
        }),
      });
      if (!res.ok) throw new Error();
      setResult("送信しました。ありがとうございます。");
      form.reset();
    } catch {
      setResult("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <div className={parentStyles.page}>
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
          <button type="submit" disabled={status === "sending"}>
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

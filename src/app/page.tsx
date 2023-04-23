import styles from "./page.module.css"
import SampleText from "@/contents/sample-text.mdx"

export default function Home() {
  return (
    <main className={styles.main}>
      <SampleText />
    </main>
  )
}

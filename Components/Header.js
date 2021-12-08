import styles from "./header.module.css";
import Link from "next/link";
function Header() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <h1> Allyson's Site</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/maps">Maps</Link>
            </li>
            <li>
              <Link href="/pigs_disease">Piggies</Link>
            </li>
            <li>
              <Link href="/banging_playlist">Playlist</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

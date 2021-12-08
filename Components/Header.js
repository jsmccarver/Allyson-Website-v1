import styles from "./header.module.css"
function Header() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.container}>
            <h1>My Allyson's Cute Site</h1>
          <nav>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/maps">Maps</a>
              </li>
              <li>
                <a href="/pigs_disease">Piggies</a>
              </li>
              <li>
                <a href="/banging_playlist">Playlist</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
     
    </>
  );
}

export default Header;

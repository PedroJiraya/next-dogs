import Link from "next/link";
import styles from "@/components/header.module.css";
import Image from "next/image";

export default async function Header() {
  const user =  false;

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href={"/"}>
          <Image src={"/assets/dogs.svg"} alt="dogs" width={28} height={22} />
        </Link>
        {user ? (
          <Link className={styles.login} href={"/conta"}>
            Pedro
          </Link>
        ) : (
          <Link className={styles.login} href={"/login"}>
            Login | Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

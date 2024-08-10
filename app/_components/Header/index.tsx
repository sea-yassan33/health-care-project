import Image from "next/image";
import Link from 'next/link';
import styles from "./index.module.css";

const classStyles = {
  // ヘッダーのスタイル
  navStyle : "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start", 
  navLink : "d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none",
  navUl: "nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0",
  navLi01: "nav-link px-2",
};

export default function Header(){
  return(
    <header className={`p-3 bg-secondary`}>
        <div className={`container`}>
            <div className={`${classStyles.navStyle}`}>
                <Link href="/" className={`${classStyles.navLink}`}>
                    <button type="button" className="btn btn-outline-dark">Health Care Infomatio Page</button>
                </Link>
            </div>
        </div>
    </header>
  );
}
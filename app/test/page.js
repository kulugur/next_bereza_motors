import { useAuth } from '../auth/login'
import Link from "next/link"

export async function Header() {
  const auth = await useAuth
  console.log(auth)

  return (
    <header>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <nav>
        {auth ? (
          <Link href="/panel">Panel (Protected Route)</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
export default Header;


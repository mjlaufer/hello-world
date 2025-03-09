import styles from './page.module.css';

export default async function Home() {
    const response = await fetch('http://localhost:8000/api/greeting');
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <p>{data.greeting}</p>
            </main>
        </div>
    );
}

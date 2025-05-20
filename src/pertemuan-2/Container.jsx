export default function Container({children}){
    return(
        <div className="card">
            <h1>Artikel Bola</h1>
            <br/>
                {children}
            <br/>
            <footer>
                <p>2025 - Pekan Baru</p>
            </footer>
        </div>
    )
}
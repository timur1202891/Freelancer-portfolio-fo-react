const Contacts = () => {
	return ( 
		<>
		    <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Aqtobe, Kazakstan</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="https://t.me/timur120289">+7 (771) 227-87-53</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:timur1202891@gmail.com">timur1202891@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
		</>
	 );
}
 
export default Contacts;
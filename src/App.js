import Card from './components/Card/Card';
import Headr from './components/Headr/Headr';
import Drawer from './components/Drawer/Drawer';

const arr = [
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999},
    {name: 'Мужские Кроссовки Nike Air Max 270', price: 15600}
]

function App() {
    return (
        <div className="wrapper clear">
            <Headr/>
            <Drawer />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>

                <div className="d-flex">
                    <Card/>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image2.jpg" alt="image1"/>
                        <h5>Мужские Кроссовки Nike Air Max 270</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/Plus.svg" alt="plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image3.jpg" alt="image1"/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/Plus.svg" alt="plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/image4.jpg" alt="image1"/>
                        <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/Plus.svg" alt="plus"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

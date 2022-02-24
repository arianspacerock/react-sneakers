
import Headr from './components/Headr/Headr';
import Drawer from './components/Drawer/Drawer';
import Card from "./components/Card";

const arr = [
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: "12 999 руб.", imageUrl: "/img/sneakers/image1.jpg"},
    {title: 'Мужские Кроссовки Nike Air Max 270', price: "15 999 руб.", imageUrl: "/img/sneakers/image2.jpg"},
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: "8 499 руб.", imageUrl: "/img/sneakers/image3.jpg"},
    {title: 'Кроссовки Puma X Aka Boku Future Rider', price: "8 999 руб.", imageUrl: "/img/sneakers/image4.jpg"},
]

function App() {
    return (
        <div className="wrapper clear">
            <Headr />
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
                    {arr.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            onFavorite={() => console.log('Нажали добавить')}
                            onPlus={() => console.log('Нажали плюс')}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;

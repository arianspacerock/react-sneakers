import React from 'react'
import Headr from './components/Headr/Headr'
import Drawer from './components/Drawer/Drawer'
import Card from "./components/Card"

function App() {
    const [items, setItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() => {
        fetch('https://623c697f8e9af5878950b71c.mockapi.io/items')
            .then((res) => {
               return res.json()
           })
            .then((json) => {
               setItems(json)
           })
    }, [])

    return (
        <div className="wrapper clear">
            <Headr onClickCart = {() => setCartOpened(true)} />
            {cartOpened && <Drawer onClose = {() => setCartOpened(false)} />}
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {items.map((obj) => (
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

export default App
